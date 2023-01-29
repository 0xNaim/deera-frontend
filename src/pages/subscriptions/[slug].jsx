/* eslint-disable comma-dangle */
import { subscriptionData } from '@components/Client/fakedata/data';
import SEO from '@hooks/SEO';
import { Container } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Details = dynamic(() => import('@components/Client/Home/Subscriptions/Details/Details'), { ssr: true, });
const Layout = dynamic(() => import('@components/Layout'), {
  ssr: false,
  suspense: true,
});

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;
  const data = subscriptionData?.find((el) => el?.slug === slug);

  return { props: { data, ...(await serverSideTranslations(locale, ['home', 'navbar'])) } };
}

const ProjectDetails = ({ data }) => (
  <Layout>
    <SEO title="Single Subscription || The best subscriptions for a healthy life" />
    <Container>
      <Details data={data} />
    </Container>
  </Layout>
);

export default ProjectDetails;
