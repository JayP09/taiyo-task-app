import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import ContactCard from '../components/ContactCard';
import PageLayout from '../ui/PageLayout';

// Contact Route component
const Contact = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  return (
    <PageLayout>
      <PageLayout.Header>
        <h2 className='ml-7 md:ml-0'>Contact Page</h2>
        <Link to='/create'>
          <Button>Create Contact</Button>
        </Link>
      </PageLayout.Header>
      <div className='flex-1 overflow-y-scroll'>
        {contacts.length > 0 ? (
          <div className='flex flex-wrap p-5 sm:p-10 gap-6 justify-center'>
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        ) : (
          <div className='w-full h-full flex flex-col items-center justify-center gap-5 text-center'>
            <p className='text-lg font-semibold text-gray-500'>
              No Contact Found <br />
              Please add contact from <br />
              create contact button
            </p>
            <Link to='/create'>
              <Button>Create Contact</Button>
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Contact;
