import React, { useState } from 'react';
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
  LinkNone,
  BoxContent,
  LiQuotation,
  LiCompany,
  LiFeed,
} from './styles';

import parati from '../../assets/temp/parati.png';
import atacadoJoinvile from '../../assets/temp/atacadao.jpg';
import fort from '../../assets/temp/fort.png';

const friendsTemp = [
  {
    id: 1,
    name: 'Parati Distribuidora',
    logo: parati,
  },
  {
    id: 2,
    name: 'Atacado Joinvile',
    logo: atacadoJoinvile,
  },
  {
    id: 3,
    name: 'Fort Atacadista',
    logo: fort,
  },
];

const meQuotations = [
  {
    id: 1,
    code: 236455,
    date: '22/06/2020',
  },
  {
    id: 13,
    code: 256771,
    date: '07/12/2020',
  },
  {
    id: 64,
    code: 269882,
    date: '01/02/2021',
  },
];

const feedTemp = [
  {
    id: 1,
    company: {
      id: 1,
      logo: parati,
      name: 'Parati Distribuidora',
    },
    date: '02/05/2020',
    quotation: 235772,
    views: 10,
    quotations: 6,
    status: 'open',
  },
  {
    id: 2,
    company: {
      id: 2,
      logo: atacadoJoinvile,
      name: 'Atacado Joinvile',
    },
    date: '17/06/2020',
    quotation: 245882,
    views: 32,
    quotations: 12,
    status: 'close',
  },
  {
    id: 3,
    company: {
      id: 3,
      logo: fort,
      name: 'Fort Atacadista',
    },
    date: '30/07/2020',
    quotation: 245920,
    views: 13,
    quotations: 4,
    status: 'open',
  },
  {
    id: 4,
    company: {
      id: 1,
      logo: parati,
      name: 'Parati Distribuidora',
    },
    date: '02/05/2020',
    quotation: 235772,
    views: 10,
    quotations: 6,
    status: 'open',
  },
  {
    id: 5,
    company: {
      id: 2,
      logo: atacadoJoinvile,
      name: 'Atacado Joinvile',
    },
    date: '17/06/2020',
    quotation: 245882,
    views: 32,
    quotations: 12,
    status: 'close',
  },
  {
    id: 6,
    company: {
      id: 3,
      logo: fort,
      name: 'Fort Atacadista',
    },
    date: '30/07/2020',
    quotation: 245920,
    views: 13,
    quotations: 4,
    status: 'open',
  },
  {
    id: 7,
    company: {
      id: 1,
      logo: parati,
      name: 'Parati Distribuidora',
    },
    date: '02/05/2020',
    quotation: 235772,
    views: 10,
    quotations: 6,
    status: 'open',
  },
  {
    id: 8,
    company: {
      id: 2,
      logo: atacadoJoinvile,
      name: 'Atacado Joinvile',
    },
    date: '17/06/2020',
    quotation: 245882,
    views: 32,
    quotations: 12,
    status: 'close',
  },
  {
    id: 9,
    company: {
      id: 3,
      logo: fort,
      name: 'Fort Atacadista',
    },
    date: '30/07/2020',
    quotation: 245920,
    views: 13,
    quotations: 4,
    status: 'open',
  },
  {
    id: 10,
    company: {
      id: 1,
      logo: parati,
      name: 'Parati Distribuidora',
    },
    date: '02/05/2020',
    quotation: 235772,
    views: 10,
    quotations: 6,
    status: 'open',
  },
  {
    id: 11,
    company: {
      id: 2,
      logo: atacadoJoinvile,
      name: 'Atacado Joinvile',
    },
    date: '17/06/2020',
    quotation: 245882,
    views: 32,
    quotations: 12,
    status: 'close',
  },
  {
    id: 12,
    company: {
      id: 3,
      logo: fort,
      name: 'Fort Atacadista',
    },
    date: '30/07/2020',
    quotation: 245920,
    views: 13,
    quotations: 4,
    status: 'open',
  },
];

const Dashboard: React.FC = () => {
  const myId = 1;
  const [friends, setFriends] = useState(friendsTemp);
  const [quotations, setQuotations] = useState(meQuotations);
  const [feed, setFeed] = useState(feedTemp);

  function handleLogout() {
    // fazer o logout
    console.log('logout');
  }
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
        <Section>
          <SectionBox>
            <Box>
              <BoxContent>
                <ul>
                  {/* Me Quotations */}
                  {quotations.map((quotation) => (
                    <LiQuotation key={quotation.id}>
                      <LinkNone to={`quotation-owner/${quotation.code}`}>
                        <span>{`#${quotation.code}`}</span>
                        <span>{quotation.date}</span>
                      </LinkNone>
                    </LiQuotation>
                  ))}
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
                  {/* Friends Companys List */}
                  {friends.map((friend) => (
                    <LiCompany key={friend.id}>
                      <img src={friend.logo} alt="" />
                      <span>{friend.name}</span>
                    </LiCompany>
                  ))}
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
              {/* Feed */}
              {feed.map((activity) => (
                <LiFeed key={activity.id}>
                  <img src={activity.company.logo} alt="" />
                  <LinkNone
                    to={
                      activity.company.id === myId
                        ? `quotation-owner/${activity.quotation}`
                        : `quotation/${activity.quotation}`
                    }
                  >
                    <div>
                      <div>
                        {activity.company.name}
                        <span>
                          {`${
                            activity.status === 'open'
                              ? 'iniciou uma nova cotação em '
                              : 'encerrou a cotação em '
                          }
                        ${activity.date}`}
                        </span>
                        <span>{`#${activity.quotation}`}</span>
                      </div>
                      <div>
                        <span>
                          <FiEye />
                          {`Views ${activity.views}`}
                        </span>
                        <span>
                          <FiFileText />
                          {`Cotações ${activity.quotations}`}
                        </span>
                      </div>
                    </div>
                  </LinkNone>
                </LiFeed>
              ))}
            </ul>
          </Feed>
        </Section>

        <Footer />
      </Container>
    </>
  );
};
export default Dashboard;
