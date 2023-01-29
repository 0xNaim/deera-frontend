import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';

const Settings = dynamic(() => import('@components/Client/Settings/Settings'), {
  ssr: false,
  suspense: true,
});

const SettingsPage = () => (
  <div>
    <Settings />
  </div>
);

export async function getStaticProps({ locale }) {
  return { props: { ...(await serverSideTranslations(locale, ['settings'])) } };
}

export default SettingsPage;
