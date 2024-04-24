// Import React Libraries
import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

// Import Photos
import { housingPatioPhotos } from '../../datas/housingPatio_photos';

// Import Style
import {
  HousingPatioGridWrapper, HousingPatioGridContainer
} from '../../utils/style/js/Housing_Style/HousingPatioGallery_Style';

import {
  GridOne, GridTwo, GridThree,
  GalleryImg
} from '../../utils/style/js/Gallery_Style';

function HousingPatioGallery () {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback(({ index }) => {
    console.log('index : ', index);
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <HousingPatioGridWrapper id='housingGridWrapper'>
      <HousingPatioGridContainer id='housingGridContainer'>
        <GridOne id='gridOne' onClick={() => openLightbox({ index: 0 })}>
          <GalleryImg src={housingPatioPhotos[0].src} alt="img1" />
        </GridOne>
        <GridTwo id='gridTwo' onClick={() => openLightbox({ index: 1 })}>
          <GalleryImg src={housingPatioPhotos[1].src} alt="img1" />
        </GridTwo>
        <GridThree id='gridThree' onClick={() => openLightbox({ index: 2 })}>
          <GalleryImg src={housingPatioPhotos[2].src} alt="img1" />
        </GridThree>
      </HousingPatioGridContainer>
      <ModalGateway>
        {viewerIsOpen
          ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={housingPatioPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
            )
          : null}
      </ModalGateway>
  </HousingPatioGridWrapper>
  );
}

export default HousingPatioGallery;
