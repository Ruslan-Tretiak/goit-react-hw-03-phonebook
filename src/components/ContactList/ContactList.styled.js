import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItemText = styled.div`
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;
