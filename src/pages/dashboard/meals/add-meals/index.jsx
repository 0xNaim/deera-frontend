import React from 'react';
import AddMeal from '../../../../components/Dashboard/AddMeal/AddMeal';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';

const MealsPage = () => (
  <Layout>
    {/* <Meals /> */}
    <Header title="Add Meals" />
    <AddMeal />
  </Layout>
);

export default MealsPage;
