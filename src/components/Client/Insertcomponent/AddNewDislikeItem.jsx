/* eslint-disable react/jsx-one-expression-per-line */
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../../../pages/settings/settings-layout';
import Navbar from '../../Layout/Navbar/Navbar';
import SettingsHead from '../head';

import styles from './add-new-dislike-item.module.scss';

const initialComponent = { item: '' };

const AddNewDislikeItem = () => {
  const { t } = useTranslation();
  // React hook form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { items: [initialComponent] } });

  const { fields, append } = useFieldArray({
    name: 'items',
    control,
  });

  // Handle insert item
  const handleInsertItem = () => append(initialComponent);

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
        <SettingsHead heading={t('ProhibitedIngredients:Insert_new_component')} />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box component="form" className={styles.content}>
              {fields.map((field, index) => (
                <Box key={field.id}>
                  <TextField
                    {...register(`items.${index}.item`, { required: 'Component is required' })}
                    className={styles.content__input}
                    label={t('ProhibitedIngredients:components_name')}
                    variant="standard"
                    error={!!errors?.items?.[index]?.item?.message}
                    fullWidth
                    sx={{ py: 1 }}
                  />
                  {errors?.items?.[index]?.item?.message && (
                    <Typography className={styles.helper__text} variant="body2">
                      {errors?.items?.[index]?.item?.message}
                    </Typography>
                  )}
                </Box>
              ))}

              <Button
                className={styles['add__item--btn']}
                onClick={handleInsertItem}
                color="secondary"
                disableRipple
              >
                + {t('ProhibitedIngredients:add_new')}
              </Button>

              <Button
                onClick={handleSubmit(handleFormSubmit)}
                className={styles['submit--btn']}
                variant="contained"
                fullWidth
              >
                {t('ProhibitedIngredients:submit')}
              </Button>
            </Box>
          </Box>
        </Container>
      </SettingsLayout>
    </>
  );
};

export default AddNewDislikeItem;
