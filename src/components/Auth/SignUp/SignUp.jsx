/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Card, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { saving: false, name: '', phone: '', email: '', password: '' },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6} sm={10} xs={12}>
            <Card className={styles.card}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" color="inherit" className={styles.title}>
                  Create a new account
                </Typography>
                <Typography variant="h6" color="inherit" className={styles.subtitle}>
                  Enter the information below to register a new subscription
                </Typography>

                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    The name
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter the name"
                    {...register('name', { required: true })}
                  />
                  {errors?.name && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    The phone
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter the phone"
                    {...register('phone', { required: true })}
                  />
                  {errors?.phone && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    E-mail
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter the email"
                    {...register('email', { required: true })}
                  />
                  {errors?.email && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    password
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter the password"
                    {...register('password', { required: true })}
                  />
                  {errors?.password && <p className={styles.input_error}>This field is required</p>}
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.submit__button}
                >
                  Create a new account
                </Button>

                <Typography variant="h6" color="inherit" className={styles.submit__title}>
                  Already have an account?
                  <Link href="/sign-in" style={{ color: '#F2A515', paddingLeft: '4px' }}>
                    Sign in
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

export default SignUp;
