import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: Bambino New, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  h1 {
    font: normal 900 40px/60px Bambino New, sans-serif;
    color: ${theme.palette.primary};
    
    @media ${theme.media.tablet} {
      font-size: 50px;
      line-height: 75px;
    }
  }
  
  h2 {
    font: normal 900 32px/48px Bambino New, sans-serif;
    color: ${theme.palette.primary};
  }
  
  h3 {
    font: normal 700 24px/36px Bambino New, sans-serif;
    color: ${theme.palette.primary};
  }
  
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
