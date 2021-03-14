import { GlobalStyle, ThemeProvider } from '@/styles';

const RPGJournalApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
);

export default RPGJournalApp;
