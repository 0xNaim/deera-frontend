/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-one-expression-per-line */
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Box, Typography } from '@mui/material';
import React from 'react';
import * as Cookies from '@hooks/cookies';
import HorizontalDatepicker from '@components/HorizontalDatepicker/HorizontalDatepicker';
import styles from './MealCalendar.module.scss';
import FCTabs from './Tabs/Tabs';

const MealCalendar = ({ show }) => (
  <Box className={styles.wrapper}>
    <HorizontalDatepicker />
    <Box className={styles.select_meals}>
      <Typography variant="h6" color="inherit" className={styles._title}>
        {Cookies.getLanguage() === 'ar' ? 'وجبات اليوم' : "Today's meals"}
      </Typography>
      <Typography variant="h6" color="inherit" className={styles._subtitle}>
        <CalendarTodayIcon />
        {Cookies.getLanguage() === 'ar' ? 'السبت 12 ديسمبر' : 'Saturday 12th, December'}
      </Typography>
    </Box>

    {show && (
      <Box>
        <FCTabs />
      </Box>
    )}
  </Box>
);

export default MealCalendar;
