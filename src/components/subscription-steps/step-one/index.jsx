/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import kuwaitCitiesData from '@components/Client/fakedata/cities';
import styles from './step-one.module.scss';

// const regions = ['Cumilla', 'Noyakhali', 'Barishal', 'Khulna'];

const StepOne = ({ nextStep }) => {
  // Date state
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  // Date error state
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);

  // Region state
  const [selectedRegion, setSelectedRegion] = useState('');

  // Cities state
  const [cities, setCities] = useState(kuwaitCitiesData?.[0]?.cities);

  useEffect(() => {
    const getCitiesByRegion = kuwaitCitiesData.filter(
      (kuwaitCities) => kuwaitCities.name === selectedRegion
    );

    if (getCitiesByRegion?.length) {
      setCities(getCitiesByRegion?.[0]?.cities);
    } else {
      setCities(kuwaitCitiesData?.[0]?.cities);
    }
  }, [selectedRegion]);

  // React hook form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const values = getValues();

  // Handle form submit
  const handleFormSubmit = () => {
    // Handle error message
    if (startDate) setStartDateError(false);
    if (endDate) setEndDateError(false);

    nextStep();
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

  return (
    <Box className={styles.content__wrapper}>
      <Box className={styles.circular__content}>
        <Box className={styles.circular__wrapper}>
          <Box className={styles.circular__parent}>
            <Typography variant="h5" fontWeight={600}>
              1 of 2
            </Typography>
          </Box>
          <CircularProgress className={styles.circular} variant="determinate" value={50} />
        </Box>

        <Box className={styles.circular__text}>
          <Typography
            className={styles.circular__text__heading}
            variant="h5"
            fontWeight={600}
            gutterBottom
          >
            Start and delivery data
          </Typography>
          <Typography sx={{ color: '#9CA3AF' }}>Next: Order summary</Typography>
        </Box>
      </Box>

      <Box component="form" className={styles.form}>
        <FormControl className={styles.form__inputs} fullWidth>
          <Typography fontWeight={600} sx={{ color: '#374151' }}>
            Choose a subscription start date
          </Typography>
          <DatePicker
            className={styles.date__input}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            required
          />

          {startDateError && (
            <Typography className={styles.error__text}>Start date is required</Typography>
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

          <DatePicker
            className={styles.date__input}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
            required
          />

          {endDateError && (
            <Typography className={styles.error__text}>Delivery date is required</Typography>
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
              value={selectedRegion}
              error={!!errors?.region?.message}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <MenuItem value="" sx={{ fontStyle: 'italic' }} disabled>
                Select Region
              </MenuItem>
              {kuwaitCitiesData?.map((region) => (
                <MenuItem key={region?.id} value={region?.name}>
                  {region?.name}
                </MenuItem>
              ))}
            </Select>

            {errors?.region?.message && (
              <Typography className={styles.error__text}>{errors?.region?.message}</Typography>
            )}
          </FormControl>

          <FormControl className={styles.form__inputs} fullWidth>
            <Autocomplete
              options={cities && cities.map((city) => city.name)}
              renderInput={(params) => (
                <TextField
                  {...register('city', { required: 'City is required' })}
                  {...params}
                  label="Select city"
                />
              )}
              fullWidth
              disablePortal
            />

            {errors?.city?.message && (
              <Typography className={styles.error__text}>{errors?.city?.message}</Typography>
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
          onClick={handleSubmit(handleFormSubmit, handleOnError)}
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
