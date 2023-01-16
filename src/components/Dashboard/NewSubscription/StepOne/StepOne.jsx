/* eslint-disable react/jsx-one-expression-per-line */
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FCImageUploader from '../../../Common/FCImageUploader';
import ImageDialog from '../../../Common/ImageDialog';
import styles from './StepOne.module.scss';

const StepOne = ({ handleClick }) => {
  const { t } = useTranslation();
  const [files, setFiles] = React.useState('');
  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm();
  //   { defaultValues: { category: 'meal1' } }
  const onSubmit = (data) => console.log({ ...data, files });
  return (
    <div className={styles.wrapper}>
      <Grid container>
        <Grid item md={12} sm={12} xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                {/* Arabic Name */}
                {t('dNewSubscription:arabic_name')}
              </Typography>
              <input
                {...register('name_arabic', { required: true })}
                className={styles.input}
                placeholder={t('dNewSubscription:the_name_of_the_subscription_arabic')}
              />
              {/* errors will return when field validation fails  */}
              {errors.name_arabic && <p className={styles.error_title}>This field is required</p>}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                {t('dNewSubscription:english_name')}
              </Typography>
              <input
                {...register('name_english', { required: true })}
                className={styles.input}
                placeholder={t('dNewSubscription:subscription_name_in_english')}
              />
              {/* errors will return when field validation fails  */}
              {errors.name_english && <p className={styles.error_title}>This field is required</p>}
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                {t('dNewSubscription:subscription_photo')}
              </Typography>
              {/* <FCImageUploader files={files} setFiles={setFiles} /> */}
              <ImageDialog files={files} setFiles={setFiles} btnContent={<FCImageUploader />} />

              {files && (
                <Box
                  sx={{
                    borderRadius: '5px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    margin: '10px 0',
                  }}
                >
                  <Image
                    src={files}
                    alt=""
                    width={150}
                    height={150}
                    onLoad={() => {
                      URL.revokeObjectURL(files);
                    }}
                  />
                </Box>
              )}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                {t('dNewSubscription:The_duration_of_the_subscription_start_after_purchase')}
              </Typography>
              <input
                {...register('duration_number', { required: true })}
                className={styles.input}
                placeholder={t('dNewSubscription:enter_the_number_of_days')}
              />
              {/* errors will return when field validation fails  */}
              {errors.duration_number && (
                <p className={styles.error_title}>This field is required</p>
              )}
            </Box>
            <Stack
              direction={{ sm: 'row', md: 'row', xs: 'column' }}
              className={styles.button_wrapper}
            >
              <Box className={styles.button_left_wrapper}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={styles.save_button}
                >
                  {/* Save */}
                  {t('dNewSubscription:save')}
                </Button>
                <Button variant="outlined" color="primary" className={styles.cancellation_button}>
                  {/* Cancellation */}
                  {t('dNewSubscription:cancellation')}
                </Button>
              </Box>
              <Box className={styles.button_right_wrapper}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.next_button}
                  onClick={() => handleClick(1)}
                >
                  {/* Next */}
                  {t('dNewSubscription:next')}
                  <ArrowForwardIosIcon sx={{ height: '16px' }} />
                </Button>
              </Box>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default StepOne;
