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

  small {
    position: absolute;
    right: 0;
    transform: translateY(-110%);
    background: #f2f2f2;
    color: #0186e7;
    border-radius: 5px;
    white-space: nowrap;
    padding: 2px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    ::before {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0%;
      border-style: solid;
      border-width: 6px 6px 0 6px;
      border-color: #f2f2f2 transparent;
      transform: translateY(100%);
    }
  }
`;
