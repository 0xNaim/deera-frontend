import MyMeals from '@components/Client/MyMeals/MyMeals';
import Layout from '@components/Layout';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MyMealsPage = () => (
  <Layout>
    <MyMeals />
  </Layout>
);

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['header'])),
//       // Will be passed to the page component as props
//     },
//   };
// }

export default MyMealsPage;
