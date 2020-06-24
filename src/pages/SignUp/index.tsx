import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

import api from '../../services/api';

import cartImg from '../../assets/cart_market2.gif';

const SignUp: React.FC = () => {
  const history = useHistory();

  const [buttonClicked, setButtonClicked] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [company, setCompany] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [tel, setTel] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  async function handleButtonClicked() {
    setButtonClicked(true);
    setPasswordValid(true);

    // criar a conta
    if (password !== password2) {
      setButtonClicked(false);
      setPasswordValid(false);
    }

    // const response = await api.post('/signup', {
    //   name,
    //   email,
    //   password,
    //   company,
    //   CNPJ,
    //   tel,
    //   city,
    //   state,
    // });

    // console.log(response.data);
    // voltar para pagina de logon
    history.goBack();
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
              <Input onChange={(e) => setName(e.target.value)} />
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
            <InputLeft Valid={passwordValid}>
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
            <InputLeft style={{ width: 390 }} Valid={passwordValid}>
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

export default SignUp;
