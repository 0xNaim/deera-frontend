/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { Button, Card, Checkbox, Container, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { saving: false, phone: '', password: '' },
  });

  console.log(errors);
  // initialize the hook
  //   const [data, setData] = useState();
  //   const [savingData, setSavingData] = React.useState('');

  //   const handleChange = (event) => {
  //     if (savingData === '') {
  //       setSavingData(event.target.value);
  //       console.log('1');
  //     }

  //     if (savingData !== '') {
  //       setSavingData('');
  //       console.log('2');
  //     }
  //   };

  //   console.log(savingData);

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
                  Sign in
                </Typography>
                <Typography variant="h6" color="inherit" className={styles.subtitle}>
                  Log in by completing the information below
                </Typography>

                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    Phone number
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter a phone number"
                    {...register('phone', { required: true })}
                  />
                  {errors?.phone && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    Password
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter the password"
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
                      render={({ field }) => <Checkbox {...field} />}
                    />
                    <Typography variant="h6" color="inherit" className={styles.saving__title}>
                      Saving data
                    </Typography>
                  </Stack>
                  <div>
                    <Typography variant="h6" color="inherit" className={styles.saving__title}>
                      did you forget your password?
                    </Typography>
                  </div>
                </Stack>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.submit__button}
                >
                  Sign in
                </Button>

                <Typography variant="h6" color="inherit" className={styles.submit__title}>
                  Don&apos;t have account yet?{' '}
                  <Link href="/sign-up" style={{ color: '#F2A515' }}>
                    Create a new account{' '}
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
