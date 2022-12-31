/* eslint-disable react/jsx-wrap-multilines */
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import styles from './step-two.module.scss';

const StepTwo = ({ backStep }) => {
  console.log('Step 2');

  return (
    <Box className={styles.content__wrapper}>
      <Typography variant="h6">Step 2</Typography>

      <Box className={styles.subscription__review}>
        <List disablePadding>
          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#374151' }}>
                  Subtype
                </Typography>
              }
              secondary="Low carb"
            />
          </ListItem>
          <Divider />

          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#374151' }}>
                  Subscription period
                </Typography>
              }
              secondary="03 Dec 2022 - 04 Jan"
            />
          </ListItem>
          <Divider />

          <ListItem sx={{ px: 0 }}>
            <ListItemText
              primary={
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: '#374151' }}>
                  Package type
                </Typography>
              }
              secondary="3 snacks 1300 calories"
            />
          </ListItem>
          <Divider />
        </List>
      </Box>

      <Box className={styles.discount__area}>
        <Typography className={styles.discount__label} variant="h6" gutterBottom>
          Discount
        </Typography>

        <Box className={styles.discount}>
          <TextField className={styles.discount__input} placeholder="Enter the discount code" />
          <Button className={styles.discount__btn} variant="contained" fullWidth>
            Submit
          </Button>
        </Box>
      </Box>
      <Divider />

      <Box className={styles.price__area}>
        <Box className={styles.price}>
          <Typography variant="h6" fontWeight={600}>
            Total
          </Typography>
          <Typography variant="h6" fontWeight={600}>
            120 D.K
          </Typography>
        </Box>

        <Box className={styles.payment}>
          <FormControlLabel
            control={<Checkbox disableRipple defaultChecked />}
            label="Do you agree to the terms and conditions"
            sx={{ color: '#6B7280' }}
          />

          <Box className={styles.btn__group}>
            <Button className={styles.btn__payment} variant="contained">
              Payment
            </Button>
            <Button
              className={styles.btn__back}
              onClick={backStep}
              variant="outlined"
              color="secondary"
            >
              Previous
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepTwo;
