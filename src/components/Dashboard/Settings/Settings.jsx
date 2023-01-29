/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Button, Container, Divider, FormControl, TextField, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FCImageUploader from '@components/Common/FCImageUploader';
import FCSwitch from '@components/Common/FCSwitch';
import ImageDialog from '@components/Common/ImageDialog';
import styles from './settings.module.scss';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('@components/Dashboard/Layout/Layout'), {
  ssr: false,
});

const Settings = () => {
  const [files, setFiles] = useState('');
  const { t } = useTranslation();

  return (
    <Layout>
      <Header title={t('header:settings')} />

      <Container>
        <Box className={styles.content__wrapper} component="section">
          <Typography className={styles.content__title} variant="h6">
            {t('dSettings:Basic_information')}
          </Typography>

          <Box component="form">
            <Box className={styles.form}>
              <FormControl className={styles.form__input} fullWidth>
                <Typography className={styles.input__label} gutterBottom>
                  {t('dSettings:Add_your_company_logo')}
                </Typography>
                <ImageDialog files={files} setFiles={setFiles} btnContent={<FCImageUploader />} />

                {files && (
                  <Box
                    sx={{
                      borderRadius: '5px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      margin: '10px 0',
                    }}
                  >
                    <Image
                      src={files}
                      alt=""
                      width={150}
                      height={150}
                      onLoad={() => {
                        URL.revokeObjectURL(files);
                      }}
                    />
                  </Box>
                )}
              </FormControl>

              <FormControl className={styles.form__input} fullWidth>
                <Typography className={styles.input__label} gutterBottom>
                  {t('dSettings:Company_name_in_Arabic')}
                </Typography>

                <TextField
                  className={styles.input}
                  placeholder={t('dSettings:Company_name_in_Arabic')}
                />
              </FormControl>

              <FormControl className={styles.form__input} fullWidth>
                <Typography className={styles.input__label} gutterBottom>
                  {t('dSettings:Company_name_in_English')}
                </Typography>

                <TextField
                  className={styles.input}
                  placeholder={t('dSettings:Company_name_in_English')}
                />
              </FormControl>

              <FormControl className={styles.form__input} fullWidth>
                <Typography className={styles.input__label} gutterBottom>
                  {t('dSettings:Corporate_color')}
                </Typography>

                <TextField
                  className={styles.input}
                  type="color"
                  placeholder={t('dSettings:Corporate_color')}
                />
              </FormControl>
            </Box>

            <Box className={styles.marketing}>
              <Typography className={styles.marketing__title} variant="h6">
                {t('dSettings:Marketing')}
              </Typography>

              <Box className={styles.marketing__form}>
                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    {t('dSettings:Google_Analytics_API')}
                  </Typography>

                  <Box className={styles.input__wrapper}>
                    <Box className={styles.activation__wrapper}>
                      <TextField
                        className={styles.input}
                        placeholder={t('dSettings:API_Key_Code')}
                        fullWidth
                      />

                      <Box className={styles.activation__input}>
                        <FCSwitch />
                        <Typography className={styles.activation__label}>
                          {t('dSettings:Activation')}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      className={styles.input__btn}
                      variant="contained"
                      color="primary"
                      disableRipple
                    >
                      {t('dSettings:keep')}
                    </Button>
                  </Box>
                </FormControl>

                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    {t('dSettings:Facebook_Pixel')}
                  </Typography>

                  <Box className={styles.input__wrapper}>
                    <Box className={styles.activation__wrapper}>
                      <TextField className={styles.input} placeholder="API Key Code" fullWidth />

                      <Box className={styles.activation__input}>
                        <FCSwitch />
                        <Typography className={styles.activation__label}>
                          {t('dSettings:Activation')}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      className={styles.input__btn}
                      variant="contained"
                      color="primary"
                      disableRipple
                    >
                      {t('dSettings:keep')}
                    </Button>
                  </Box>
                </FormControl>

                <FormControl className={styles.form__input} fullWidth>
                  <Typography className={styles.input__label} gutterBottom>
                    {t('dSettings:Snapchat_Pixel')}
                  </Typography>

                  <Box className={styles.input__wrapper}>
                    <Box className={styles.activation__wrapper}>
                      <TextField className={styles.input} placeholder="API Key Code" fullWidth />

                      <Box className={styles.activation__input}>
                        <FCSwitch />
                        <Typography className={styles.activation__label}>
                          {t('dSettings:Activation')}
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      className={styles.input__btn}
                      variant="contained"
                      color="primary"
                      disableRipple
                    >
                      {t('dSettings:keep')}
                    </Button>
                  </Box>
                </FormControl>
              </Box>
            </Box>

            <Box className={styles.payment}>
              <Typography variant="h6" color="secondary" fontWeight={600}>
                {t('dSettings:Tap_Payments')}
              </Typography>

              <FormControl className={styles.payment__input} fullWidth>
                <Typography
                  className={styles.input__label}
                  color="secondary"
                  fontWeight={600}
                  gutterBottom
                >
                  {t('dSettings:My_Fatoorah')}
                </Typography>

                <Box className={styles.field__wrapper}>
                  <Box className={styles.switch__btn}>
                    <FCSwitch />
                    <Typography className={styles.btn__label}>
                      {t('dSettings:Activation')}
                    </Typography>
                  </Box>

                  <Button className={styles.payment__btn} variant="outlined">
                    {t('dSettings:Preparation')} &nbsp;
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
                  {t('dSettings:Tap_Payments')}
                </Typography>

                <Box className={styles.field__wrapper}>
                  <Box className={styles.switch__btn}>
                    <FCSwitch />
                    <Typography className={styles.btn__label}>Activation</Typography>
                  </Box>

                  <Button className={styles.payment__btn} variant="outlined">
                    {t('dSettings:Preparation')} &nbsp;
                    <TuneIcon sx={{ fontSize: 16 }} />
                  </Button>
                </Box>
              </FormControl>
              <Divider />
            </Box>

            <Box className={styles.btn__group}>
              <Button variant="contained" size="large">
                {t('dSettings:keep')}
              </Button>
              <Button variant="outlined" color="error" size="large">
                {t('dSettings:cancelation')}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Settings;
