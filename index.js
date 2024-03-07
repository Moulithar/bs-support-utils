// index.js

import styled from 'styled-components';

// Text component
const Text = styled.p`
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || 'black'};
  font-weight: ${props => props.fontWeight || 'normal'};
`;

// Button component
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${props => props.bgColor || '#007bff'};
  color: ${props => props.color || 'white'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Input component
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

// Checkbox component
const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 5px;
`;

// Divider component
const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export { Text, Button, Input, Checkbox, Divider };
