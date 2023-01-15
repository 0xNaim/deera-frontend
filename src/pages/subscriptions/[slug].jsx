/* eslint-disable comma-dangle */
import { Container } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { subscriptionData } from '../../components/Client/fakedata/data';

const Details = dynamic(
  () => import('../../components/Client/Home/Subscriptions/Details/Details'),
  { ssr: true }
);
const Layout = dynamic(() => import('../../components/Layout'), { ssr: false });

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;
  const data = subscriptionData?.find((el) => el?.slug === slug);

  return { props: { data, ...(await serverSideTranslations(locale, ['home', 'navbar'])) } };
}

// export async function getStaticPaths() {
//   const paths = subscriptionData?.map((item) => ({ params: { slug: item?.slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

const ProjectDetails = ({ data }) => (
  <Layout>
    <Container>
      <Details data={data} />
    </Container>
  </Layout>
);

export default ProjectDetails;
