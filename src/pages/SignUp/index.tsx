import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, BackgroundFooter, Button } from './styles';

import cartImg from '../../assets/cart_market2.gif';

import api from '../../services/api';

import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const history = useHistory();

  function handleSignup() {
    setButtonClicked(!buttonClicked);
    // console.log('logon');
    setTimeout(() => {
      history.push('/');
    }, 1000);
  }

  function handleSubmit(data: any): void {
    console.log(data);
  }
  return (
    <>
      <BackgroundFooter />
      <Container>
        <h1>
          <FiChevronLeft size={30} onClick={() => history.goBack()} />
          QUOTATION
        </h1>
        <Form onSubmit={handleSubmit}>
          <Input name="name">Seu Nome</Input>
          <Input name="email" type="email">
            Email
          </Input>
          <Input name="password" type="password">
            Senha
          </Input>
          <Input name="password2" type="password">
            Confirme sua Senha
          </Input>
          <Input name="company">Empresa</Input>
          <Input name="CNPJ">CNPJ</Input>
          <Input name="tel" type="tel">
            Telefone
          </Input>
          <Input name="city">Cidade</Input>
          <Input name="state">Estado</Input>

          <Button type="submit" isClicked={buttonClicked}>
            Cadastrar
            <img src={cartImg} alt="Cadastrar" />
          </Button>
        </Form>
      </Container>
    </>
  );
};
export default SignUp;
