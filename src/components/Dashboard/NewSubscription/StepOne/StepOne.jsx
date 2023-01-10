/* eslint-disable react/jsx-one-expression-per-line */
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import FCImageUploader from '../../../Common/FCImageUploader';
import styles from './StepOne.module.scss';

const StepOne = ({ handleClick }) => {
  const [files, setFiles] = React.useState([]);
  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm();
  //   { defaultValues: { category: 'meal1' } }
  const onSubmit = (data) => console.log({ ...data, files });
  return (
    <div className={styles.wrapper}>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                Arabic Name
              </Typography>
              <input
                {...register('name_arabic', { required: true })}
                className={styles.input}
                placeholder="The name of the subscription in Arabic"
              />
              {/* errors will return when field validation fails  */}
              {errors.name_arabic && <p className={styles.error_title}>This field is required</p>}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                English Name
              </Typography>
              <input
                {...register('name_english', { required: true })}
                className={styles.input}
                placeholder="Subscription name in English"
              />
              {/* errors will return when field validation fails  */}
              {errors.name_english && <p className={styles.error_title}>This field is required</p>}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                subscription photo
              </Typography>
              <FCImageUploader files={files} setFiles={setFiles} />
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                The duration of the subscription start after purchase
              </Typography>
              <input
                {...register('duration_number', { required: true })}
                className={styles.input}
                placeholder="Enter the number of days"
              />
              {/* errors will return when field validation fails  */}
              {errors.duration_number && (
                <p className={styles.error_title}>This field is required</p>
              )}
            </Box>
            <Stack
              direction={{ sm: 'row', md: 'row', xs: 'column' }}
              className={styles.button_wrapper}
            >
              <Box className={styles.button_left_wrapper}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.save_button}
                >
                  Save
                </Button>
                <Button variant="outlined" color="primary" className={styles.cancellation_button}>
                  Cancellation
                </Button>
              </Box>
              <Box className={styles.button_right_wrapper}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.next_button}
                  onClick={() => handleClick(1)}
                >
                  Next <ArrowForwardIosIcon sx={{ height: '16px' }} />
                </Button>
              </Box>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepOne;
