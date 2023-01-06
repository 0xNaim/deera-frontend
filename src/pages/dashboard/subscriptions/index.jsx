import React from 'react';
import Header from '../../../components/Dashboard/common/Header/Header';
import Layout from '../../../components/Dashboard/Layout/Layout';
import SubscriptionTable from '../../../components/Dashboard/Subscription/Subscription';
// import Meals from '../../../components/Dashboard/Meals/Main';

const SubscriptionPage = () => (
  <Layout>
    <Header title="Type of Subscription" />
    {/* <Meals /> */}
    <SubscriptionTable />
  </Layout>
);

export default SubscriptionPage;
