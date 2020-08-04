import React, { useState } from 'react';
import { FiLogOut, FiChevronRight, FiEye, FiFileText } from 'react-icons/fi';
import { Container, Section, BoxArea, Box, Feed, FeedItem } from './styles';

import { friendsTemp, feedTemp, meQuotations } from '../../temp';
import Header from '../../components/Header';

const Dashboard: React.FC = () => {
  const myId = 1;
  const [friends, setFriends] = useState(friendsTemp);
  const [quotations, setQuotations] = useState(meQuotations);
  const [feed, setFeed] = useState(feedTemp);

  function handleLogout() {
    // fazer o logout
  }
  return (
    <>
      <Container>
        <Header />
        <Section>
          <BoxArea>
            <Box>
              <ul className="quotation">
                {quotations.map((quotation) => (
                  <li key={quotation.id}>
                    <span>{`#${quotation.code}`}</span>
                    <span>{quotation.date}</span>
                  </li>
                ))}
              </ul>
              <button type="button">
                Nova Cotação
                <FiChevronRight />
              </button>
            </Box>
            <Box>
              <ul className="friends">
                {friends.map((friend) => (
                  <li key={friend.id}>
                    <img src={friend.logo} alt={friend.name} />
                    <span>{friend.name}</span>
                  </li>
                ))}
              </ul>
              <button type="button">
                Buscar Empresas
                <FiChevronRight />
              </button>
            </Box>
          </BoxArea>
          <Feed>
            <h3>Atividades Recentes</h3>
            {feed.map((notice) => (
              <FeedItem key={notice.id}>
                <img src={notice.company.logo} alt={notice.company.name} />
                <div className="notice">
                  <div className="header">
                    <span className="company">{notice.company.name}</span>
                    <span>
                      {`${
                        notice.status === 'open'
                          ? ' iniciou uma nova'
                          : ' encerrou uma'
                      } cotação em ${notice.date}  - `}
                    </span>
                    <span className="quotation">{`#${notice.quotation}`}</span>
                  </div>
                  <div className="info">
                    <span>
                      <FiEye />
                      {`Views ${notice.views_count}`}
                    </span>
                    <span>
                      <FiFileText />
                      {`Cotações ${notice.quotations_count}`}
                    </span>
                  </div>
                </div>
              </FeedItem>
            ))}
          </Feed>
        </Section>
      </Container>
    </>
  );
};
export default Dashboard;
