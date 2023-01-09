import React from 'react';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import MealCalendar from '../../../../components/Dashboard/Meals/MealCalendar/MealCalendar';

const MealsPage = () => (
  <Layout>
    <Header title="Daily meal calendar" />
    <MealCalendar />
  </Layout>
);

export default MealsPage;
