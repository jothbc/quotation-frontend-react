import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

const line_anim = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;
const fill = keyframes`
  from {
    fill: transparent;
  }
  to {
    fill: #f2f2f2;
  }
`;
const logo_anim = keyframes`
  to {
    transform: translate(calc(-500px / 2 + 20%), calc(-300px / 2));
    background: black;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
  }
`;
const signin_anim = keyframes`
  to{
    opacity: 1;
  }
`;

const anim_cart = keyframes`
  from {
      transform: scaleY(0.95);
  }
  to {
      transform: scaleY(1);
  }
`;
const anim_fire_cart = keyframes`
  from {
      transform: translateX(-10px);
  }
  to {
      transform: translateX(2px);
  }
`;

export const Container = styled.div`
  background: linear-gradient(#f2f2f2 0, #f2f2f2 60%, #151515 40%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function getDelay() {
  let full = '';
  for (let i = 0; i < 10; i++) {
    full += `path:nth-child(${i}) {
              animation-delay: ${i * 175}ms;
            }`;
  }
  return full;
}

export const Logo = styled.div`
  position: absolute;
  z-index: 1;
  padding: 5px 30px;
  border-radius: 10px;
  display: flex;
  /* animação da logo indo pra esquerda pra aparece o .signin */
  animation: ${logo_anim} 1s ease forwards 2.8s;

  svg {
    height: 50px;
    /* animação para preencher a cor branca no final */
    animation: ${fill} 1s ease forwards 2.7s;

    /* inicias os stroke vazio e faz a animação pra preenche */
    path {
      stroke: #151515;
      stroke-width: 1px;
      stroke-dasharray: 100%;
      stroke-dashoffset: 100%;
      animation: ${line_anim} 2s ease forwards;
    }

    /* poe delay nas letras */
    ${getDelay()}
  }
`;

export const Content = styled.div`
  opacity: 0;

  background: #fff;
  height: 300px;
  width: 500px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  /* animação apos a logo aparecer */
  animation: ${signin_anim} 1s ease forwards 2.8s;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;

    div + div {
      margin-top: 8px;
      transform: translateX(3%);
    }

    a {
      margin-left: auto;
      color: #0186e7;
      font-weight: bold;
      font-size: 0.8em;
    }
  }
`;

interface IButtonProps {
  isClicked: boolean;
}

export const Button = styled.button<IButtonProps>`
  outline: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  background: #151515;
  width: 137px;
  height: 40px;
  margin: 20px 30px;
  margin-top: 60px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  font-weight: 700;
  letter-spacing: 0.1rem;
  cursor: pointer;
  color: #f2f2f2;

  transition: 1s, background 300ms;

  &:hover {
    background: #3a9ce2;
  }

  span {
    transition: transform 500ms ease;
  }
  ${(props) =>
    props.isClicked &&
    css`
      width: 90%;
      span {
        transform: rotate(-9deg);
      }
    `}

  svg {
    height: 30px;
    width: 70px;
    animation: ${anim_cart} 1s ease-in-out infinite alternate;
    transform-origin: bottom;
    rect,
    circle,
    line,
    ellipse,
    path {
      fill: white;
      stroke: white;
    }
    .top,
    .mid,
    .bot {
      animation: ${anim_fire_cart} 1s ease-in-out infinite alternate;
    }
    .mid {
      animation-delay: 300ms;
    }
    .bot {
      animation-delay: 450ms;
    }
  }
`;
