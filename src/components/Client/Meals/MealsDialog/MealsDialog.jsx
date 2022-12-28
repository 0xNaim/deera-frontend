import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import styles from './MealsDialog.module.scss';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': { padding: theme.spacing(2) },
  '& .MuiDialogActions-root': { padding: theme.spacing(1) },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, borderBottom: '1px solid #E5E7EB' }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const MealsDialog = ({ btnContent, data }) => {
  const [open, setOpen] = React.useState(false);

  const handleMealsDialogOpen = () => {
    setOpen(true);
  };
  const handleMealsDialogClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Box onClick={handleMealsDialogOpen}>{btnContent}</Box>
      <BootstrapDialog
        onClose={handleMealsDialogClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={styles.wrapper}
        maxWidth="xs"
        sx={{ width: '100%' }}
        fullWidth
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleMealsDialogClose}>
          <Typography variant="subtitle1" color="inherit" className={styles.title}>
            {data?.title}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent className={styles.content__wrapper}>
          <div dangerouslySetInnerHTML={{ __html: data?.details }} />
          <Button
            variant="contained"
            color="primary"
            onClick={handleMealsDialogClose}
            className={styles.subscribe__button}
          >
            subscribe now
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default MealsDialog;
