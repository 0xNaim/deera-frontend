import { ThemeProvider } from '@mui/material';
import { appWithTranslation } from 'next-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css';
import '../styles/globals.scss';
import '../styles/reset.scss';
import theme from '../theme/theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default appWithTranslation(MyApp);
