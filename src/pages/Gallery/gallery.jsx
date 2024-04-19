// Import React Libraries
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

// Import Assets
import { photos } from '../../datas/photos';

// Import Style
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { PageTitle } from '../../utils/style/js/Font_Style';

function Galleryx () {
  const { t } = useTranslation();

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <PageWrapper id='galleryPageWrapper'>
        <PageTitle>{t('Gallery')}</PageTitle>
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={150} margin={5}/>
      <ModalGateway>
        {viewerIsOpen
          ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
            )
          : null}
      </ModalGateway>
    </PageWrapper>
  );
}

export default Galleryx;

// Carousel prop :
// showNavigationOnTouchDevice
