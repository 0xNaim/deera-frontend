/* eslint-disable react/jsx-one-expression-per-line */
import { Divider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import styles from './SingleMyMealList.module.scss';

const SingleMyMealList = ({ cart }) => {
  console.log('first');
  return (
    <div className={styles.wrapper}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ width: 200 }} image={cart?.image} alt={cart?.title} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {cart?.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {cart?.calories} calories
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Typography component="div" variant="subtitle1">
                {cart?.carp} carp
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {cart?.protein} protein
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {cart?.fats} fats
              </Typography>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default SingleMyMealList;
