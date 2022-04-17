import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 300;
  }
`;

export default GlobalStyle;
