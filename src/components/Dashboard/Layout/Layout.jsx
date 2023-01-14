// /* eslint-disable react/jsx-wrap-multilines */
// import Grid from '@mui/material/Grid';
// import Sidebar from './Sidebar/Sidebar';
// style
import dynamic from 'next/dynamic';
import styles from './Layout.module.scss';

const Sidebar = dynamic(() => import('./Sidebar/Sidebar'), { ssr: false });

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.sidebar_wrapper}>
      <div className={styles.left_bar}>
        <div className={styles.left_wrapper}>
          <Sidebar />
        </div>
      </div>
      <div className={styles.right_bar}>{children}</div>
    </div>
  </div>
);

export default Layout;
