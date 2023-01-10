/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-wrap-multilines */
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import styles from './FirstStep.module.scss';

const data = [
  { id: 1, value: 'Hummus plate' },
  { id: 2, value: 'brick lite' },
  { id: 3, value: 'toast' },
  { id: 4, value: 'Fava Beans' },
  { id: 5, value: 'pickles' },
];

const FirstStep = () => {
  const [values, setValues] = useState(data || []);
  const [lunches, setLunches] = useState(data || []);
  const [dinners, setDinners] = useState(data || []);
  const handleDelete = (id) => {
    for (let i = 0; i < values.length; i++) {
      if (values[i].id === id) {
        values.splice(i, 1);
        break;
      }
    }
    setValues([...values]);
  };

  const handleLunchesDelete = (id) => {
    for (let i = 0; i < lunches.length; i++) {
      if (lunches[i].id === id) {
        lunches.splice(i, 1);
        break;
      }
    }
    setLunches([...lunches]);
  };
  const handleDinnersDelete = (id) => {
    for (let i = 0; i < dinners.length; i++) {
      if (dinners[i].id === id) {
        dinners.splice(i, 1);
        break;
      }
    }
    setDinners([...dinners]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header_wrapper}>
        <Typography variant="h6" color="inherit" className={styles.header_title}>
          Breakfasts
        </Typography>
        <Button variant="contained" color="inherit" className={styles.header_button}>
          Add a Meal
        </Button>
      </div>

      <Stack
        direction="row"
        // spacing={1}
        alignItems="center"
        className={styles.content_wrapper}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexWrap: 'wrap' }}
      >
        {values?.map((item) => (
          <Chip
            variant="outlined"
            label={
              <Typography variant="h6" color="inherit" className={styles.content_title}>
                {item?.value}
              </Typography>
            }
            onDelete={() => handleDelete(item?.id)}
            key={item.id}
          />
        ))}
      </Stack>
      <br />
      <div className={styles.header_wrapper}>
        <Typography variant="h6" color="inherit" className={styles.header_title}>
          Lunches
        </Typography>
        <Button variant="contained" color="inherit" className={styles.header_button}>
          Add a Meal
        </Button>
      </div>

      <Stack
        direction="row"
        // spacing={1}
        alignItems="center"
        className={styles.content_wrapper}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexWrap: 'wrap' }}
      >
        {lunches?.map((item) => (
          <Chip
            variant="outlined"
            label={
              <Typography variant="h6" color="inherit" className={styles.content_title}>
                {item?.value}
              </Typography>
            }
            onDelete={() => handleLunchesDelete(item?.id)}
            key={item.id}
          />
        ))}
      </Stack>
      <br />
      <div className={styles.header_wrapper}>
        <Typography variant="h6" color="inherit" className={styles.header_title}>
          Dinners
        </Typography>
        <Button variant="contained" color="inherit" className={styles.header_button}>
          Add a Meal
        </Button>
      </div>

      <Stack
        direction="row"
        // spacing={1}
        alignItems="center"
        className={styles.content_wrapper}
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ flexWrap: 'wrap' }}
      >
        {dinners?.map((item) => (
          <Chip
            variant="outlined"
            label={
              <Typography variant="h6" color="inherit" className={styles.content_title}>
                {item?.value}
              </Typography>
            }
            onDelete={() => handleDinnersDelete(item?.id)}
            key={item.id}
          />
        ))}
      </Stack>
    </div>
  );
};

export default FirstStep;
