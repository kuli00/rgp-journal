import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: Calibri, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
