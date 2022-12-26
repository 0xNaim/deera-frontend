// import components
import Header from './Header/Header';
import styles from './Meals.module.scss';
import CustomTable from './Table/Table';

const Meals = () => (
  <div className={styles.wrapper}>
    <Header />
    <CustomTable />
  </div>
);

export default Meals;
