// import components
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import Header from '../common/Header/Header';
import styles from './Meals.module.scss';
// import CustomTable from './Table/Table';

const CustomTable = dynamic(() => import('./Table/Table'));

const Meals = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Header title={t('header:meals')} />
      <CustomTable />
    </div>
  );
};

export default Meals;
