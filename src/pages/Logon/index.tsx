import React from 'react';
import { Container, BackgroundFooter } from './styles';

import cartImg from '../../assets/cart_market2.gif';

import api from '../../services/api';

import Input from '../../components/Input';

const Logon: React.FC = () => {
  return (
    <>
      <BackgroundFooter />
      <Container>
        <h1>QUOTATION</h1>
        <form>
          <Input name="email">Email</Input>
          <Input name="password" type="password">
            Senha
          </Input>
          <button type="button">LOGON</button>
        </form>
      </Container>
    </>
  );
};
export default Logon;
