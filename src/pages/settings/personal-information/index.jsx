/* eslint-disable comma-dangle */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const PersonalInformation = dynamic(
  () => import('@components/Client/PersonalInformation/PersonalInformation'),
  { suspense: true }
);

const PersonalInformationPage = () => (
  <div>
    <PersonalInformation />
  </div>
);

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['PersonalInformation'])) } };
}
export default PersonalInformationPage;
