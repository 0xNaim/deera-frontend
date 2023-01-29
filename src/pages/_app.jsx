/* eslint-disable react-hooks/exhaustive-deps */
import { ThemeProvider } from '@mui/material';
import '@styles/globals.scss';
import '@styles/reset.scss';
import theme from '@theme/theme';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Suspense, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import * as Cookies from '../hooks/cookies';

const MyApp = ({ Component, pageProps }) => {
  const currentLanguageCode = Cookies.getLanguage();

  const router = useRouter();
  const [language, setLanguage] = useState('en');
  useEffect(() => {
    const storedLocale = Cookies.getLanguage();
    if (storedLocale) {
      setLanguage(storedLocale);
    }
  }, [language]);

  function rerouteLocale(wantedLocale) {
    if (router.locale) {
      if (router.locale !== wantedLocale) {
        router.replace(router.asPath, router.asPath, { locale: wantedLocale });
      }
    } else if (router.defaultLocale && router.defaultLocale !== wantedLocale) {
      router.replace(router.asPath, router.asPath, { locale: wantedLocale });
    }
  }

  useEffect(() => {
    const storedLocale = Cookies.getLanguage();
    if (!storedLocale) Cookies.setLanguage('en');
  }, []);

  useEffect(() => {
    const storedLocale = Cookies.getLanguage();

    if (storedLocale) {
      rerouteLocale(storedLocale);
    } else if (router.locale && (router.locale === 'it' || router.locale === 'en')) {
      Cookies.setLanguage(router.locale);
    }
  }, []);

  useEffect(() => {
    if (currentLanguageCode) {
      document.body.dir = currentLanguageCode === 'en' ? 'ltr' : 'rtl';
    } else {
      document.body.dir = 'ltr';
    }
  }, [currentLanguageCode]);

  return (
    <Suspense fallback="Loading...">
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Suspense>
  );
};

export default appWithTranslation(MyApp);
