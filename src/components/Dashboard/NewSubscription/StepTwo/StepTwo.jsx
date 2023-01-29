/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-one-expression-per-line */
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FCSuccess from '@components/Common/FCSuccess';
import AddPackage from './AddPackage/AddPackage';
import packageManagement from './data';
import SingleCard from './SingleCard/SingleCard';
import styles from './StepTwo.module.scss';

const StepTwo = ({ handleClick }) => {
  const { t } = useTranslation();
  const [data, setData] = useState(packageManagement || []);
  const [success, setSuccess] = useState(false);
  const [newPackage, setNewPackage] = useState(false);

  const addNewPackage = (newData) => {
    setData([...data, newData]);
    setNewPackage(false);
  };
  const deleteById = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
        break;
      }
    }
    setData([...data]);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      {success && <FCSuccess />}
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <Box sx={{ marginTop: '30px' }}>
            {data?.map((item) => (
              <Box key={item.id} sx={{ marginBottom: '15px' }}>
                <SingleCard data={item} deleteById={deleteById} />
              </Box>
            ))}
          </Box>

          {!newPackage && (
            <Button
              variant="contained"
              color="inherit"
              className={styles.add_package}
              onClick={() => setNewPackage(!newPackage)}
            >
              {/* Add Package */}
              {t('dNewSubscription:Add_Package')}
            </Button>
          )}

          {newPackage && <AddPackage addNewPackage={addNewPackage} />}

          <Stack
            direction={{ sm: 'row', md: 'row', xs: 'column' }}
            className={styles.button_wrapper}
          >
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
                <ArrowBackIosNewIcon /> {t('dNewSubscription:previous')}
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepTwo;
