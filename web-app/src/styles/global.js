import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smothing: antialiased !important;
    background: linear-gradient(158.79deg, #1F2F98 -0.84%, rgba(28, 167, 252, 0.52) 115.52%) no-repeat 100%;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

  button {
    cursor: pointer;
    color: #fff;
  }

  a {
    color: #fff;
  }
`;

export default GlobalStyle;
