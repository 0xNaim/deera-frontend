/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import * as Cookies from '@hooks/cookies';
import { Button, Card, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import styles from './SignUp.module.scss';

const SignUp = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { saving: false, name: '', phone: '', email: '', password: '' },
  });

  const onSubmit = () => {};

  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6} sm={10} xs={12}>
            <Card className={styles.card}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h6" color="inherit" className={styles.title}>
                  {/* Create a new account */}
                  {t('auth:Create_a_new_account')}
                </Typography>
                <Typography variant="h6" color="inherit" className={styles.subtitle}>
                  {/* Enter the information below to register a new subscription */}
                  {t('auth:Enter_the_information_below_to_register_a_new_subscription')}
                </Typography>

                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    {/* The name */}
                    {t('auth:The_name')}
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder={t('auth:Enter_the_name')}
                    {...register('name', { required: true })}
                  />
                  {errors?.name && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    {t('auth:The_phone')}
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
                    {t('auth:E_mail')}
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder={t('auth:Enter_the_email')}
                    {...register('email', { required: true })}
                  />
                  {errors?.email && <p className={styles.input_error}>This field is required</p>}
                </div>
                <div className={styles.single__box}>
                  <Typography variant="h6" color="inherit" className={styles.input__title}>
                    {t('auth:password')}
                  </Typography>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder={t('auth:Enter_the_password')}
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
                  {t('auth:Create_a_new_account')}
                </Button>

                <Typography variant="h6" color="inherit" className={styles.submit__title}>
                  {t('auth:Already_have_an_account')}
                  <Link
                    href="/sign-in"
                    style={{
                      color: '#F2A515',
                      paddingLeft: '4px',
                      marginRight: Cookies.getLanguage() === 'ar' && '6px',
                    }}
                  >
                    {t('auth:Sign_in')}
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
