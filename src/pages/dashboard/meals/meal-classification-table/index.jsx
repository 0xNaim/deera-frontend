import React from 'react';

import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import MealClassificationTable from '../../../../components/Dashboard/Meals/MealClassificationTablePage/MealClassificationTable';

const MealClassificationTablePage = () => (
  <Layout>
    {/* <Meals /> */}
    <Header title="Meal classification table" />
    <MealClassificationTable />
  </Layout>
);

export default MealClassificationTablePage;
