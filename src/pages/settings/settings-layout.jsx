import { Grid } from '@mui/material';

const SettingsLayout = ({ children }) => (
  <Grid container>
    <Grid item xs={0} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
      Sidebar
    </Grid>

    <Grid item xs={12} md={10}>
      {children}
    </Grid>
  </Grid>
);

export default SettingsLayout;
