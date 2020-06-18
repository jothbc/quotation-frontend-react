import React from 'react';
import { FiLogOut, FiChevronRight, FiEye, FiFileText } from 'react-icons/fi';
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
  LiQuotation,
  LiCompany,
  LiFeed,
} from './styles';

import parati from '../../assets/temp/parati.png';
import atacadao from '../../assets/temp/atacadao.jpg';
import fort from '../../assets/temp/fort.png';

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
            <BoxContent>
              <ul>
                <LiQuotation>
                  <span>#2364522</span>
                  <span>03/06/2020</span>
                </LiQuotation>
                <LiQuotation>
                  <span>#2364522</span>
                  <span>03/06/2020</span>
                </LiQuotation>
                <LiQuotation>
                  <span>#2364522</span>
                  <span>03/06/2020</span>
                </LiQuotation>
                <LiQuotation>
                  <span>#2364522</span>
                  <span>03/06/2020</span>
                </LiQuotation>
                <LiQuotation>
                  <span>#2364522</span>
                  <span>03/06/2020</span>
                </LiQuotation>
              </ul>
            </BoxContent>
            <Link to="/new-quotation">
              Nova Cotação
              <FiChevronRight />
            </Link>
          </Box>
          <Box>
            <BoxContent>
              <ul>
                <LiCompany>
                  <img src={parati} alt="" />
                  <span>Parati</span>
                </LiCompany>
                <LiCompany>
                  <img src={fort} alt="" />
                  <span>Fort Atacadista</span>
                </LiCompany>
                <LiCompany>
                  <img src={atacadao} alt="" />
                  <span>Atacadao Joinvile</span>
                </LiCompany>
              </ul>
            </BoxContent>
            <Link to="/company-search">
              Buscar Empresas
              <FiChevronRight />
            </Link>
          </Box>
        </SectionBox>

        <Feed>
          <span>Atividades Recentes</span>

          <ul>
            <LiFeed>
              <img src={parati} alt="" />
              <div>
                <div>
                  Parati Distribuidora
                  <span>iniciou uma nova cotação em 03/06/2020</span>
                  <span>#236422</span>
                </div>
                <div>
                  <span>
                    <FiEye />
                    Views 10
                  </span>
                  <span>
                    <FiFileText />
                    Cotações 3
                  </span>
                </div>
              </div>
            </LiFeed>

            <LiFeed>
              <img src={fort} alt="" />
              <div>
                <div>
                  Fort Atacadista
                  <span>iniciou uma nova cotação em 03/07/2020</span>
                  <span>#236477</span>
                </div>
                <div>
                  <span>
                    <FiEye />
                    Views 33
                  </span>
                  <span>
                    <FiFileText />
                    Cotações 22
                  </span>
                </div>
              </div>
            </LiFeed>

            <LiFeed>
              <img src={atacadao} alt="" />
              <div>
                <div>
                  Atacado Joinvile
                  <span>iniciou uma nova cotação em 12/07/2020</span>
                  <span>#236444</span>
                </div>
                <div>
                  <span>
                    <FiEye />
                    Views 9
                  </span>
                  <span>
                    <FiFileText />
                    Cotações 7
                  </span>
                </div>
              </div>
            </LiFeed>
          </ul>
        </Feed>
      </Section>

      <Footer />
    </Container>
  </>
);
export default Dashboard;
