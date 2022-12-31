/* eslint-disable no-return-assign */
import { Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import styles from './step-one.module.scss';

const regions = ['Cumilla', 'Noyakhali', 'Barishal', 'Khulna'];

const StepOne = ({ nextStep }) => {
  // React hook form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const values = getValues();

  // Handle form submit
  const handleFormSubmit = (e) => {
    console.log(e);

    nextStep();
  };

  return (
    <Box className={styles.content__wrapper}>
      <Typography variant="h2">Step 1</Typography>
      <Box component="form" className={styles.form}>
        <FormControl className={styles.form__inputs} fullWidth>
          <Typography fontWeight={600} sx={{ color: '#374151' }}>
            Choose a subscription start date
          </Typography>
          <TextField
            type="date"
            {...register('startDate', { required: 'Start date is required' })}
            error={!!errors?.startDate?.message}
          />

          {errors?.startDate?.message && (
            <Typography className={styles.error__text}>{errors?.startDate?.message}</Typography>
          )}
        </FormControl>

        <FormControl className={styles.form__inputs} fullWidth>
          <Select
            {...register('paymentMethod', { required: 'Payment method is required' })}
            value={values.paymentMethod}
            displayEmpty
            error={!!errors?.paymentMethod?.message}
          >
            <MenuItem value="undefined">Please choose your preferred delivery method</MenuItem>
            <MenuItem value="paypal">PayPal</MenuItem>
            <MenuItem value="stripe">Stripe</MenuItem>
          </Select>
          {errors?.paymentMethod?.message && (
            <Typography className={styles.error__text}>{errors?.paymentMethod?.message}</Typography>
          )}
        </FormControl>

        <FormControl className={styles.form__inputs} fullWidth>
          <Typography fontWeight={600} sx={{ color: '#374151' }}>
            Please specify the delivery period
          </Typography>
          <TextField
            type="date"
            {...register('deliveryTime', { required: 'Delivery time is required' })}
            error={!!errors?.deliveryTime?.message}
          />

          {errors?.deliveryTime?.message && (
            <Typography className={styles.error__text}>{errors?.deliveryTime?.message}</Typography>
          )}
        </FormControl>

        <Box className={styles.delivery__address}>
          <Typography className={styles.address__title} variant="h5">
            Select the delivery address
          </Typography>

          <FormControl className={styles.form__inputs} fullWidth>
            <TextField
              {...register('titleName', { required: 'Title name is required' })}
              placeholder="Title name"
              error={errors?.titleName?.message}
            />

            {errors?.titleName?.message && (
              <Typography className={styles.error__text}>{errors?.titleName?.message}</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__inputs} fullWidth>
            <Select
              {...register('region', { required: 'Region is required' })}
              displayEmpty
              value={values?.region}
              error={!!errors?.region?.message}
            >
              <MenuItem value="undefined" sx={{ fontStyle: 'italic' }}>
                Region
              </MenuItem>
              {regions.map((region) => (
                <MenuItem key={region} value={region}>
                  {region}
                </MenuItem>
              ))}
            </Select>

            {errors?.region?.message && (
              <Typography className={styles.error__text}>{errors?.region?.message}</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__inputs} fullWidth>
            <TextField
              {...register('widget', { required: 'Widget is required' })}
              placeholder="Widget"
              error={!!errors?.widget?.message}
            />

            {errors?.widget?.message && (
              <Typography className={styles.error__text}>{errors?.widget?.message}</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__inputs} fullWidth>
            <TextField
              {...register('street', { required: 'Street is required' })}
              placeholder="Street"
              error={!!errors?.street?.message}
            />

            {errors?.street?.message && (
              <Typography className={styles.error__text}>{errors?.street?.message}</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__inputs} fullWidth>
            <TextField
              {...register('houseNumber', { required: 'House number is required' })}
              placeholder="House number"
              error={!!errors?.houseNumber?.message}
            />

            {errors?.houseNumber?.message && (
              <Typography className={styles.error__text}>{errors?.houseNumber?.message}</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__inputs} fullWidth>
            <TextField
              {...register('other', { required: 'Other data is required' })}
              placeholder="Other data"
              error={!!errors?.other?.message}
            />

            {errors?.other?.message && (
              <Typography className={styles.error__text}>{errors?.other?.message}</Typography>
            )}
          </FormControl>
        </Box>

        <Button
          onClick={handleSubmit(handleFormSubmit)}
          className={styles.next__btn}
          variant="contained"
          fullWidth
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default StepOne;
