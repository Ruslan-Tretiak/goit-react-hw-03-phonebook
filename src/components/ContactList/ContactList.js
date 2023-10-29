import React from 'react';
// import { ContactListItem } from './ContactListItem';
import { List, ListItem, ListItemText, DeleteButton } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <ListItemText>{contact.name} - {contact.number}</ListItemText>
          <DeleteButton onClick={() => onDelete(contact.id)}>Delete</DeleteButton>
        </ListItem>
      ))}
    </List>
  );
}


