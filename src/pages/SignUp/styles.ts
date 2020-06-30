import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const BackgroundFooter = styled.div`
  width: 100%;
  height: 40%;
  position: fixed;
  bottom: 0;
  background: #151515;
  z-index: -1;
`;

export const Container = styled.div`
  width: 450px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  /* border: 1px solid red; */

  h1 {
    z-index: 1;
    font-size: 2.5em;
    position: relative;
    top: 30px;
    left: -180px;
    background: #151515;
    color: #fff;
    padding: 5px 30px;
    border-radius: 10px;
    letter-spacing: 0.2em;

    transition: left 1s;

    svg {
      margin-right: 10px;
      transition: transform 0.2s;

      &:hover {
        transform: translateX(-10px);
      }
    }

    @media (max-width: 680px) {
      left: 0;
    }
  }

  form {
    /* border: 1px solid green; */
    position: relative;
    width: 100%;
    height: max-content;
    background: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding-bottom: 100px;

    flex-direction: column;

    div {
      margin-top: 60px;
      span {
        font-size: 0.9em;
        white-space: nowrap;
        /* padding: 0 5px; */
        /* display: inline-block; */
        width: max-content;
      }
      & + div {
        margin-top: 16px;
      }
      width: 75%;
      input {
        width: 100%;
      }
    }
    a {
      font-size: 0.9em;
      font-weight: bold;
      position: absolute;
      bottom: 10px;
      right: 15px;
      text-decoration: none;
      color: #0186e7;

      transition: color 0.3s;
      &:hover {
        color: ${shade(0.5, '#0186e7')};
      }
    }

    transition: width 1s;
    @media (max-width: 550px) {
      width: 400px;
    }
  }
`;

interface ButtonProps {
  isClicked?: boolean;
}

const animationButton = css`
  width: 90%;
  img {
    transform: rotate(-30deg);
  }
`;

export const Button = styled.button<ButtonProps>`
  position: absolute;
  bottom: 40px;
  left: 20px;
  background: #3a9ce2;
  border: none;
  border-radius: 10px;
  transition: background-color 0.5s, width 1s;

  display: flex;
  align-items: center;
  padding: 0 10px;

  font-weight: bold;
  width: 110px;

  &:hover {
    background: ${shade(0.2, '#3a9ce2')};
  }
  img {
    margin-left: auto;
    width: 30px;
    height: 30px;
    transition: transform 0.3s;
  }
  ${(props) => props.isClicked && animationButton}
`;
