// Import React Libraries
import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

// Import Datas
import { landingPageBeachGalleryPhotos } from '../../datas/pageContent/homePageContent';

// Import Style
import {
  GridOne, GridTwo,
  GalleryImg
} from '../../utils/style/js/Gallery_Style';
import {
  LandingPageBeachGalleryGridContainer,
  LandingPageBeachGalleryGridWrapper
} from '../../utils/style/js/LandingPage_Style/LandingPageBeachGallery_Style';

function LandingPageBeachGallery () {
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
    <LandingPageBeachGalleryGridWrapper id='landingPageBeachGalleryGridWrapper'>
      <LandingPageBeachGalleryGridContainer id='landingPageBeachGalleryGridContainer'>
      <GridOne id='gridOne' onClick={() => openLightbox({ index: 0 })}>
          <GalleryImg src={landingPageBeachGalleryPhotos[0].src} alt="img1" />
        </GridOne>
        <GridTwo id='gridTwo' onClick={() => openLightbox({ index: 1 })}>
          <GalleryImg src={landingPageBeachGalleryPhotos[1].src} alt="img2" />
        </GridTwo>
      </LandingPageBeachGalleryGridContainer>
      <ModalGateway>
        {viewerIsOpen
          ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={landingPageBeachGalleryPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
            )
          : null}
      </ModalGateway>
    </LandingPageBeachGalleryGridWrapper>
  );
}

export default LandingPageBeachGallery;

/*

        */
