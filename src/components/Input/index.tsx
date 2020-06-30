import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // poderia deixar sem mas quero obrigar aos inputs a terem um name
}

const Input: React.FC<InputProps> = ({ name, children, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <span>{children}</span>
      <input ref={inputRef} {...rest} />
    </Container>
  );
};

export default Input;
