import GallerySample from '../../components/Gallery/myGallery';
import CommentScrollingBanner from '../../components/Comment/commentScrollingBanner';

import { photosSample } from "../../assets/photos"

import styled from 'styled-components'
import { StyledWelcome } from '../../utils/style/jsx/titles&text';

import { borderWidth } from '../../utils/style/jsx/border';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 0 550px;

  margin: 0 20px;
  height: 85vh;

  border: ${borderWidth}px solid black;
  border-radius: 15px;

`

const WelcomeAndComments = styled.div`
  justify-content: center;
  flex: 1;
`

function Home() {
    return (
          <HomeWrapper>
            
              <WelcomeAndComments>
                <StyledWelcome>WELCOME</StyledWelcome>
                <CommentScrollingBanner/>
              </WelcomeAndComments>
              
            
            <GalleryContainer>
              <GallerySample photos={photosSample}/>
            </GalleryContainer>
          </HomeWrapper>
    )
  }
  
  export default Home
  