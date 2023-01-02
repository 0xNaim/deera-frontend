// import components
import Header from '../common/Header/Header';
import styles from './Meals.module.scss';
import CustomTable from './Table/Table';

const Meals = () => (
  <div className={styles.wrapper}>
    <Header title="Meals" />
    <CustomTable />
  </div>
);

export default Meals;
