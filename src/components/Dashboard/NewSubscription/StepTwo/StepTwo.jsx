/* eslint-disable react/jsx-one-expression-per-line */
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Grid, Stack } from '@mui/material';
import React from 'react';
import AddPackage from './AddPackage/AddPackage';
import styles from './StepTwo.module.scss';

const StepTwo = ({ handleClick }) => (
  <div className={styles.wrapper}>
    <Grid container>
      <Grid item md={12} sm={12} xs={12}>
        <AddPackage />

        <Stack direction={{ sm: 'row', md: 'row', xs: 'column' }} className={styles.button_wrapper}>
          <Box className={styles.button_left_wrapper}>
            {/* <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.save_button}
                >
                  Save
                </Button>
                <Button variant="outlined" color="primary" className={styles.cancellation_button}>
                  Cancellation
                </Button> */}
          </Box>
          <Box className={styles.button_right_wrapper}>
            <Button
              variant="outlined"
              color="primary"
              className={styles.next_button}
              onClick={() => handleClick(0)}
            >
              <ArrowBackIosNewIcon /> previous
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  </div>
);

export default StepTwo;
