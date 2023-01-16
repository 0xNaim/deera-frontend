/* eslint-disable object-curly-newline */
import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import DashboardTheme from '../../../theme/dashboard-theme';
import Layout from '../Layout/Layout';

import styles from './add-customer.module.scss';

const Header = dynamic(() => import('../common/Header/Header'), {
  ssr: false,
});

const AddCustomer = () => {
  // Router
  const router = useRouter();

  // Registration date
  const [registrationDate, setRegistrationDate] = useState(new Date());

  // Registration date error state
  const [registrationDateError, setRegistrationDateError] = useState(false);

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // Handle form submit
  const handleFormSubmit = (e) => {
    console.log(e);

    // Handle error message
    if (registrationDate) setRegistrationDateError(false);

    // Handle error message
    if (!registrationDate) setRegistrationDateError(true);
  };

  // Handle error state
  const handleOnError = () => {
    // Handle error message
    if (registrationDate) setRegistrationDateError(false);

    // Handle error message
    if (!registrationDate) setRegistrationDateError(true);
  };

  const { t } = useTranslation();

  return (
    <ThemeProvider theme={DashboardTheme}>
      <Layout>
        <Header title={t('header:Customer_Name')} />

        <Container>
          <Box component="form" className={styles.form}>
            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                {/* Customer Name */}
                {t('dAddCustomer:Customer_Name')}
              </Typography>

              <TextField
                {...register('name', { required: 'Name is required' })}
                error={!!errors?.name?.message}
                variant="outlined"
                placeholder={t('dAddCustomer:add_customers')}
              />

              {errors?.name?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.name?.message}
                </Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                {/* Registration Date */}
                {t('dAddCustomer:Registration_Date')}
              </Typography>

              <DatePicker
                className={
                  registrationDateError ? `${styles['date__input--error']}` : styles.date__input
                }
                selected={registrationDate}
                onChange={(date) => setRegistrationDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                required
                disabled
              />

              {registrationDateError && (
                <Typography className={styles.helper__text}>Start date is required</Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                {/* Phone Number */}
                {t('dAddCustomer:Phone_Number')}
              </Typography>

              <TextField
                {...register('phone', { required: 'Phone number is required' })}
                error={!!errors?.name?.message}
                variant="outlined"
                placeholder={t('dAddCustomer:Phone_Number')}
              />

              {errors?.phone?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.phone?.message}
                </Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                {/* Customer Address */}
                {t('dAddCustomer:Customer_Address')}
              </Typography>

              <TextField
                {...register('address', { required: 'Customer address is required' })}
                error={!!errors?.address?.message}
                variant="outlined"
                placeholder={t('dAddCustomer:Customer_Address')}
              />

              {errors?.address?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.address?.message}
                </Typography>
              )}
            </FormControl>

            <Box className={styles.input__group}>
              <FormControl fullWidth>
                <Typography color="secondary" fontWeight={600} gutterBottom>
                  {/* The number of times you subscribe */}
                  {t('dAddCustomer:The_number_of_times_you_subscribe')}
                </Typography>

                <TextField
                  {...register('subscribeTime', { required: 'Subscribe number is required' })}
                  error={!!errors?.subscribeTime?.message}
                  variant="outlined"
                  placeholder={t('dAddCustomer:The_number_of_times_you_subscribe')}
                />

                {errors?.subscribeTime?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.subscribeTime?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl fullWidth>
                <Typography color="secondary" fontWeight={600} gutterBottom>
                  {/* The status of the last subscription */}
                  {t('dAddCustomer:The_status_of_the_last_subscription')}
                </Typography>

                <TextField
                  {...register('subscriptionStatus', {
                    required: 'Subscription status is required',
                  })}
                  error={!!errors?.subscriptionStatus?.message}
                  variant="outlined"
                  placeholder={t('dAddCustomer:The_status_of_the_last_subscription')}
                />

                {errors?.subscriptionStatus?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.subscriptionStatus?.message}
                  </Typography>
                )}
              </FormControl>
            </Box>

            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                {/* Subtype */}
                {t('dAddCustomer:Subtype')}
              </Typography>

              <TextField
                {...register('subtype', { required: 'Subtype is required' })}
                error={!!errors?.subtype?.message}
                variant="outlined"
                placeholder={t('dAddCustomer:Subtype')}
              />

              {errors?.subtype?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.subtype?.message}
                </Typography>
              )}
            </FormControl>

            <Box className={styles.button__group}>
              <Button onClick={handleSubmit(handleFormSubmit, handleOnError)} variant="contained">
                {/* Save */}
                {t('dAddCustomer:Save')}
              </Button>
              <Button onClick={() => router.back()} variant="outlined" color="error">
                {/* Cancellation */}
                {t('dAddCustomer:Cancellation')}
              </Button>
            </Box>
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default AddCustomer;
