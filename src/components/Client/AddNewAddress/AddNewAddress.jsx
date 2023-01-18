import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../../../pages/settings/settings-layout';
import Navbar from '../../Layout/Navbar/Navbar';
import SettingsHead from '../head';

import styles from './add-new.module.scss';

const regions = ['Cumilla', 'Noyakhali', 'Barishal', 'Khulna'];

const AddNewAddress = () => {
  const { t } = useTranslation();
  // React hook form
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const values = getValues();

  // Handle form submit
  const handleFormSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading={t('NewDeliveryAddress:New_delivery_address')} />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.form} component="form">
              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <OutlinedInput
                  {...register('title', { required: 'Title name is required' })}
                  placeholder={t('NewDeliveryAddress:Title_name')}
                  error={!!errors?.title?.message}
                />
                {errors?.title?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.title?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <Select
                  {...register('region', { required: 'Region is required' })}
                  displayEmpty
                  value={values?.region}
                >
                  <MenuItem value="undefined" sx={{ fontStyle: 'italic' }}>
                    {t('NewDeliveryAddress:Region')}
                  </MenuItem>
                  {regions.map((region) => (
                    <MenuItem key={region} value={region}>
                      {region}
                    </MenuItem>
                  ))}
                </Select>

                {errors?.region?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.region?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <OutlinedInput
                  {...register('widget', { required: 'Widget is required' })}
                  placeholder={t('NewDeliveryAddress:Widget')}
                  error={!!errors?.widget?.message}
                />
                {errors?.widget?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.widget?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <OutlinedInput
                  {...register('street', { required: 'Street is required' })}
                  placeholder={t('NewDeliveryAddress:Street')}
                  error={!!errors?.street?.message}
                />
                {errors?.street?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.street?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <OutlinedInput
                  {...register('house', { required: 'House number is required' })}
                  placeholder={t('NewDeliveryAddress:House_number')}
                  error={!!errors?.house?.message}
                />
                {errors?.house?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.house?.message}
                  </Typography>
                )}
              </FormControl>

              <FormControl className={styles.form__input} variant="outlined" fullWidth>
                <OutlinedInput
                  {...register('other', { required: 'Other data is required' })}
                  placeholder={t('NewDeliveryAddress:Other_data')}
                  error={!!errors?.other?.message}
                />
                {errors?.other?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.other?.message}
                  </Typography>
                )}
              </FormControl>

              <Button
                className={styles.submit__btn}
                onClick={handleSubmit(handleFormSubmit)}
                variant="contained"
                fullWidth
              >
                {t('NewDeliveryAddress:add')}
              </Button>
            </Box>
          </Box>
        </Container>
      </SettingsLayout>
    </>
  );
};

export default AddNewAddress;
