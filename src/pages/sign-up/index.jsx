import SEO from '@hooks/SEO';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/Layout'), { suspense: true });
const SignUp = dynamic(() => import('@components/Auth/SignUp/SignUp'), { suspense: true });

const SignInPage = () => (
  <Layout>
    <SEO title="Sign Up || The best subscriptions for a healthy life" />
    <SignUp />
  </Layout>
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['auth'])),
      // Will be passed to the page component as props
    },
  };
}
export default SignInPage;
