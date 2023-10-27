import styled from 'styled-components'
import HomeIllustration from '../../assets/pictures/pic1.png'



const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 85vh;
`

const Picture = styled.img`
  border-radius: 15px;
  max-width: 100%;
  max-height: 100%;
`

function Home() {
    return (
        
          <div>
              <PictureContainer>
                <Picture src={HomeIllustration} alt="Home Pic"/>
              </PictureContainer>
          </div>
      
    )
  }
  
  export default Home
  