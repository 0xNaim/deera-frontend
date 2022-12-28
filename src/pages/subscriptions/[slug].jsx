import { Container } from '@mui/material';
import { subscriptionData } from '../../components/Client/fakedata/data';
import Details from '../../components/Client/Home/Subscriptions/Details/Details';
import Layout from '../../components/Layout';

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const data = subscriptionData?.find((el) => el?.slug === slug);

  return { props: { data } };
}

export async function getStaticPaths() {
  const paths = subscriptionData?.map((item) => ({ params: { slug: item?.slug } }));

  return {
    paths,
    fallback: false,
  };
}

const ProjectDetails = ({ data }) => (
  <Layout>
    <Container>
      <Details data={data} />
    </Container>
  </Layout>
);

export default ProjectDetails;
