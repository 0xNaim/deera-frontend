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
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './AddPackage.module.scss';

const AddPackage = ({ addNewPackage }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    addNewPackage(data);
  };

  return (
    <div className={styles.wrapper}>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box className={styles.header_wrapper}>{t('dNewSubscription:Add_Package')}</Box>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {/* Calorie count */}
                  {t('dNewSubscription:Calorie_count')}
                </Typography>
                <input
                  {...register('calorie_count', { required: true })}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Enter_the_number_of_calories')}
                />
                {/* errors will return when field validation fails  */}
                {errors.calorie_count && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {t('dNewSubscription:package_name')}
                </Typography>
                <input
                  {...register('package_name', { required: true })}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Enter_the_package_name')}
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
                  {t('dNewSubscription:Number_of_breakfasts')}
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
                  {/* The number of lunches */}
                  {t('dNewSubscription:The_number_of_lunches')}
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
                  {/* number of authorities */}
                  {t('dNewSubscription:number_of_authorities')}
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
                  {/* The number of snacks */}
                  {t('dNewSubscription:The_number_of_snacks')}
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
                {/* Choose the duration and price for each package */}
                {t('dNewSubscription:Choose_the_duration_and_price_for_each_package')}
              </Typography>
            </Box>

            <Grid container alignItems="center" spacing={2}>
              <Grid item md={2} sm={4} xs={4}>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={t('dNewSubscription:week')}
                    {...register('week')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_price')}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Subscription_price')}
                />
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_discount')}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Subscription_price_after_discount')}
                />
              </Grid>
              {/* 2nd */}
              <Grid item md={2} sm={4} xs={4}>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={t('dNewSubscription:Two_weeks')}
                    {...register('two_weeks')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_price')}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Subscription_price')}
                />
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_discount')}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Subscription_price_after_discount')}
                />
              </Grid>
              {/* 3rd part */}
              <Grid item md={2} sm={4} xs={4}>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={t('dNewSubscription:Month')}
                    {...register('month')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_price')}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Subscription_price')}
                />
              </Grid>
              <Grid item md={5} sm={4} xs={4}>
                <input
                  {...register('subscription_discount')}
                  className={styles.input}
                  placeholder={t('dNewSubscription:Subscription_price_after_discount')}
                />
              </Grid>
            </Grid>

            <Box className={styles.save_package_button}>
              <Button variant="contained" color="inherit" type="submit">
                {t('dNewSubscription:save_package')}
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddPackage;
