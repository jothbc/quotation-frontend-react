import styled from 'styled-components';
import { Link as LinkDOM } from 'react-router-dom';

export const Container = styled.div`
  background: #f2f2f2;
  width: 100vw;
  height: 100%;
`;

export const Header = styled.div`
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

export const Section = styled.div`
  /* border: 1px solid red; */
  margin-top: 50px;
  height: calc(100vh - 100px);
  display: flex;
  max-width: 100vw;

  @media (max-width: 650px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const SectionBox = styled.div`
  @media (max-height: 600px) {
    overflow-y: auto;
    padding-right: 100px;
  }
`;

export const Box = styled.div`
  margin: 20px;
  width: 300px;
  height: 200px;
  background: #ffffff;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  @media (max-width: 650px) {
    width: 90vw;
  }
`;

export const BoxContent = styled.div`
  /* border: 1px solid green; */
  height: 100%;
  overflow-y: auto;
  padding: 10px 10px 0px 10px;
`;

export const LiQuotation = styled.li`
  display: flex;
  justify-content: space-around;

  border-bottom-color: #666464;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  margin-bottom: 5px;
  padding: 5px;
  span {
    color: #a721a1;
  }
  span + span {
    color: #666464;
  }
`;

export const LiCompany = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  transition: all 0.5s;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &:hover {
    color: #a721a1;
    letter-spacing: 0.1em;
    img {
      width: 40px;
      height: 40px;
      transition: all 0.5s;
    }
  }
  cursor: pointer;
`;

export const Link = styled(LinkDOM)`
  margin-top: auto;
  width: 100%;
  text-decoration: none;
  text-align: center;
  color: #000;
  padding: 10px;
  border: 3px solid #29a1c7;
  border-radius: 0px 0px 10px 10px;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;

  &:hover {
    border: 3px solid #a721a1;
    letter-spacing: 0.2em;
  }
`;

export const Feed = styled.div`
  width: 100%;
  background: #f1f1f1;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  margin: 20px 20px 0 20px;
  height: 100%;

  display: flex;
  justify-content: center;
  overflow-y: auto;
  position: relative;

  & > span {
    position: absolute;
    color: #636363;
    padding: 20px;
    border-bottom-color: #8d8d8d;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    height: 30px;
    width: 90%;
    text-align: center;
  }
  ul {
    background: transparent;
    margin-top: 50px;
    width: 90%;
  }

  @media (max-width: 650px) {
    width: 90vw;
  }
`;

export const LiFeed = styled.li`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  div {
    color: #277dcd;
    width: 100%;
    background: #e8e8e8;
    border-radius: 10px;
    padding-left: 5px;

    /* border: 1px solid green; */
    div {
      border-radius: 0;
      border-bottom-color: #898585;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      width: 90%;
      padding-bottom: 5px;
      span {
        color: black;
        text-align: start;
        margin-left: 10px;
      }
      span + span {
        color: #a721a1;
        font-weight: bold;
      }
    }
    div + div {
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      border: none;
      span {
        color: #666464;
        margin: 0 10px;
        display: flex;
        align-items: center;
      }
      span + span {
        font-weight: normal;
      }
    }
  }
`;
