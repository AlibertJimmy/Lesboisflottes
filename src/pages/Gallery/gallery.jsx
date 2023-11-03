// Import React Libraries
import { useTranslation } from "react-i18next";
import Gallery from "react-photo-gallery"
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

// Import Assets
import { photos } from '../../assets/photos'

// Import Style
import { PageWrapper } from "../../utils/style/jsx/titles&text";
import { StyledContainer } from "../../utils/style/jsx/titles&text";
import { StyledH1 } from "../../utils/style/jsx/titles&text";


function Galleryx() {

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
    <PageWrapper>
      <StyledContainer>
        <StyledH1>{t("Gallery")}</StyledH1>
      </StyledContainer>
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={150} margin={5}/>
      <ModalGateway>
        {viewerIsOpen ? (
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
        ) : null}
      </ModalGateway>
    </PageWrapper>
  );
}



export default Galleryx
