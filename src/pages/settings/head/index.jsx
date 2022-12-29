import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Container, Divider, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './settings-head.module.scss';

const SettingsHead = ({ heading }) => {
  // Router
  const router = useRouter();

  // Handle back to previous page
  const handleGoBack = () => router.back();

  return (
    <>
      <Container>
        <Box className={styles.head__wrapper}>
          <Box onClick={handleGoBack} className={styles.go__back}>
            <ArrowBackIosIcon className={styles['go__back--icon']} />
            Back
          </Box>

          <Typography className={styles.heading} variant="h5" gutterBottom>
            {heading}
          </Typography>
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default SettingsHead;
