// Import React Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

// Import Proptypes
import { PhotosPropTypes } from '../../datas/photos';

const GallerySample = ({ photos }) => {
  const navigate = useNavigate();

  const redirectToGallery = (event) => {
    navigate('/Gallery');
  };

  return (
    <Gallery photos={photos} onClick={redirectToGallery} targetRowHeight={200} margin={5}/>
  );
};

GallerySample.propTypes = PhotosPropTypes;

export default GallerySample;
