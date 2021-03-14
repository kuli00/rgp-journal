import {ThemeProvider} from '@/styles';

const RPGJournalApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default RPGJournalApp;
