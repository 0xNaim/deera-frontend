/* eslint-disable object-curly-newline */
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './EditMealClassification.module.scss';

const EditMealClassification = ({ data }) => {
  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: { name_arabic: data?.arabic_name || '', name_english: data?.english_name || '' },
  });
  const onSubmit = (value) => console.log(value);
  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Classification name in Arabic
                </Typography>
                <input
                  {...register('name_arabic', { required: true })}
                  className={styles.input}
                  placeholder="The name of the meal"
                />
                {/* errors will return when field validation fails  */}
                {errors.name_arabic && <p className={styles.error_title}>This field is required</p>}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Category name in English
                </Typography>
                <input
                  {...register('name_english', { required: true })}
                  className={styles.input}
                  placeholder="The name of the meal"
                />
                {/* errors will return when field validation fails  */}
                {errors.name_english && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Box>

              <Grid container spacing={1} sx={{ mt: 5 }} className={styles.button_wrapper}>
                <Grid item md={6} sm={6} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.save_button}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Button variant="outlined" color="primary" className={styles.cancellation_button}>
                    Cancellation
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default EditMealClassification;