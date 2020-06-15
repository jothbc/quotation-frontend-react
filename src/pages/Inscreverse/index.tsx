import React from 'react';
import {
  Container,
  Header,
  Background,
  BackgroundFooter,
  Form,
  InputLeft,
  InputRight,
  DivInput,
  Input,
  Button,
  Link,
} from './styles';

import cartImg from '../../assets/cart_market2.gif';

const Inscreverse: React.FC = () => {
  return (
    <>
      <Background />
      <BackgroundFooter />
      <Container>
        <Header>QUOTATION</Header>
        <Form>
          <DivInput>
            <InputLeft>
              <span>Seu Nome</span>
            </InputLeft>
            <InputRight>
              <Input type="text" />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Email</span>
            </InputLeft>
            <InputRight>
              <Input type="email" />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Senha</span>
            </InputLeft>
            <InputRight>
              <Input type="password" />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft style={{ width: 390 }}>
              <span>Confirme sua senha</span>
            </InputLeft>
            <InputRight>
              <Input type="password" />
            </InputRight>
          </DivInput>

          <DivInput style={{ marginTop: 50 }}>
            <InputLeft>
              <span>Empresa</span>
            </InputLeft>
            <InputRight>
              <Input type="text" />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>CNPJ</span>
            </InputLeft>
            <InputRight>
              <Input type="number" />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Telefone</span>
            </InputLeft>
            <InputRight>
              <Input type="number" />
            </InputRight>
          </DivInput>

          <DivInput style={{ marginTop: 50 }}>
            <InputLeft>
              <span>Cidade</span>
            </InputLeft>
            <InputRight>
              <Input type="text" />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Estado</span>
            </InputLeft>
            <InputRight>
              <Input type="Text" />
            </InputRight>
          </DivInput>

          <Button isClicked={false}>
            Criar
            <img src={cartImg} alt="" />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Inscreverse;
