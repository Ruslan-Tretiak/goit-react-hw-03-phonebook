import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import { FormContainer, FormLabel, FormInput, FormButton} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <FormLabel htmlFor="number">Number:</FormLabel>
        <FormInput
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={this.handleChange}
          required
        />
        <FormButton type="submit">Add Contact</FormButton>
      </FormContainer>
    );
  }
}
