import Header from '../../../../components/Dashboard/common/Header/Header';
import EditMealClassification from '../../../../components/Dashboard/EditMealClassification/EditMealClassification';
import { categoryData } from '../../../../components/Dashboard/fakedata';
import Layout from '../../../../components/Dashboard/Layout/Layout';

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;
  const data = categoryData?.find((el) => el?.slug === slug);

  return { props: { data } };
}

export async function getStaticPaths() {
  const paths = categoryData?.map((item) => ({ params: { slug: item?.slug } }));

  return {
    paths,
    fallback: false,
  };
}

const ProjectDetails = ({ data }) => (
  <Layout>
    {/* <Meals /> */}
    <Header title="Edit meal classification table" />
    {/* <MealClassificationTable /> */}
    <EditMealClassification data={data} />
  </Layout>
);

export default ProjectDetails;
