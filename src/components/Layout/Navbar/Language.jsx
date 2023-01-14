/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import LanguageIcon from '@mui/icons-material/Language';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import * as Cookies from '../../../hooks/cookies';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': { padding: '4px 0' },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const Language = () => {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [language, setLanguage] = React.useState('en');

  const handleChange = (event) => {
    Cookies.setLanguage(event);
    setLanguage(event);

    router.replace({ pathname: router.asPath }, { pathname: router.asPath }, { locale: event });
  };

  React.useEffect(() => {
    const storedLocale = Cookies.getLanguage();
    if (storedLocale) {
      setLanguage(storedLocale);
    }

    console.log(storedLocale, 'storedLocale');
  }, [language]);

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<LanguageIcon />}
        sx={{
          padding: '10.5333px 15.8px',
          border: ' 1.31667px solid #374151',
          filter: 'drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))',
          borderRadius: ' 7.9px',
          fontFamily: 'IBM Plex Sans Arabic',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '120%',
          textAlign: 'center',
          color: ' #374151',
        }}
      >
        {t('navbar:language')}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleChange('en')} disableRipple>
          <Link href={router.asPath} locale="en" passHref style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontFamily: 'IBM Plex Sans Arabic', color: '#000' }}
            >
              {t('navbar:english')}
            </Typography>
          </Link>
        </MenuItem>

        <MenuItem onClick={() => handleChange('ar')} disableRipple>
          <Link href={router.asPath} locale="ar" passHref style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontFamily: 'IBM Plex Sans Arabic', color: '#000' }}
            >
              {t('navbar:arabic')}
            </Typography>
          </Link>
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default Language;
