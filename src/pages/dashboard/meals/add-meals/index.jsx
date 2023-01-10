import { ThemeProvider } from '@mui/material';
import React from 'react';
import AddMeal from '../../../../components/Dashboard/AddMeal/AddMeal';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import dashboardTheme from '../../../../theme/dashboard-theme';

const MealsPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Layout>
      {/* <Meals /> */}
      <Header title="Add Meals" />
      <AddMeal />
    </Layout>
  </ThemeProvider>
);

export default MealsPage;
