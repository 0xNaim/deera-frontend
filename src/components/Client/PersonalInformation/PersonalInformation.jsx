import { Box, Button, Container, FormControl, OutlinedInput, Typography } from '@mui/material';
import SettingsLayout from '@pages/settings/settings-layout';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Navbar from '@components/Layout/Navbar/Navbar';
import SettingsHead from '../head';
import styles from './personal-information.module.scss';

const PersonalInformation = () => {
  const { t } = useTranslation();
  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // Handle form submit
  const handleFormSubmit = () => {};

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading={t('PersonalInformation:Personal_Information')} />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box as="form" className={styles.form}>
              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <Typography className={styles.input__label} variant="h6">
                  {t('PersonalInformation:Your_Name')}
                </Typography>
                <OutlinedInput
                  {...register('name', { required: 'Name is required' })}
                  error={errors?.name?.message}
                  placeholder={t('PersonalInformation:Your_Name')}
                />
                {errors?.name?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.name?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <Typography className={styles.input__label} variant="h6">
                  {t('PersonalInformation:Phone')}
                </Typography>
                <OutlinedInput
                  {...register('phone', { required: 'Phone number is required' })}
                  error={errors?.phone?.message}
                  placeholder={t('PersonalInformation:Phone_number')}
                />
                {errors?.phone?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.phone?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <Typography className={styles.input__label} variant="h6">
                  {t('PersonalInformation:Email')}
                </Typography>
                <OutlinedInput
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  error={errors?.email?.message}
                  placeholder={t('PersonalInformation:Your_email')}
                />
                {errors?.email?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.email?.message}
                  </Typography>
                )}
              </FormControl>

              <Button
                onClick={handleSubmit(handleFormSubmit)}
                className={styles.submit__btn}
                variant="contained"
                fullWidth
              >
                {t('PersonalInformation:submit')}
              </Button>
            </Box>
          </Box>
        </Container>
      </SettingsLayout>
    </>
  );
};
export default PersonalInformation;
