import React from 'react';
// import AddMeal from '../../../../components/Dashboard/AddMeal/AddMeal';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import NewSubscription from '../../../../components/Dashboard/NewSubscription/NewSubscription';

const NewSubscriptionPage = () => (
  <Layout>
    <Header title="Add a new subscription" />
    {/* <AddMeal /> */}
    <NewSubscription />
  </Layout>
);

export default NewSubscriptionPage;
