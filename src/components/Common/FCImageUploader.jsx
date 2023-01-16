/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import React from 'react';
import * as Cookies from '../../hooks/cookies';

const FCImageUploader = () => (
  <section className="image_container">
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CameraAltIcon style={{ color: '#684cf9' }} />
        <p
          style={{
            fontFamily: 'IBM Plex Sans Arabic',
            fontWeight: 500,
            fontSize: '14px',
            marginTop: '10px',
            color: '#6B7280',
          }}
        >
          {Cookies.getLanguage() === 'ar'
            ? 'انقر هنا لتحميل صورة جديدة'
            : 'Click here to upload a new image'}
        </p>
      </div>
    </div>
  </section>
);
export default FCImageUploader;
