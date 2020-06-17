import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import {
  Container,
  Button,
  Header,
  Footer,
  Box,
  Feed,
  Section,
  SectionBox,
  Link,
  BoxContent,
} from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Header>
        <span>QUOTATION</span>
        <Button>
          LOGOUT
          <FiLogOut />
        </Button>
      </Header>
      <Section>
        <SectionBox>
          <Box>
            <BoxContent>Conteudo</BoxContent>
            <Link to="/new-quotation">Nova Cotação</Link>
          </Box>
          <Box>
            <BoxContent>Conteudo</BoxContent>
            <Link to="/company-search">Buscar Empresas</Link>
          </Box>
        </SectionBox>

        <Feed>
          <span>Atividades Recentes</span>
        </Feed>
      </Section>

      <Footer />
    </Container>
  </>
);
export default Dashboard;
