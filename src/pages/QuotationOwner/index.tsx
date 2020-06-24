import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
  Container,
  Header,
  Button,
  Footer,
  Feed,
  DivInsert,
  DivInput,
} from './styles';

import cart from '../../assets/cart.svg';

const QuotationOwner: React.FC = () => {
  const a = 0;

  function handleLogout() {}

  return (
    <>
      <Container>
        <Header>
          <span>QUOTATION</span>
          <Button onClick={handleLogout}>
            LOGOUT
            <FiLogOut style={{ marginLeft: 5 }} />
          </Button>
        </Header>

        <Feed>
          <DivInsert>
            <div>
              <DivInput>
                <span>Descrição</span>
                <input type="text" />
              </DivInput>
              <DivInput>
                <span>Observação</span>
                <input type="text" />
              </DivInput>
            </div>
            <div>
              <Button>
                <img src={cart} alt="" />
              </Button>
            </div>
          </DivInsert>

          <ul>
            <li>Conteudo</li>
            <li>Conteudo</li>
          </ul>
        </Feed>
        <Footer />
      </Container>
    </>
  );
};

export default QuotationOwner;
