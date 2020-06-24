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
import cartImg from '../../assets/cart_market2.gif';

import api from '../../services/api';

const Logon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const history = useHistory();

  function handleClickButton() {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
    setButtonClicked(true);
    // depois de autenticado
    setTimeout(() => {
      history.push('/dashboard');
    }, 1000);
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
          <Button onClick={handleClickButton} isClicked={buttonClicked}>
            Logon
            <img src={cartImg} alt="" />
          </Button>
          <Link to="/signup">inscrever-se</Link>
        </Form>
      </Container>
    </>
  );
};
export default Logon;
