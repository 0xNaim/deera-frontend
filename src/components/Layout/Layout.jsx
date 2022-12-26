// import MUI
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => (
  <Grid container>
    <Grid item lg={2} md={3} sm={4} xs={4}>
      <Sidebar />
    </Grid>
    <Grid item lg={10} md={9} sm={12} xs={12}>
      {children}
    </Grid>
  </Grid>
);

export default Layout;
