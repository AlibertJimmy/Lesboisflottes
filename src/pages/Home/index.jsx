import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HomeIllustration from '../../assets/pic1.png'

import Sidebar from '../../components/Sidebar/sidebar'



const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px; 
`

const ContentWrapper = styled.div`
  margin-left: 20px;
`

const PictureContainer = styled.img`
  border-radius: 15px;
  max-width: 100%;
  
`

function Home() {
    return (
        
          <HomeWrapper>
              <Sidebar />
              <ContentWrapper>
                <PictureContainer src={HomeIllustration} alt="Home Pic"/>
              </ContentWrapper>
          </HomeWrapper>
      
    )
  }
  
  export default Home
  