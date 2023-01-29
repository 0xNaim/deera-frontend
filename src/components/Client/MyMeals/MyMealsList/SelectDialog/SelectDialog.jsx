/* eslint-disable import/no-cycle */
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import SingleMyMealList from '../SingleMyMealList/SingleMyMealList';
import styles from './SelectDialog.module.scss';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': { padding: theme.spacing(2) },
  '& .MuiDialogActions-root': { padding: theme.spacing(1) },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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

const SelectDialog = ({ data, btnContent, handleRemoveData }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (data.length === 0) {
      setOpen(false);
    }
  }, [data]);

  return (
    <div>
      <Box onClick={handleClickOpen}>{btnContent}</Box>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className={styles.dialog_wrapper}
        maxWidth="sm"
        fullWidth
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Select Meals
        </BootstrapDialogTitle>
        <DialogContent>
          {data?.map((meals, index) => (
            <Box key={meals.id} sx={{ marginBottom: data?.length === index + 1 ? '0' : '10px' }}>
              <SingleMyMealList
                cart={meals}
                titleOff={false}
                editButton={false}
                removeButton
                handleRemoveData={handleRemoveData}
                //   handleAddData={handleAddData}
                //   selectData={selectData}
              />
            </Box>
          ))}

          <div className={styles.dialog_button}>
            <Button variant="contained" color="primary" onClick={handleClose}>
              Change
            </Button>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default SelectDialog;
