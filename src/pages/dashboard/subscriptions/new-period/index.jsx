import { Container } from '@mui/material';
import React from 'react';
// import AddMeal from '../../../../components/Dashboard/AddMeal/AddMeal';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import NewPeriod from '../../../../components/Dashboard/NewPeriod/NewPeriod';

const NewPeriodPage = () => (
  <Layout>
    <Header title="Add a new period" />
    <Container>
      <NewPeriod />
    </Container>
  </Layout>
);

export default NewPeriodPage;
