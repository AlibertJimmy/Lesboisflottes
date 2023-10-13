import styled from 'styled-components'
import Gallery from "react-photo-gallery"

import { photos } from '../../assets/pictures/photos'


import '../../utils/style/galleryPhotos.css'


function Galleryx() {
  return (
            <Gallery className="galleryPhotos" photos={photos} direction={"row"} />  
  )
}

export default Galleryx
