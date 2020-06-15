import styled from 'styled-components';
import { Link as LinkDom } from 'react-router-dom';

export const Background = styled.div`
  width: 100vw;
  height: 90vh;
  background: #f2f2f2;
  z-index: -2;
  position: absolute;
`;
export const BackgroundFooter = styled.div`
  width: 100%;
  height: 40%;
  position: fixed;
  bottom: 0;
  background: #151515;
  z-index: -1;
`;
export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background: #fff;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  width: 50%;
  /* min-width: 550px; */
  height: 40vh;
  min-height: 300px;
  margin: 10% auto;
  display: flex;
  transition: all 1s;

  @media (max-width: 1000px) and (min-width: 845px) {
    width: 60vw;
  }
  @media (max-width: 844px) {
    width: 90vw;
  }
`;

export const Header = styled.div`
  font-size: 45px;
  font-weight: bold;
  letter-spacing: 0.3em;
  color: #fff;
  background: #151515;
  display: inline-block;
  padding: 10px 60px;
  border-radius: 15px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
  position: absolute;
  margin-top: -30px;
  margin-left: -80px;
  transition: all 1s;

  @media (max-width: 844px) {
    margin-left: 20px;
  }
  @media (max-width: 574px) {
    width: 70vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 70px;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputLeft = styled.div`
  background: #f1f1f1;
  border: 1px solid #7a7a7a;
  box-sizing: border-box;
  border-radius: 20px 0px 0px 20px;
  padding: 0 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7d7d7d;
  font-weight: bold;
`;

export const InputRight = styled.div`
  background: #f1f1f1;
  border: 1px solid #7a7a7a;
  box-sizing: border-box;
  border-radius: 0px 20px 20px 0px;
  height: 30px;
  width: 100%;
`;

export const DivInput = styled.div`
  display: flex;
  width: 70%;
  margin-left: -50px;

  & + div {
    margin-top: 18px;
    margin-left: 100px;
  }
`;

export const Input = styled.input`
  border: none;
  width: 90%;
  height: 100%;
  align-self: center;
  padding: 0 10px;
  font-size: 1.2em;
  color: #7d7d7d;
  font-weight: bold;
  background: transparent;
`;

interface IButtonProps {
  isClicked: boolean;
}

export const Button = styled.button`
  margin-top: 70px;
  margin-right: auto;
  margin-left: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: ${(props: IButtonProps) => (props.isClicked ? 97 : 20)}%;
  /* transition: width 2s; */
  transition: all 1s;

  padding: 0 20px;
  background: #3a9ce2;
  color: #000;
  border-radius: 10px;
  border: none;

  font-weight: bold;
  img {
    width: 40px;
  }

  @media (max-width: 600px) {
    min-width: 120px;
  }
`;

export const Link = styled(LinkDom)`
  text-decoration: none;
  margin-left: auto;
  margin-right: 20px;
  color: #0186e7;
`;
