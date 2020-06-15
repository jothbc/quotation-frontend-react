import React, { useState } from 'react';
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
  const [buttonClicked, setButtonClicked] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [company, setCompany] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [tel, setTel] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  function handleButtonClicked() {
    setButtonClicked(true);

    // criar a conta

    // voltar para pagina de logon
  }

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
              <Input type="text" onChange={(e) => setName(e.target.value)} />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft Valid={emailValid}>
              <span>Email</span>
            </InputLeft>
            <InputRight>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Senha</span>
            </InputLeft>
            <InputRight>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft style={{ width: 390 }}>
              <span>Confirme sua senha</span>
            </InputLeft>
            <InputRight>
              <Input
                type="password"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </InputRight>
          </DivInput>

          <DivInput style={{ marginTop: 50 }}>
            <InputLeft>
              <span>Empresa</span>
            </InputLeft>
            <InputRight>
              <Input type="text" onChange={(e) => setCompany(e.target.value)} />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>CNPJ</span>
            </InputLeft>
            <InputRight>
              <Input type="number" onChange={(e) => setCNPJ(e.target.value)} />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Telefone</span>
            </InputLeft>
            <InputRight>
              <Input type="number" onChange={(e) => setTel(e.target.value)} />
            </InputRight>
          </DivInput>

          <DivInput style={{ marginTop: 50 }}>
            <InputLeft>
              <span>Cidade</span>
            </InputLeft>
            <InputRight>
              <Input type="text" onChange={(e) => setCity(e.target.value)} />
            </InputRight>
          </DivInput>

          <DivInput>
            <InputLeft>
              <span>Estado</span>
            </InputLeft>
            <InputRight>
              <Input type="Text" onChange={(e) => setState(e.target.value)} />
            </InputRight>
          </DivInput>

          <Button onClick={handleButtonClicked} isClicked={buttonClicked}>
            Criar
            <img src={cartImg} alt="" />
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Inscreverse;
