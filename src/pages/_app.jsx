import { ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import * as Cookies from '../hooks/cookies';
import '../styles/globals.scss';
import '../styles/reset.scss';
import theme from '../theme/theme';

const MyApp = ({ Component, pageProps }) => {
  const currentLanguageCode = Cookies.getLanguage();
  useEffect(() => {
    document.body.dir = currentLanguageCode === 'en' ? 'ltr' : 'rtl';
  }, [currentLanguageCode]);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
