import React from 'react';
import { FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="filter">Search contacts by name:</label>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
