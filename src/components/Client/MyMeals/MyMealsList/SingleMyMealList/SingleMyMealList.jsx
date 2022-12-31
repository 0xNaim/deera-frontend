/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-one-expression-per-line */
import EditIcon from '@mui/icons-material/Edit';
import { Button, Divider, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import SelectDialog from '../SelectDialog/SelectDialog';
import styles from './SingleMyMealList.module.scss';

const SingleMyMealList = ({
  cart,
  handleAddData,
  selectData,
  titleOff,
  editButton,
  removeButton,
  handleRemoveData,
}) => (
  <div className={styles.wrapper}>
    {titleOff !== false && (
      <div className={styles.card_header}>
        <Typography variant="subtitle1" color="inherit">
          {cart?.type}
        </Typography>
      </div>
    )}
    <Card className={styles.card}>
      <CardMedia component="img" sx={{ width: 140 }} image={cart?.image} alt={cart?.title} />
      <Box sx={{ width: '100%' }}>
        <CardContent sx={{ width: '100%' }} className={styles.cardContent}>
          {editButton !== false && (
            <SelectDialog
              data={selectData}
              handleRemoveData={handleRemoveData}
              btnContent={
                <IconButton
                  aria-label="edit"
                  className={styles.iconButton}
                  onClick={() => handleAddData(cart)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
          )}

          <Typography component="div" variant="h5" className={styles.card_title}>
            {cart?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            className={styles.card_calories}
          >
            {cart?.calories} calories
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
            className={styles.card_bottom_title}
          >
            <Typography component="p" variant="subtitle1">
              {cart?.carp} carp
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="p">
              {cart?.protein} protein
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="p">
              {cart?.fats} fats
            </Typography>
          </Stack>
          {removeButton && (
            <div className={styles.removeButton}>
              <Button variant="outlined" color="primary" onClick={() => handleRemoveData(cart?.id)}>
                Remove
              </Button>
            </div>
          )}
        </CardContent>
      </Box>
    </Card>
  </div>
);

export default SingleMyMealList;
