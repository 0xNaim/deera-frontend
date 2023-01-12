import { ThemeProvider } from '@mui/material';
import React from 'react';
// import AddMeal from '../../../../components/Dashboard/AddMeal/AddMeal';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import SubscriptionPeriods from '../../../../components/Dashboard/SubscriptionPeriods/SubscriptionPeriods';
import DashboardTheme from '../../../../theme/dashboard-theme';

const SubscriptionPeriodsPage = () => (
  <ThemeProvider theme={DashboardTheme}>
    <Layout>
      <Header title="Add a new subscription" />
      <SubscriptionPeriods />
    </Layout>
  </ThemeProvider>
);

export default SubscriptionPeriodsPage;
