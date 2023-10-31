import Gallery from "react-photo-gallery"
import React, { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

import { photos } from '../../assets/photos'

import { StyledH1 } from "../../utils/style/jsx/titles&text";


function Galleryx() {
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
    <div>
      <StyledH1>Gallery</StyledH1>
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
    </div>
  );
}



export default Galleryx
