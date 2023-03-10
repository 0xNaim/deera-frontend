/* eslint-disable comma-dangle */
import DoneIcon from '@mui/icons-material/Done';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '@pages/settings/settings-layout';
import Navbar from '@components/Layout/Navbar/Navbar';
import SettingsHead from '../head';

import styles from './dislike-list.module.scss';

const initialIngredients = [
  'Chicken',
  'Crustaceans',
  'Meat',
  'Fish',
  'Spicy',
  'Habash',
  'Nuts',
  'Beans',
  'Peanuts',
  'Soya',
  'Milk products',
  'Gluten',
  'Psyllium cortex',
];

const DislikeList = () => {
  const { t } = useTranslation();
  const [ingredients] = useState(initialIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Handle select ingredients
  const handleSelectIngredient = (ingredient) => {
    // Find ingredient if already exist or not
    const findIngredient = selectedIngredients.find(
      (selectedIngredient) => selectedIngredient === ingredient
    );

    if (!findIngredient) {
      // If ingredient not exist then push ingredient in selectedIngredients list
      setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    } else {
      // If ingredient already exist then remove the ingredient
      const filteredIngredients = selectedIngredients.filter(
        (selectedIngredient) => selectedIngredient !== ingredient
      );
      setSelectedIngredients(filteredIngredients);
    }
  };

  // Get ingredients
  const getIngredient = (value) => {
    // Find ingredient based on selected ingredient
    const ingredient = selectedIngredients.find(
      (selectedIngredient) => selectedIngredient === value
    );
    return ingredient;
  };

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading={t('ProhibitedIngredients:Prohibited_ingredients')} />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.content}>
              <Box className={styles.description}>
                <Typography color="secondary">{t('ProhibitedIngredients:title')}</Typography>
              </Box>

              <Box className={styles.ingredients__wrapper}>
                {ingredients.map((ingredient) => (
                  <Chip
                    className={
                      getIngredient(ingredient) === ingredient
                        ? `${styles.ingredient} ${styles['active-ingredient']}`
                        : `${styles.ingredient}`
                    }
                    key={ingredient}
                    onClick={() => handleSelectIngredient(ingredient)}
                    label={ingredient}
                    icon={getIngredient(ingredient) === ingredient && <DoneIcon color="primary" />}
                    variant="outlined"
                  />
                ))}
              </Box>

              <Box className={styles.button__group}>
                <Link href="/settings/add-new-dislike-item" style={{ textDecoration: 'none' }}>
                  <Button
                    className={styles['other_gradient--btn']}
                    color="secondary"
                    variant="outlined"
                    fullWidth
                  >
                    {t('ProhibitedIngredients:Other_Ingredients')}
                  </Button>
                </Link>

                <Button className={styles.submit__btn} variant="contained" fullWidth>
                  {t('ProhibitedIngredients:submit')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </SettingsLayout>
    </>
  );
};

export default DislikeList;
