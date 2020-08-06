import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(#f2f2f2 0, #f2f2f2 60%, #151515 40%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  position: absolute;
  padding: 5px 30px;
  border-radius: 10px;
  display: flex;
  transform: translate(-30%, -80%);
  background: black;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);

  svg {
    height: 50px;
    fill: #f2f2f2;
    path {
      stroke-width: 1px;
    }
  }

  @media only screen and (max-width: 450px) {
    transform: none;
    position: sticky;
    display: flex;
    justify-content: center;
    svg {
      height: 30px;
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  width: 500px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: relative;

  form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    div + div {
      margin-top: 14px;
    }
  }

  @media only screen and (max-width: 450px) {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    position: sticky;
    form {
      height: fit-content;
    }
  }
`;

interface IButtonProps {
  isClicked: boolean;
}
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

export const Button = styled.button<IButtonProps>`
  outline: none;
  display: flex;
  align-items: center;
  align-self: flex-start;
  justify-content: space-between;
  background: #151515;
  width: 177px;
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
      width: 85%;
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
