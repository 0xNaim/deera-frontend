import { Box, Button, Container, FormControl, OutlinedInput, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Navbar from '../../../components/Layout/Navbar/Navbar';
import SettingsHead from '../head';
import SettingsLayout from '../settings-layout';
import styles from './personal-information.module.scss';

const PersonalInformation = () => {
  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  // Handle form submit
  const handleFormSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading="Personal Information" />

        <Container>
          <Box className={styles.content__wrapper}>
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
      </SettingsLayout>
    </>
  );
};
export default PersonalInformation;
