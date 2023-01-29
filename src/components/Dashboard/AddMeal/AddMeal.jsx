/* eslint-disable react/jsx-wrap-multilines */
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FCImageUploader from '@components/Common/FCImageUploader';
import ImageDialog from '@components/Common/ImageDialog';
import SelectBundle from '@components/Dashboard/common/SelectBundle/SelectBundle';
import { subscriptionData } from '@components/Dashboard/fakedata';
import styles from './AddMeal.module.scss';

const AddMeal = () => {
  const { t } = useTranslation();
  const [selectBundle, setSelectBundle] = React.useState(subscriptionData && subscriptionData[0]);
  const [files, setFiles] = React.useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { category: 'meal1' } });
  const onSubmit = () => {};

  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container>
          <Grid item md={8} sm={12} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                {t('dMeals:Add_a_picture_of_the_meal')}
              </Typography>
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

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {/* The name of the meal in Arabic */}
                  {t('dMeals:The_name_of_the_meal_in_Arabic')}
                </Typography>
                <input
                  {...register('name_arabic', { required: true })}
                  className={styles.input}
                  placeholder={t('dMeals:The_name_of_the_meal')}
                />
                {/* errors will return when field validation fails  */}
                {errors.name_arabic && <p className={styles.error_title}>This field is required</p>}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {t('dMeals:The_name_of_the_meal_in_English')}
                </Typography>
                <input
                  {...register('name_english', { required: true })}
                  className={styles.input}
                  placeholder={t('dMeals:The_name_of_the_meal')}
                />
                {/* errors will return when field validation fails  */}
                {errors.name_english && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {t('dMeals:Choose_a_category_name')}
                </Typography>
                {/* <input
                  {...register('name_', { required: true })}
                  className={styles.input}
                  placeholder="The name of the meal"
                /> */}
                <select {...register('category')} className={styles.select_box}>
                  <option value="meal1" className={styles.single_select}>
                    {t('dMeals:Meal_one')}
                  </option>
                  <option value="meal2" className={styles.single_select}>
                    Meal two
                  </option>
                  <option value="meal3" className={styles.single_select}>
                    Meal three
                  </option>
                  <option value="meal4" className={styles.single_select}>
                    Meal four
                  </option>
                </select>

                {/* errors will return when field validation fails  */}
                {errors.category && <p className={styles.error_title}>This field is required</p>}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {t('dMeals:Mention_how_many_calories_the_meal_contains')}
                </Typography>
                <input
                  {...register('calories_number', { required: true })}
                  className={styles.input}
                  placeholder={t('dMeals:The_number_of_calories')}
                />
                {/* errors will return when field validation fails  */}
                {errors.calories_number && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {t('dMeals:Select_bundle')}
                </Typography>
                <SelectBundle
                  data={subscriptionData}
                  value={selectBundle}
                  setValue={setSelectBundle}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  {t('dMeals:Total_weight_in_grams_for_the_Nutrition_Facts')}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl
                      variant="outlined"
                      sx={{
                        width: '100%',
                        height: '48px',
                        position: 'relative',
                        '&::after': {
                          position: 'absolute',
                          content: '""',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          background: '#F3F4F6',
                          width: '59px',
                          zIndex: 1,
                        },
                      }}
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <Typography
                              variant="subtitle1"
                              color="inherit"
                              sx={{ fontSize: '14px', fontFamily: 'IBM Plex Sans Arabic' }}
                            >
                              {t('dMeals:Fats')}
                            </Typography>
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('fats', { required: true })}
                        placeholder={t('dMeals:Total_weight')}
                        sx={{ width: '100%', height: '48px', zIndex: 9 }}
                      />
                    </FormControl>
                    {errors.fats && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl
                      variant="outlined"
                      sx={{
                        width: '100%',
                        height: '48px',
                        position: 'relative',
                        '&::after': {
                          position: 'absolute',
                          content: '""',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          background: '#F3F4F6',
                          width: '59px',
                          zIndex: 1,
                        },
                      }}
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <Typography
                              variant="subtitle1"
                              color="inherit"
                              sx={{ fontSize: '14px', fontFamily: 'IBM Plex Sans Arabic' }}
                            >
                              {t('dMeals:Carp')}
                            </Typography>
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('carp', { required: true })}
                        placeholder={t('dMeals:Total_weight')}
                        sx={{ width: '100%', height: '48px', zIndex: 9 }}
                      />
                    </FormControl>
                    {errors.carp && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl
                      variant="outlined"
                      sx={{
                        width: '100%',
                        height: '48px',
                        position: 'relative',
                        '&::after': {
                          position: 'absolute',
                          content: '""',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          background: '#F3F4F6',
                          width: '70px',
                          zIndex: 1,
                        },
                      }}
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <Typography
                              variant="subtitle1"
                              color="inherit"
                              sx={{ fontSize: '14px', fontFamily: 'IBM Plex Sans Arabic' }}
                            >
                              {t('dMeals:Protein')}
                            </Typography>
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('protein', { required: true })}
                        placeholder={t('dMeals:Total_weight')}
                        sx={{ width: '100%', height: '48px', zIndex: 9 }}
                      />
                    </FormControl>
                    {errors.fats && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl
                      variant="outlined"
                      sx={{
                        width: '100%',
                        height: '48px',
                        position: 'relative',
                        '&::after': {
                          position: 'absolute',
                          content: '""',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          background: '#F3F4F6',
                          width: '70px',
                          zIndex: 1,
                        },
                      }}
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">
                            <Typography
                              variant="subtitle1"
                              color="inherit"
                              sx={{ fontSize: '14px', fontFamily: 'IBM Plex Sans Arabic' }}
                            >
                              {t('dMeals:Sugars')}
                            </Typography>
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('sugars', { required: true })}
                        placeholder={t('dMeals:Total_weight')}
                        sx={{ width: '100%', height: '48px', zIndex: 9 }}
                      />
                    </FormControl>
                    {errors.fats && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                </Grid>
              </Box>

              <Grid container spacing={1} sx={{ mt: 5 }} className={styles.button_wrapper}>
                <Grid item md={6} sm={6} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.save_button}
                  >
                    {t('dMeals:save')}
                  </Button>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Button variant="outlined" color="primary" className={styles.cancellation_button}>
                    {t('dMeals:cancellation')}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddMeal;
