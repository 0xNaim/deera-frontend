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
import { useRouter } from 'next/router';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import Header from '../../../../components/Dashboard/common/Header/Header';
import Layout from '../../../../components/Dashboard/Layout/Layout';
import dashboardTheme from '../../../../theme/dashboard-theme';
import styles from './add-customer.module.scss';

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

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        <Header title="Add Customer" />

        <Container>
          <Box component="form" className={styles.form}>
            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                Customer Name
              </Typography>

              <TextField
                {...register('name', { required: 'Name is required' })}
                error={!!errors?.name?.message}
                variant="outlined"
                placeholder="Customer name"
              />

              {errors?.name?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.name?.message}
                </Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                Registration Date
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
                Phone Number
              </Typography>

              <TextField
                {...register('phone', { required: 'Phone number is required' })}
                error={!!errors?.name?.message}
                variant="outlined"
                placeholder="Phone number"
              />

              {errors?.phone?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.phone?.message}
                </Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} fullWidth>
              <Typography color="secondary" fontWeight={600} gutterBottom>
                Customer Address
              </Typography>

              <TextField
                {...register('address', { required: 'Customer address is required' })}
                error={!!errors?.address?.message}
                variant="outlined"
                placeholder="Customer address"
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
                  The number of times you subscribe
                </Typography>

                <TextField
                  {...register('subscribeTime', { required: 'Subscribe number is required' })}
                  error={!!errors?.subscribeTime?.message}
                  variant="outlined"
                  placeholder="Subscribe number"
                />

                {errors?.subscribeTime?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.subscribeTime?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl fullWidth>
                <Typography color="secondary" fontWeight={600} gutterBottom>
                  The status of the last subscription
                </Typography>

                <TextField
                  {...register('subscriptionStatus', {
                    required: 'Subscription status is required',
                  })}
                  error={!!errors?.subscriptionStatus?.message}
                  variant="outlined"
                  placeholder="Subscription status"
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
                Subtype
              </Typography>

              <TextField
                {...register('subtype', { required: 'Subtype is required' })}
                error={!!errors?.subtype?.message}
                variant="outlined"
                placeholder="Subtype"
              />

              {errors?.subtype?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.subtype?.message}
                </Typography>
              )}
            </FormControl>

            <Box className={styles.button__group}>
              <Button onClick={handleSubmit(handleFormSubmit, handleOnError)} variant="contained">
                Save
              </Button>
              <Button onClick={() => router.back()} variant="outlined" color="error">
                Cancellation
              </Button>
            </Box>
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default AddCustomer;
