/* eslint-disable react/jsx-wrap-multilines */
// import MUI
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar/Sidebar';
// style
import styles from './Layout.module.scss';
import MobileSidebar from './MobileSidebar/MobileSidebar';

const Layout = ({ children }) => (
  <div className={styles.wrapper}>
    <MobileSidebar
      buttonContent={
        <div className={styles.menuWrapper}>
          <div className={styles.tabsMobileMenu}>
            <MenuIcon />
          </div>
        </div>
      }
    />

    <Grid container>
      <Grid item lg={2} md={3} sm={4} xs={4} className={styles.left_wrapper}>
        <Sidebar />
      </Grid>
      <Grid item lg={10} md={9} sm={12} xs={12}>
        {children}
      </Grid>
    </Grid>
  </div>
);

export default Layout;
