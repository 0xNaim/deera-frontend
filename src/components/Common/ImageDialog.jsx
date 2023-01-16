/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
import { Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import * as Cookies from '../../hooks/cookies';
import imageList from './data';

const ImageDialog = ({ btnContent, files, setFiles }) => {
  const [images] = React.useState(imageList || []);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [imageFiles, setImageFiles] = React.useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      setImageFiles(
        acceptedFiles.map((file) => Object.assign(file, { preview: URL.createObjectURL(file) }))
      );
    },
  });

  React.useEffect(() => () => imageFiles.forEach((file) => URL.revokeObjectURL(file.preview)), []);

  return (
    <>
      <Box onClick={handleClickOpen}>{btnContent}</Box>

      <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
        <DialogContent sx={{ minHeight: '500px' }}>
          <Box sx={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" color="inherit">
              {Cookies.getLanguage() === 'ar' ? 'مكتبة الوسائط' : 'Media Library'}
            </Typography>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
                {Cookies.getLanguage() === 'ar' ? 'انقر هنا للتحميل' : 'Click Here to Upload'}
              </Button>
            </div>
          </Box>
          <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap', gap: '10px' }}>
            {imageFiles.map((file) => (
              <Box
                key={file.name}
                style={{
                  borderRadius: '5px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: files === file.preview ? '3px solid #684cf9' : null,
                }}
                onClick={() => setFiles(file.preview)}
              >
                <Image
                  src={file.preview}
                  alt=""
                  width={150}
                  height={150}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </Box>
            ))}
            {images?.map((image) => (
              <Box
                key={image.id}
                sx={{
                  borderRadius: '5px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: files === image?.image_url ? '3px solid #684cf9' : null,
                }}
                onClick={() => setFiles(image?.image_url)}
              >
                <Image src={image?.image_url} alt="" width={150} height={150} />
              </Box>
            ))}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ImageDialog;
