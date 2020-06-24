import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background: #f2f2f2;
  width: 100vw;
  height: 100%;
`;

export const Header = styled.div`
  z-index: 2;
  background: #151515;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #fff;
    font-size: 2em;
    letter-spacing: 0.2em;
    margin-left: 20px;
  }
  button {
    background: transparent;
    margin-right: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    border: none;
    letter-spacing: 0.2em;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  background: #151515;
  height: 50px;

  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const Button = styled.button``;

export const Feed = styled.li`
  width: 90%;
  background: #f1f1f1;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 70px;
  height: max-content;
  padding-bottom: 50px;

  display: flex;
  align-items: center;
  flex-direction: column;
  ul {
    background: transparent;
    margin-top: 10px;
    width: 90%;
  }
`;

export const DivInsert = styled.div`
  background: #e8e8e8;
  width: 90%;
  padding-top: 20px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 10px;
  > div {
    display: flex;
    flex-direction: column;
  }
  > div + div {
    margin-top: -50px;
    button {
      border: none;
      background: transparent;
      margin-left: 5px;
    }
    img {
      width: 30px;
      transition: transform 0.5s;
    }
    img:hover {
      transform: rotate(-15deg);
    }
  }
`;

export const DivInput = styled.div`
  background: #fff;
  border: 1px solid #7a7a7a;
  height: 30px;
  width: 70vw;
  display: flex;
  border-radius: 10px;
  margin-bottom: 10px;
  line-height: 30px;
  span {
    color: #7a7a7a;
    padding: 0 10px;
    border-right-color: #7a7a7a;
    border-right-width: 1px;
    border-right-style: solid;
  }
  input {
    border: none;
    margin: 0 5px;
    background: transparent;
    width: 80%;
    font-size: 1.2em;
  }
  + div {
    transform: translateX(20px);
  }
`;
