/* eslint-disable react/jsx-one-expression-per-line */
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './AddPackage.module.scss';

const AddPackage = () => {
  const {
    register,
    handleSubmit,
    // control,
    watch,
    formState: { errors },
  } = useForm();
  //   { defaultValues: { category: 'meal1' } }
  console.log(watch('week'));
  const onSubmit = (data) => console.log({ ...data });
  return (
    <div className={styles.wrapper}>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={styles.header_wrapper}>Add Package</Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Calorie count
                </Typography>
                <input
                  {...register('calorie_count', { required: true })}
                  className={styles.input}
                  placeholder="Enter the number of calories"
                />
                {/* errors will return when field validation fails  */}
                {errors.calorie_count && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  package name
                </Typography>
                <input
                  {...register('package_name', { required: true })}
                  className={styles.input}
                  placeholder="Enter the package name"
                />
                {/* errors will return when field validation fails  */}
                {errors.package_name && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Number of breakfasts
                </Typography>
                <input
                  {...register('number_of_breakfasts', { required: true })}
                  className={styles.input}
                  placeholder="1"
                />
                {/* errors will return when field validation fails  */}
                {errors.number_of_breakfasts && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  The number of lunches
                </Typography>
                <input
                  {...register('number_of_lunches', { required: true })}
                  className={styles.input}
                  placeholder="1"
                />
                {/* errors will return when field validation fails  */}
                {errors.number_of_lunches && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  number of authorities
                </Typography>
                <input
                  {...register('number_of_authorities', { required: true })}
                  className={styles.input}
                  placeholder="1"
                />
                {/* errors will return when field validation fails  */}
                {errors.number_of_authorities && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  The number of snacks
                </Typography>
                <input
                  {...register('number_of_snacks', { required: true })}
                  className={styles.input}
                  placeholder="1"
                />
                {/* errors will return when field validation fails  */}
                {errors.number_of_snacks && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
            </Grid>

            <Box sx={{ mt: 2, mb: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                Choose the duration and price for each package
              </Typography>
            </Box>

            <Grid container alignItems="center" spacing={2}>
              <Grid item md={2} sm={4} xs={4}>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="week"
                    {...register('week')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_price')}
                  className={styles.input}
                  placeholder="Subscription price"
                />
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_discount')}
                  className={styles.input}
                  placeholder="Subscription price after discount"
                />
              </Grid>
              {/* 2nd */}
              <Grid item md={2} sm={4} xs={4}>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Two weeks"
                    {...register('two_weeks')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_price')}
                  className={styles.input}
                  placeholder="Subscription price"
                />
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_discount')}
                  className={styles.input}
                  placeholder="Subscription price after discount"
                />
              </Grid>
              {/* 3rd part */}
              <Grid item md={2} sm={4} xs={4}>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="City"
                    {...register('city')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_price')}
                  className={styles.input}
                  placeholder="Subscription price"
                />
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_discount')}
                  className={styles.input}
                  placeholder="Subscription price after discount"
                />
              </Grid>
            </Grid>

            <Box className={styles.save_package_button}>
              <Button variant="contained" color="inherit" type="submit">
                Save Package
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddPackage;
