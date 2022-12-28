import { Card, Typography } from '@mui/material';
import React from 'react';
import styles from './SingleProduct.module.scss';

const SingleProduct = ({ cart, margin }) => (
  <Card className={styles.cardWrapper} sx={{ marginRight: margin || '15px' }}>
    <img src={cart?.image} alt={cart?.title} />
    <Typography variant="h6" color="inherit" className={styles.title}>
      {cart?.title}
    </Typography>
    <Typography variant="h6" color="inherit" className={styles.subTitle}>
      {cart?.subTitle}
    </Typography>
  </Card>
);

export default SingleProduct;
