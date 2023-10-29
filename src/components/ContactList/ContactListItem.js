import React from 'react';

export const ContactListItem = ({ contact, onDelete }) => {
  return (
    <li>
      {contact.name} - {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
