/* eslint-disable object-curly-newline */
import EditMealClassification from '@components/Dashboard/EditMealClassification/EditMealClassification';
import { categoryData } from '@components/Dashboard/fakedata';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('@components/Dashboard/Layout/Layout'), {
  ssr: false,
});

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

const ProjectDetails = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Layout>
      {/* <Meals /> */}
      <Header title={t('header:edit_meal_classification_table')} />
      <EditMealClassification data={data} />
    </Layout>
  );
};

export default ProjectDetails;
