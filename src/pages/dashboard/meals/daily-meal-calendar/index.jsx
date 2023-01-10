import { Container, ThemeProvider } from '@mui/material';
import React from 'react';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import MealCalendar from '../../../../components/Dashboard/Meals/MealCalendar/MealCalendar';
import dashboardTheme from '../../../../theme/dashboard-theme';

const MealsPage = () => (
  <ThemeProvider theme={dashboardTheme}>
    <Layout>
      <Header title="Daily meal calendar" />
      <Container>
        <MealCalendar show />
      </Container>
    </Layout>
  </ThemeProvider>
);

export default MealsPage;
