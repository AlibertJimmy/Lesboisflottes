// Import Components
import HousingPresentation from '../../components/Housing/Housing';
import EquipmentList from '../../components/Housing/Equipment';

// Import Style
import { PageWrapper } from '../../utils/style/jsx/titles&text';

function Housing() {



  return (
      <PageWrapper>
        <HousingPresentation/>
        <EquipmentList/>
      </PageWrapper>
      
  )
}

export default Housing
