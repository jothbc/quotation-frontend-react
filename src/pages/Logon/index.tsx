import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { Container, BackgroundFooter, Button } from './styles';

import cartImg from '../../assets/cart_market2.gif';

import api from '../../services/api';

import Input from '../../components/Input';

const Logon: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const history = useHistory();

  function handleLogon(data: any): void {
    setButtonClicked(!buttonClicked);
    console.log(data);
    setTimeout(() => {
      history.push('/dashboard');
    }, 1000);
  }
  return (
    <>
      <BackgroundFooter />
      <Container>
        <h1>QUOTATION</h1>
        <Form onSubmit={handleLogon}>
          <Input name="email">Email</Input>
          <Input name="password" type="password">
            Senha
          </Input>
          <Button type="submit" isClicked={buttonClicked}>
            LOGON
            <img src={cartImg} alt="Logon" />
          </Button>
          <Link to="/signup">inscrever-se</Link>
        </Form>
      </Container>
    </>
  );
};
export default Logon;
