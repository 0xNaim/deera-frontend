import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';

const SignIn = dynamic(() => import('../../components/Auth/SignIn/SignIn'), { ssr: false });
const Layout = dynamic(() => import('../../components/Layout'), { ssr: false });

const SignUpPage = () => (
  <Layout>
    <SignIn />
  </Layout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'navbar'])),
      // Will be passed to the page component as props
    },
  };
}
export default SignUpPage;
