import { ThemeProvider } from '@mui/material';
import React from 'react';
import Layout from '../../../components/Dashboard/Layout/Layout';
import Meals from '../../../components/Dashboard/Meals/Main';
import DashboardTheme from '../../../theme/dashboard-theme';

const MealsPage = () => (
  <ThemeProvider theme={DashboardTheme}>
    <Layout>
      <Meals />
    </Layout>
  </ThemeProvider>
);

export default MealsPage;
