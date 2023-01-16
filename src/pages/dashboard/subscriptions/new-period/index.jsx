/* eslint-disable object-curly-newline */
import { Container } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
// import NewPeriod from '../../../../components/Dashboard/NewPeriod/NewPeriod';

const Header = dynamic(() => import('../../../../components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('../../../../components/Dashboard/Layout/Layout'), {
  ssr: false,
});
const NewPeriod = dynamic(() => import('../../../../components/Dashboard/NewPeriod/NewPeriod'), {
  ssr: false,
});

const NewPeriodPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Header title={t('header:add_a_new_period')} />
      <Container>
        <NewPeriod />
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dPeriod'])),
    },
  };
}

export default NewPeriodPage;
