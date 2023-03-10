import SEO from '@hooks/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const SignIn = dynamic(() => import('@components/Auth/SignIn/SignIn'), { ssr: false });
const Layout = dynamic(() => import('@components/Layout'), { ssr: false });

const SignUpPage = () => (
  <Layout>
    <SEO title="Sign In || The best subscriptions for a healthy life" />

    <SignIn />
  </Layout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'navbar', 'auth'])),
      // Will be passed to the page component as props
    },
  };
}
export default SignUpPage;
