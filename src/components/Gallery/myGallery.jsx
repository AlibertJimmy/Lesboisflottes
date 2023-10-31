import React from 'react';
import { useNavigate } from 'react-router-dom';
import Gallery from 'react-photo-gallery';


const MyGallery = ({ photos }) => {
  const navigate = useNavigate();

  const redirectToGallery = (event) => {
    navigate(`/Gallery`);
    
  };

  return (
    <Gallery photos={photos} onClick={redirectToGallery} targetRowHeight={200} margin={5}/>
  );
};

export default MyGallery;
