import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
// ... код додавання контакту ...
  handleAddContact = (newContact) => {
    const { name, number } = newContact;
    const checkContact = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (checkContact) {
      alert('Contact with this name already exists');
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));
  }
// ... код видалення контакту ...
  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }
// ... код зміни фільтра ...
  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  }
// ... код фільтрації контактів ...
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}




