/* eslint-disable react/jsx-one-expression-per-line */
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

const MainDIalog = ({ btnContent, data }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box onClick={handleClickOpen}>{btnContent}</Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontFamily: 'IBM Plex Sans Arabic',
            fontSize: '24px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {data?.name}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Name: {data?.name}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Email: {data?.email}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            phone: {data?.phone}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Street: {data?.address?.street}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            City: {data?.address?.city}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            State: {data?.address?.state}
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '8px',
            }}
          >
            Zip: {data?.address?.zip}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MainDIalog;
