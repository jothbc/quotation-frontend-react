import React, { InputHTMLAttributes } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // poderia deixar sem mas quero obrigar aos inputs a terem um name
}

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  return (
    <Container>
      <span>{children}</span>
      <input {...rest} />
    </Container>
  );
};

export default Input;
