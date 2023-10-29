import styled from 'styled-components';

export const FormContainer = styled.form`
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  width: calc(100% - 12px);
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;
