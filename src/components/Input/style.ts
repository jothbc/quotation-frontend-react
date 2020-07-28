import styled from 'styled-components';

export const Container = styled.div`
  background: #f1f1f1;
  border: 1px solid #7a7a7a;
  border-radius: 10px;
  color: #585858;
  font-weight: 700;
  font-size: 0.8em;
  letter-spacing: 0.1em;
  padding: 0 5px;
  display: flex;
  width: 85%;
  transform: translateX(-3%);
  span {
    border-right: 1px solid #7a7a7a;
    padding: 5px 15px;
    background: transparent;
  }
  input {
    background: transparent;
    flex: 1;
    outline: none;
    border: none;
    margin-left: 5px;
    color: #585858;
    font-weight: 700;
    letter-spacing: 0.1em;
  }
`;
