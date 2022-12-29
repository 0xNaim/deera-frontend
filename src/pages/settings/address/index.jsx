import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Navbar from '../../../components/Layout/Navbar/Navbar';
import SettingsHead from '../head';
import SettingsLayout from '../settings-layout';
import styles from './address.module.scss';

const fakeAddresses = [
  { name: 'Home', address: 'House 40, Street 50, Plot 6 Salmiya' },
  { name: 'Word', address: 'House 21, Street 32, Block 1 Shuwaikh' },
];

const Address = () => {
  const [addresses] = useState(fakeAddresses);
  const [selectedAddress, setSelectedAddress] = useState(0);

  // Handle select address
  const handleSetAddress = (e) => {
    setSelectedAddress(e.target.value);
  };

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading="My Addresses" />
        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.address__wrapper}>
              <RadioGroup value={selectedAddress} onChange={handleSetAddress}>
                {addresses.map((address, idx) => (
                  <Box key={address.name} className={styles.address__group}>
                    <FormControlLabel value={idx} control={<Radio />} />
                    <Box className={styles.address}>
                      <Box>
                        <Typography className={styles.address__name} variant="h6">
                          {address.name}
                        </Typography>
                        <Typography>{address.address}</Typography>
                      </Box>
                      <ArrowForwardIosIcon className={styles.address__icon} />
                    </Box>
                  </Box>
                ))}
              </RadioGroup>

              <Box className={styles.btn__group}>
                <Button className={styles['btn--submit']} variant="contained" fullWidth>
                  Submit
                </Button>
                <Button color="secondary" variant="outlined" fullWidth>
                  New address
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </SettingsLayout>
    </>
  );
};

export default Address;
