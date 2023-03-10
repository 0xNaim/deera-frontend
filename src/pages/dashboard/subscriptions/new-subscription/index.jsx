/* eslint-disable object-curly-newline */
import NewSubscription from '@components/Dashboard/NewSubscription/NewSubscription';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('@components/Dashboard/Layout/Layout'), {
  ssr: false,
});

const NewSubscriptionPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Header title={t('header:add_a_new_subscription')} />
      <NewSubscription />
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header', 'dNewSubscription'])),
      // Will be passed to the page component as props
    },
  };
}

export default NewSubscriptionPage;
