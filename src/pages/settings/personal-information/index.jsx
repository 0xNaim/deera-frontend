import { Box, Button, Container, FormControl, OutlinedInput, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Layout from '../../../components/Layout';
import SettingsHead from '../head';
import styles from './personal-information.module.scss';

const PersonalInformation = () => {
  // Router
  // const router = useRouter();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // Handle back to previous page
  // const handleGoBack = () => router.back();

  // Handle form submit
  const handleFormSubmit = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <Container>
        <Box className={styles.content__wrapper}>
          <SettingsHead heading="Personal Information" />

          <Box as="form" className={styles.form}>
            <FormControl className={styles.form__input} variant="outlined" fullWidth>
              <Typography className={styles.input__label} variant="h6">
                Your Name
              </Typography>
              <OutlinedInput
                {...register('name', { required: 'Name is required' })}
                error={errors?.name?.message}
                placeholder="Your name"
              />
              {errors?.name?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.name?.message}
                </Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} variant="outlined" fullWidth>
              <Typography className={styles.input__label} variant="h6">
                Phone
              </Typography>
              <OutlinedInput
                {...register('phone', { required: 'Phone number is required' })}
                error={errors?.phone?.message}
                placeholder="Phone number"
              />
              {errors?.phone?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.phone?.message}
                </Typography>
              )}
            </FormControl>

            <FormControl className={styles.form__input} variant="outlined" fullWidth>
              <Typography className={styles.input__label} variant="h6">
                Email
              </Typography>
              <OutlinedInput
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                error={errors?.email?.message}
                placeholder="Your email"
              />
              {errors?.email?.message && (
                <Typography className={styles.helper__text} variant="body2">
                  {errors?.email?.message}
                </Typography>
              )}
            </FormControl>

            <Button
              onClick={handleSubmit(handleFormSubmit)}
              className={styles.submit__btn}
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};
export default PersonalInformation;
