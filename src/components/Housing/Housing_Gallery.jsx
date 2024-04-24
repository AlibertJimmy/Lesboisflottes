// Import React Libraries
import React, { useState, useCallback } from 'react';

// Import Photos
import { housingPhotos } from '../../datas/housing_photos';
import {
  HousingGridWrapper, HousingGridContainer
} from '../../utils/style/js/Housing_Style/HousingGallery_Style';

import {
  GridOne, GridTwo, GridThree, GridFour,
  GridFive, GridSix, GridSeven,
  GridHeight, GridNine, // GridTen,
  GalleryImg
} from '../../utils/style/js/Gallery_Style';

import Carousel, { Modal, ModalGateway } from 'react-images';

// Import Style

function HousingGallery () {
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
    <HousingGridWrapper id='housingGridWrapper'>
      <HousingGridContainer id='housingGridContainer'>
        <GridOne id='gridOne' onClick={() => openLightbox({ index: 0 })}>
          <GalleryImg src={housingPhotos[0].src} alt="img1" />
        </GridOne>
        <GridTwo id='gridTwo' onClick={() => openLightbox({ index: 1 })}>
          <GalleryImg src={housingPhotos[1].src} alt="img1" />
        </GridTwo>
        <GridThree id='gridThree' onClick={() => openLightbox({ index: 2 })}>
          <GalleryImg src={housingPhotos[2].src} alt="img1" />
        </GridThree>
        <GridFour id='gridFour' onClick={() => openLightbox({ index: 3 })}>
          <GalleryImg src={housingPhotos[3].src} alt="img1" />
        </GridFour>
        <GridFive id='gridFive' onClick={() => openLightbox({ index: 4 })}>
          <GalleryImg src={housingPhotos[4].src} alt="img4" />
        </GridFive>
        <GridSix id='gridSix' onClick={() => openLightbox({ index: 5 })}>
          <GalleryImg src={housingPhotos[5].src} alt="img5" />
        </GridSix>
        <GridSeven id='gridSeven' onClick={() => openLightbox({ index: 6 })}>
          <GalleryImg src={housingPhotos[6].src} alt="img5" />
        </GridSeven>
        <GridHeight id='gridHeight' onClick={() => openLightbox({ index: 7 })}>
          <GalleryImg src={housingPhotos[7].src} alt="img5" />
        </GridHeight>
        <GridNine id='gridNine' onClick={() => openLightbox({ index: 8 })}>
          <GalleryImg src={housingPhotos[8].src} alt="img5" />
        </GridNine>
        { /*
        <GridTen id='gridTen' onClick={() => openLightbox({ index: 6 })}>
          <GalleryImg src={housingPhotos[9].src} alt="img5" />
        </GridTen>
        */ }
      </HousingGridContainer>
      <ModalGateway>
        {viewerIsOpen
          ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={housingPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
            )
          : null}
      </ModalGateway>
  </HousingGridWrapper>
  );
}

export default HousingGallery;
