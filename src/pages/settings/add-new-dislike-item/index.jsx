/* eslint-disable comma-dangle */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const AddNewDislikeItem = dynamic(
  () => import('@components/Client/Insertcomponent/AddNewDislikeItem'),
  {
    ssr: false,
    suspense: true,
  }
);

const AddNewDislikeItemPage = () => (
  <div>
    <AddNewDislikeItem />
  </div>
);

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['ProhibitedIngredients'])) } };
}

export default AddNewDislikeItemPage;
