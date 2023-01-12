/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './NewPeriod.module.scss';

const NewPeriod = () => {
  const [value, setValue] = React.useState('friday_step');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm();
  //   { defaultValues: { category: 'meal1' } }
  const onSubmit = (data) => console.log({ ...data });
  return (
    <div className={styles.wrapper}>
      <Grid container>
        <Grid item md={6} sm={12} xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                Duration name in Arabic
              </Typography>
              <input
                {...register('arabic_name', { required: true })}
                className={styles.input}
                placeholder="Duration name in Arabic"
              />
              {/* errors will return when field validation fails  */}
              {errors.arabic_name && <p className={styles.error_title}>This field is required</p>}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                The name of the period in English
              </Typography>
              <input
                {...register('english_name', { required: true })}
                className={styles.input}
                placeholder="The name of the period in English"
              />
              {/* errors will return when field validation fails  */}
              {errors.english_name && <p className={styles.error_title}>This field is required</p>}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                The number of days
              </Typography>
              <input
                {...register('days', { required: true })}
                className={styles.input}
                placeholder="The number of days"
              />
              {/* errors will return when field validation fails  */}
              {errors.days && <p className={styles.error_title}>This field is required</p>}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                Number of consultations
              </Typography>
              <input
                {...register('consult_number', { required: true })}
                className={styles.input}
                placeholder="number of consultations"
              />
              {/* errors will return when field validation fails  */}
              {errors.consult_number && (
                <p className={styles.error_title}>This field is required</p>
              )}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                Days off
              </Typography>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="friday_step"
                  name="radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="friday_step"
                    control={
                      <Radio
                        sx={{
                          color: '#684cf9',
                          '&.Mui-checked': { color: '#684cf9' },
                        }}
                      />
                    }
                    label={
                      <Typography variant="h6" color="inherit" className={styles.input_radio_title}>
                        Friday stop
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="weekend_stop"
                    control={
                      <Radio
                        sx={{
                          color: '#684cf9',
                          '&.Mui-checked': { color: '#684cf9' },
                        }}
                      />
                    }
                    label={
                      <Typography variant="h6" color="inherit" className={styles.input_radio_title}>
                        The Weekend has stopped
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    value="non_step"
                    control={
                      <Radio
                        sx={{
                          color: '#684cf9',
                          '&.Mui-checked': { color: '#684cf9' },
                        }}
                      />
                    }
                    label={
                      <Typography variant="h6" color="inherit" className={styles.input_radio_title}>
                        non stop
                      </Typography>
                    }
                  />
                </RadioGroup>
              </FormControl>
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
            </Stack>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewPeriod;
