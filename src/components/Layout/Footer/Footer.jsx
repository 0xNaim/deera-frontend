/* eslint-disable object-curly-newline */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footerWrapper}>
    <Container>
      <Box className={styles.desktopFooter}>
        <Image src="/assets/logo.svg" alt="" width={150} height={40} />
        <Stack direction="row" spacing={1} className={styles.desktopNumber} alignItems="center">
          <PhoneIcon />
          <Typography variant="subtitle1" color="inherit">
            99824772
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} className={styles.desktopSocialIcon} alignItems="center">
          <Box>
            <FacebookIcon />
          </Box>
          <Box>
            <TwitterIcon />
          </Box>
          <Box>
            <LinkedInIcon />
          </Box>
          <Box>
            <InstagramIcon />
          </Box>
        </Stack>
        <Stack direction="row" spacing={1} className={styles.desktopCopyWrite} alignItems="center">
          <Typography variant="subtitle1" color="inherit">
            Powered by Dera
          </Typography>
        </Stack>
      </Box>

      <Box className={styles.mobileView}>
        <Stack
          direction="row"
          justifyContent="space-between"
          className={styles.firstRow}
          alignItems="center"
        >
          <Image src="/assets/logo.svg" alt="" width={150} height={40} />
          <Stack
            direction="row"
            spacing={1}
            className={styles.desktopSocialIcon}
            alignItems="center"
          >
            <Box>
              <FacebookIcon />
            </Box>
            <Box>
              <TwitterIcon />
            </Box>
            <Box>
              <LinkedInIcon />
            </Box>
            <Box>
              <InstagramIcon />
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          className={styles.secondRow}
          alignItems="center"
        >
          <Stack direction="row" spacing={1} className={styles.desktopNumber} alignItems="center">
            <PhoneIcon />
            <Typography variant="subtitle1" color="inherit">
              99824772
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            className={styles.desktopCopyWrite}
            alignItems="center"
          >
            <Typography variant="subtitle1" color="inherit">
              Powered by Dera
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  </div>
);

export default Footer;
