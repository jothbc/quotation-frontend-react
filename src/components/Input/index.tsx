import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; // poderia deixar sem mas quero obrigar aos inputs a terem um name
  icon?: React.ComponentType<IconBaseProps>; // icone opcional, foi passado as propriedades que os icones tem como size, color etc...
}

// esse icon : Icon foi feito pq pra criar uma tag a primeira letra tem que ser maiuscula <Icon> e nao <icon>
const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
