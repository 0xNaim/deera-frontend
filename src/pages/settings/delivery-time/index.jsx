import { Box, Button, Container, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
import Layout from '../../../components/Layout';
import SettingsHead from '../head';
import styles from './delivery-time.module.scss';

const times = ['Between 7 am to 12 am (before noon)', 'Between 6 pm to 10 pm (the day before)'];

const DeliveryTime = () => {
  const [deliveryTimes] = useState(times);
  const [selectedTime, setSelectedTime] = useState(0);

  // Handle select delivery time
  const handleDeliveryTime = (e) => {
    setSelectedTime(e.target.value);
  };

  return (
    <Layout>
      <Container>
        <Box className={styles.delivery__content__wrapper}>
          <SettingsHead heading="Delivery time" />

          <Box className={styles.delivery__content}>
            <RadioGroup value={selectedTime} onChange={handleDeliveryTime}>
              {deliveryTimes.map((deliveryTime, idx) => (
                <Box className={styles.delivery__time} key={deliveryTime}>
                  <FormControlLabel value={idx} control={<Radio />} label={deliveryTime} />
                </Box>
              ))}
            </RadioGroup>

            <Box className={styles.btn__group}>
              <Button className={styles['btn--submit']} variant="contained" fullWidth>
                Submit
              </Button>
              <Button color="secondary" variant="outlined" fullWidth>
                Add new time
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default DeliveryTime;
