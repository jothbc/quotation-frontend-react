import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
  button {
    cursor: pointer;
  }

  #root{
    height: 100vh;
  }
`;
