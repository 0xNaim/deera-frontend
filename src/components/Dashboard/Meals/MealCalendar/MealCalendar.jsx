/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import HorizontalDatepicker from '../../../HorizontalDatepicker/HorizontalDatepicker';
import styles from './MealCalendar.module.scss';
import FCTabs from './Tabs/Tabs';

const MealCalendar = () => (
  <div className={styles.wrapper}>
    <Container>
      <HorizontalDatepicker />
      <Box className={styles.select_meals}>
        <Typography variant="h6" color="inherit" className={styles._title}>
          Today&apos;s meals
        </Typography>
        <Typography variant="h6" color="inherit" className={styles._subtitle}>
          <CalendarTodayIcon /> Saturday 12th, December
        </Typography>
      </Box>

      <Box>
        <FCTabs />
      </Box>
    </Container>
  </div>
);

export default MealCalendar;
