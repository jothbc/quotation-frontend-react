import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Container } from './style';

const Header: React.FC = () => {
  return (
    <Container>
      <span>QUOTATION</span>
      <button type="button">
        LOGOUT
        <FiLogOut style={{ marginLeft: 5 }} />
      </button>
    </Container>
  );
};
export default Header;
