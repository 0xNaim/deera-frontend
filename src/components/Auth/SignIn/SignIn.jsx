/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { Alert, Button, Card, Checkbox, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Cookies from '../../../hooks/cookies';
import FCSnackbar from '../../Common/FCSnackbar';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: { saving: true, phone: '+8801708717675', password: 'sonjoybarman' },
  });

  const onSubmit = (data) => {
    const user = { ...data };
    localStorage.setItem('user', JSON.stringify(user));

    router.push('/payment');
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const onError = (Error, e) => {
    if (Error?.saving?.message === '') {
      // console.log('first');
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.wrapper}>
      {success && <FCSnackbar />}
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6} sm={10} xs={12}>
            <Card className={styles.card}>
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <Typography variant="h6" color="inherit" className={styles.title}>
                  {/* Sign in */}
                  {t('auth:Sign_in')}
                </Typography>
                <Typography variant="h6" color="inherit" className={styles.subtitle}>
                  {/* Log in by completing the information below */}
                  {t('auth:Log_in_by_completing_the_information_below')}
                </Typography>

                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    {/* Phone number */}
                    {t('auth:Phone_number')}
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder={t('auth:Enter_the_phone')}
                    {...register('phone', { required: true })}
                  />
                  {errors?.phone && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    {t('auth:Password')}
                  </Typography>
                  <input
                    type="password"
                    className={styles.input}
                    placeholder={t('auth:Enter_the_password')}
                    {...register('password', { required: true })}
                  />
                  {errors?.password && <p className={styles.input_error}>This field is required</p>}
                </div>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Stack direction="row" spacing={0.1} alignItems="center">
                    <Controller
                      name="saving"
                      control={control}
                      rules={{ required: true }}
                      value={watch('inputName')}
                      render={({ field }) => <Checkbox {...field} />}
                    />
                    <Typography variant="h6" color="inherit" className={styles.saving__title}>
                      {t('auth:Saving_data')}
                    </Typography>
                  </Stack>
                  <div>
                    <Typography variant="h6" color="inherit" className={styles.saving__title}>
                      {t('auth:did_you_forget_your_password')}
                    </Typography>
                  </div>
                </Stack>

                {error && (
                  <Alert sx={{ mt: 1 }} severity="error">
                    Please select Saving Data to Save
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.submit__button}
                >
                  {t('auth:Sign_in')}
                </Button>

                <Typography variant="h6" color="inherit" className={styles.submit__title}>
                  {t('auth:Don_have_account_yet')}
                  <Link
                    href="/sign-up"
                    style={{
                      color: '#F2A515',
                      marginRight: Cookies.getLanguage() === 'ar' && '6px',
                    }}
                  >
                    {t('auth:Create_a_new_account')}
                  </Link>
                </Typography>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignIn;
