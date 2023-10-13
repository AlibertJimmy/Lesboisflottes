import styled from 'styled-components'
import colors from '../../utils/style/colors'
import HomeIllustration from '../../assets/pic1.png'



const PictureContainer = styled.img`
  border-radius: 15px;
  max-width: 100%;
  
`

function Home() {
    return (
        
          <div>
                <PictureContainer src={HomeIllustration} alt="Home Pic"/>
          </div>
      
    )
  }
  
  export default Home
  