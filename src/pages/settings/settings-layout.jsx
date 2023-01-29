import { Grid } from '@mui/material';

const SettingsLayout = ({ children }) => (
  <Grid container justifyContent="center">
    <Grid item xs={12} sm={10} md={8}>
      {children}
    </Grid>
  </Grid>
);

export default SettingsLayout;
