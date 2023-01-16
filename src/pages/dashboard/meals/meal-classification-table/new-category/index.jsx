/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const Header = dynamic(() => import('../../../../../components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('../../../../../components/Dashboard/Layout/Layout'), {
  ssr: false,
});
const EditMealClassification = dynamic(
  () => import('../../../../../components/Dashboard/EditMealClassification/EditMealClassification'),
  {
    ssr: false,
  }
);

const NewCategory = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Header title={t('header:meal_new_category')} />
      <EditMealClassification />
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

export default NewCategory;
