/* eslint-disable react/jsx-key */
import { Box, Container, Divider, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import StepOne from '../../components/subscription-steps/step-one';
import StepTwo from '../../components/subscription-steps/step-two';
import useMultiStepForm from '../../hooks/useMultiStepForm';
import styles from './payment.module.scss';

const Payment = () => {
  const { currentStepIndex, nextStep, backStep, isFirstStep } = useMultiStepForm([
    <StepOne />,
    <StepTwo />,
  ]);

  return (
    <Layout>
      <Container>
        <Box className={styles.content__wrapper}>
          <Typography className={styles.heading} variant="h5">
            Subscription steps
          </Typography>
          <Divider />

          <Box className={styles.steps}>
            {isFirstStep ? (
              <StepOne currentStepIndex={currentStepIndex} nextStep={nextStep} />
            ) : (
              <StepTwo
                currentStepIndex={currentStepIndex}
                nextStep={nextStep}
                backStep={backStep}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Payment;
