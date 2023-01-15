import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';

const Layout = dynamic(() => import('../../components/Layout'), { ssr: false });
const SignUp = dynamic(() => import('../../components/Auth/SignUp/SignUp'), { ssr: false });

const SignInPage = () => (
  <Layout>
    <SignUp />
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
export default SignInPage;
