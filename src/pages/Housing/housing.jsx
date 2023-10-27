import styled from 'styled-components'


// Import Components
import HousingPresentation from '../../components/Housing/Housing';
import EquipmentList from '../../components/Housing/Equipment';

const HousingStyled = styled.div`
  font-family: Avantgarde;
`

function Housing() {



  return (
      <HousingStyled>
        <HousingPresentation/>
        <EquipmentList/>
      </HousingStyled>
      
  )
}

export default Housing
