import React from 'react';
import { Contact, deleteContact } from '../redux/contactSlice';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

type ContactCardProps = {
  contact: Contact;
};

// Contact Card component for showing the contact information
const ContactCard = ({ contact }: ContactCardProps) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className='flex flex-col h-40 w-64 rounded-md border p-5 gap-3'>
      <p className='text-2xl font-bold truncate'>{`${contact.firstName} ${contact.lastName}`}</p>
      <p>
        Status: <span className='text-gray-500'>{contact.status}</span>
      </p>
      <div className='flex w-full gap-2'>
        <Link className='w-[50%]' to={`edit/${contact.id}`}>
          <Button className='w-full'>Edit</Button>
        </Link>
        <Button
          onClick={handleDeleteContact}
          className='w-[50%] bg-white border border-customRed text-black'>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
