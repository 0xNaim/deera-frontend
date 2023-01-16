/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = dynamic(() => import('../../../../components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('../../../../components/Dashboard/Layout/Layout'), {
  ssr: false,
});

const MealClassificationTable = dynamic(() =>
  import(
    '../../../../components/Dashboard/Meals/MealClassificationTablePage/MealClassificationTable'
  )
);

const MealClassificationTablePage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* <Meals /> */}
      <Header title={t('header:meal_classification_table')} />
      <MealClassificationTable />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dMeals'])),
      // Will be passed to the page component as props
    },
  };
}

export default MealClassificationTablePage;
