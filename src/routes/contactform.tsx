import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../redux/contactSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux';

// contactform Component for creating and editing contact
const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const { contactId } = useParams();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    status: 'active',
  });

  useEffect(() => {
    if (contactId) {
      const contactToEdit = contacts.find(
        (contact) => contact.id === contactId,
      );
      if (contactToEdit) {
        setFormState({
          firstName: contactToEdit?.firstName,
          lastName: contactToEdit?.lastName,
          status: contactToEdit?.status,
        });
      }
    }
  }, [contactId, contacts]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      status: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.firstName.trim() !== '' && formState.lastName.trim() !== '') {
      const action = contactId
        ? editContact({ ...formState, id: contactId })
        : addContact({ ...formState, id: uuidv4() });
      dispatch(action);
      navigate('/');
    }
  };

  const isFormValid =
    formState.firstName.trim() !== '' && formState.lastName.trim() !== '';

  return (
    <div className='flex-1 flex flex-col'>
      <header className='flex px-3 justify-between items-center bg-gray-100 border border-b-gray-200 h-12'>
        <h2 className='ml-7 md:ml-0'>Create Contact Page</h2>
      </header>
      <div className='flex-1 flex justify-center items-center'>
        <form
          onSubmit={handleSubmit}
          className='mx-5 sm:w-96 flex flex-col gap-5 border border-gray-200 p-3 rounded-md'>
          <div className='flex items-center gap-5'>
            <label htmlFor='firstName' className='w-[30%]'>
              First Name:{' '}
            </label>
            <input
              id='firstName'
              type='text'
              value={formState.firstName}
              onChange={handleInputChange}
              placeholder='First Name'
              className='w-[70%] px-2 py-1 border bg-gray-100 rounded-md focus-visible:outline-none'
            />
          </div>
          <div className='flex items-center gap-5'>
            <label htmlFor='lastName' className='w-[30%]'>
              Last Name:{' '}
            </label>
            <input
              id='lastName'
              type='text'
              value={formState.lastName}
              onChange={handleInputChange}
              placeholder='Last Name'
              className='w-[70%] px-2 py-1 border bg-gray-100 rounded-md focus-visible:outline-none'
            />
          </div>
          <div className='flex items-center gap-5'>
            <div className='w-[30%]'>Status: </div>
            <div className='flex flex-col'>
              <div className='inline-flex items-center gap-2 cursor-pointer'>
                <input
                  id='active'
                  type='radio'
                  value='active'
                  checked={formState.status === 'active'}
                  onChange={handleStatusChange}
                  className='cursor-pointer'
                />
                <label htmlFor='active' className='cursor-pointer'>
                  Active
                </label>
              </div>
              <div className='inline-flex gap-2'>
                <input
                  id='inactive'
                  type='radio'
                  value='inactive'
                  checked={formState.status === 'inactive'}
                  onChange={handleStatusChange}
                  className='cursor-pointer'
                />
                <label htmlFor='inactive' className='cursor-pointer'>
                  Inactive
                </label>
              </div>
            </div>
          </div>
          <Button type='submit' disabled={!isFormValid}>
            {contactId ? 'Edit Contact' : 'Save Contact'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
