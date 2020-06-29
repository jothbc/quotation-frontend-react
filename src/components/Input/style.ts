import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border: 1px solid #7d7d7d;
  padding: 1px 5px;
  border-radius: 5px;
  height: 30px;

  line-height: 29px;

  span {
    color: #7d7d7d;
    font-size: 18px;
    border-right-style: solid;
    border-right-color: #7d7d7d;
    border-right-width: 1px;
    padding-right: 5px;
    font-weight: 700;
  }
  input {
    color: #585858;
    border: none;
    margin: 0 5px;
    font-size: 18px;
  }
`;
