import PhotoCamera from '@mui/icons-material/PhotoCamera';
import TuneIcon from '@mui/icons-material/Tune';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import FCSwitch from '../../../components/Common/FCSwitch';
import Header from '../../../components/Dashboard/common/Header/Header';
// import DashboardHead from '../../../components/Dashboard/head';
import Layout from '../../../components/Dashboard/Layout/Layout';
import dashboardTheme from '../../../theme/dashboard-theme';
import styles from './settings.module.scss';

const Settings = () => {
  console.log('Settings');

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        {/* <DashboardHead heading="Settings" /> */}
        <Header title="Settings" />

        <Container>
          <Box className={styles.content__wrapper} component="section">
            <Typography className={styles.content__title} variant="h6">
              Basic information
            </Typography>

            <Box component="form">
              <Box className={styles.form}>
                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    Add your company logo
                  </Typography>

                  <Box className={styles.upload__wrapper}>
                    <IconButton disableRipple aria-label="upload picture" component="label">
                      <input hidden accept="image/*" type="file" />
                      <PhotoCamera className={styles.upload__icon} />
                    </IconButton>
                    <Typography className={styles.upload__text}>
                      Click here to upload a new image
                    </Typography>
                  </Box>
                </FormControl>

                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    Company name in Arabic
                  </Typography>

                  <TextField className={styles.input} placeholder="Company name in Arabic" />
                </FormControl>

                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    Company name in English
                  </Typography>

                  <TextField className={styles.input} placeholder="Company name in English" />
                </FormControl>

                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    Corporate color
                  </Typography>

                  <TextField
                    className={styles.input}
                    type="color"
                    placeholder="Click here to choose a color"
                  />
                </FormControl>
              </Box>

              <Box className={styles.marketing}>
                <Typography className={styles.marketing__title} variant="h6">
                  Marketing
                </Typography>

                <Box className={styles.marketing__form}>
                  <FormControl className={styles.form__input} fullWidth>
                    <Typography className={styles.input__label} gutterBottom>
                      Google Analytics API
                    </Typography>

                    <Box className={styles.input__wrapper}>
                      <Box className={styles.activation__wrapper}>
                        <TextField className={styles.input} placeholder="API Key Code" fullWidth />

                        <Box className={styles.activation__input}>
                          <FCSwitch />
                          <Typography className={styles.activation__label}>Activation</Typography>
                        </Box>
                      </Box>

                      <Button
                        className={styles.input__btn}
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
                        Keep
                      </Button>
                    </Box>

                    {/* <Box className={styles.switch__wrapper}>
                      <FormControlLabel
                        className={styles.switch__btn}
                        control={<Switch defaultChecked disabled />}
                        label="activation"
                      />
                    </Box> */}
                  </FormControl>

                  <FormControl className={styles.form__input} fullWidth>
                    <Typography className={styles.input__label} gutterBottom>
                      Facebook Pixel
                    </Typography>

                    <Box className={styles.input__wrapper}>
                      <Box className={styles.activation__wrapper}>
                        <TextField className={styles.input} placeholder="API Key Code" fullWidth />

                        <Box className={styles.activation__input}>
                          <FCSwitch />
                          <Typography className={styles.activation__label}>Activation</Typography>
                        </Box>
                      </Box>

                      <Button
                        className={styles.input__btn}
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
                        Keep
                      </Button>
                    </Box>
                  </FormControl>

                  <FormControl className={styles.form__input} fullWidth>
                    <Typography className={styles.input__label} gutterBottom>
                      Snapchat Pixel
                    </Typography>

                    <Box className={styles.input__wrapper}>
                      <Box className={styles.activation__wrapper}>
                        <TextField className={styles.input} placeholder="API Key Code" fullWidth />

                        <Box className={styles.activation__input}>
                          <FCSwitch />
                          <Typography className={styles.activation__label}>Activation</Typography>
                        </Box>
                      </Box>

                      <Button
                        className={styles.input__btn}
                        variant="contained"
                        color="primary"
                        disableRipple
                      >
                        Keep
                      </Button>
                    </Box>
                  </FormControl>
                </Box>
              </Box>

              <Box className={styles.payment}>
                <Typography variant="h6" color="secondary" fontWeight={600}>
                  Payments
                </Typography>

                <FormControl className={styles.payment__input} fullWidth>
                  <Typography
                    className={styles.input__label}
                    color="secondary"
                    fontWeight={600}
                    gutterBottom
                  >
                    My Fatoorah
                  </Typography>

                  <Box className={styles.field__wrapper}>
                    <Box className={styles.switch__btn}>
                      <FCSwitch />
                      <Typography className={styles.btn__label}>Activation</Typography>
                    </Box>

                    <Button className={styles.payment__btn} variant="outlined">
                      Preparation &nbsp;
                      <TuneIcon sx={{ fontSize: 16 }} />
                    </Button>
                  </Box>
                </FormControl>
                <Divider />

                <FormControl className={styles.payment__input} fullWidth>
                  <Typography
                    className={styles.input__label}
                    color="secondary"
                    fontWeight={600}
                    gutterBottom
                  >
                    Tap Payments - تاب
                  </Typography>

                  <Box className={styles.field__wrapper}>
                    <Box className={styles.switch__btn}>
                      <FCSwitch />
                      <Typography className={styles.btn__label}>Activation</Typography>
                    </Box>

                    <Button className={styles.payment__btn} variant="outlined">
                      Preparation &nbsp;
                      <TuneIcon sx={{ fontSize: 16 }} />
                    </Button>
                  </Box>
                </FormControl>
                <Divider />
              </Box>

              <Box className={styles.btn__group}>
                <Button variant="contained" size="large">
                  Keep
                </Button>
                <Button variant="outlined" color="error" size="large">
                  Cancelation
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Settings;
