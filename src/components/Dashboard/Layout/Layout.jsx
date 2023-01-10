/* eslint-disable react/jsx-wrap-multilines */
// import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar/Sidebar';
// style
import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    {/* <MobileSidebar
      buttonContent={
        <div className={styles.menuWrapper}>
          <div className={styles.tabsMobileMenu}>
            <MenuIcon />
          </div>
        </div>
      }
    /> */}

    {/* <Grid container>
      <Grid item lg={2} md={4} sm={12} xs={12} className={styles.left_wrapper}>
        <Sidebar />
      </Grid>
      <Grid item lg={10} md={8} sm={12} xs={12}>
        {children}
      </Grid>
    </Grid> */}

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
