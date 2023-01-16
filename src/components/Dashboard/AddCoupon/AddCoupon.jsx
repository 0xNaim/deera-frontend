/* eslint-disable object-curly-newline */
import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Layout from '../Layout/Layout';
import styles from './add-coupon.module.scss';

const Header = dynamic(() => import('../common/Header/Header'), {
  ssr: false,
});

const AddCoupon = () => {
  // Router
  const router = useRouter();

  // Date state
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // Date error state
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);

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
    if (startDate) setStartDateError(false);
    if (endDate) setEndDateError(false);
  };

  // Handle error state
  const handleOnError = () => {
    // Handle error message
    if (startDate) setStartDateError(false);
    if (endDate) setEndDateError(false);

    // Handle error message
    if (!startDate) setStartDateError(true);
    if (!endDate) setEndDateError(true);
  };
  const { t } = useTranslation();
  return (
    <Layout>
      <Header title={t('header:add_coupons')} />

      <Container>
        <Box component="form" className={styles.content__wrapper}>
          <FormControl className={styles.form__input} fullWidth>
            <Typography color="secondary" fontWeight={600} gutterBottom>
              {/* Code Name */}
              {t('dCoupons:Code_Name')}
            </Typography>

            <TextField
              {...register('codeName', { required: 'Code name is required' })}
              error={!!errors?.codeName?.message}
              variant="outlined"
              placeholder={t('dCoupons:Code_Name')}
            />

            {errors?.codeName?.message && (
              <Typography className={styles.helper__text} variant="body2">
                {errors?.codeName?.message}
              </Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__input} fullWidth>
            <Typography color="secondary" fontWeight={600} gutterBottom>
              {t('dCoupons:Discount_Percentage')}
            </Typography>

            <TextField
              {...register('discount', { required: 'Discount percentage is required' })}
              error={!!errors?.discount?.message}
              variant="outlined"
              placeholder={t('dCoupons:Discount_Percentage')}
            />

            {errors?.discount?.message && (
              <Typography className={styles.helper__text} variant="body2">
                {errors?.discount?.message}
              </Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__input} fullWidth>
            <Typography color="secondary" fontWeight={600} gutterBottom>
              {t('dCoupons:Start_Date')}
            </Typography>

            <DatePicker
              className={endDateError ? `${styles['date__input--error']}` : styles.date__input}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              required
            />

            {startDateError && (
              <Typography className={styles.helper__text}>Start date is required</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__input} fullWidth>
            <Typography color="secondary" fontWeight={600} gutterBottom>
              {t('dCoupons:Expiry_Date')}
            </Typography>

            <DatePicker
              className={endDateError ? `${styles['date__input--error']}` : styles.date__input}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              required
            />

            {endDateError && (
              <Typography className={styles.helper__text}>Expiry date is required</Typography>
            )}
          </FormControl>

          <Box className={styles.button__group}>
            <Button
              className={styles.submit__btn}
              onClick={handleSubmit(handleFormSubmit, handleOnError)}
              variant="contained"
              size="large"
              fullWidth
            >
              {t('dCoupons:Addition')}
            </Button>
            <Button
              onClick={() => router.back()}
              variant="outlined"
              size="large"
              color="error"
              fullWidth
            >
              {t('dCoupons:Cancellation')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default AddCoupon;
