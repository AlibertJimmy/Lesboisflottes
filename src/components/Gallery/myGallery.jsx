// Import React Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from 'react-photo-gallery';

// Import Functions
import { scrollToTop } from '../../utils/functions/functions';

// Import Proptypes
import { PhotosPropTypes } from '../../datas/photos';

const GallerySample = ({ photos }) => {
  const navigate = useNavigate();

  const redirectToGallery = (event) => {
    navigate('/Gallery');
    scrollToTop();
  };

  return (
    <Gallery photos={photos} onClick={redirectToGallery} targetRowHeight={200} margin={5}/>
  );
};

GallerySample.propTypes = PhotosPropTypes;

export default GallerySample;
