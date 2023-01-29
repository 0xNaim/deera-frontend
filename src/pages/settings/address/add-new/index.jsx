/* eslint-disable comma-dangle */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const AddNewAddress = dynamic(() => import('@components/Client/AddNewAddress/AddNewAddress'), { ssr: false, });

const AddNewAddressPage = () => <AddNewAddress />;

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['NewDeliveryAddress'])) } };
}

export default AddNewAddressPage;
