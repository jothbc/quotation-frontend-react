import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #151515;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  span {
    color: #fff;
    font-size: 32px;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: 300ms;
    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }

  button {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    background: #151515;
    border: none;
    transition: 300ms;
    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
