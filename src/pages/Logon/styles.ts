import styled from 'styled-components';

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
    position: relative;
    top: 20px;
    left: -180px;
    background: #151515;
    color: #fff;
    padding: 5px 30px;
    border-radius: 10px;
    letter-spacing: 0.2em;

    transition: left 1s;

    @media (max-width: 680px) {
      left: 0;
    }
  }

  form {
    /* border: 1px solid green; */
    width: 100%;
    height: 350px;
    background: #fff;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    div {
      transform: translateX(-30px);
      & + div {
        margin-top: 16px;
        transform: translateX(30px);
      }
      width: 75%;
      input {
        flex: 1;
      }
    }
  }
`;
