/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Card, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './SingleCard.module.scss';

const SingleCard = ({ data, deleteById }) => {
  console.log(data);
  return (
    <Card className={styles.card}>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <div className={styles.first_card}>
            <Typography variant="h6" color="inherit" className={styles.pkg_title}>
              {data.package_name}
            </Typography>
            <Typography variant="h6" color="inherit" className={styles.calories_title}>
              {data.calorie_count} calories
            </Typography>
          </div>
        </Grid>
        <Grid item md={3} className={styles.second_card}>
          <Typography variant="h6" color="inherit" className={styles.second_title}>
            <InfoOutlinedIcon /> number of daily meals
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={styles.count_title}
            sx={{ padding: '10px 0' }}
          >
            2 meals, 1 snack
          </Typography>
          <Typography variant="h6" color="inherit" className={styles.count_title}>
            0 salad
          </Typography>
        </Grid>
        <Grid item md={4} className={styles.third_card}>
          <Typography variant="h6" color="inherit" className={styles.third_title}>
            <CalendarMonthOutlinedIcon /> Package prices
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            className={styles.week_title}
            sx={{ padding: '10px 0' }}
          >
            One week (50 KD), two weeks (50 KD)
          </Typography>
          <Typography variant="h6" color="inherit" className={styles.week_title}>
            1 month (50 KD), 2 months (100 KD)
          </Typography>
        </Grid>
        <Grid item md={2} className={styles.fourth_card}>
          <Stack direction="row" spacing={1} alignItems="center" className={styles.button_wrapper}>
            <button>
              <EditIcon />
            </button>
            <button onClick={() => deleteById(data?.id)}>
              <DeleteIcon />
            </button>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SingleCard;
