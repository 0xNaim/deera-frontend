/* eslint-disable comma-dangle */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const DislikeList = dynamic(
  () => import('../../../components/Client/ProhibitedIngredients/ProhibitedIngredients'),
  { ssr: false }
);

const DislikeListPage = () => (
  <div>
    <DislikeList />
  </div>
);

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['ProhibitedIngredients'])) } };
}
export default DislikeListPage;
