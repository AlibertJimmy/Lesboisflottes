// Import React Libraries
import { useTranslation } from "react-i18next";

// Import Style
import { StyledContainer } from "../../utils/style/jsx/titles&text";
import { StyledH1 } from '../../utils/style/jsx/titles&text';
import { StyledP } from "../../utils/style/jsx/titles&text";



function HousingPresentation() {

    const { t } = useTranslation();

  return (
      <StyledContainer>
        <StyledH1>{t("Housing")}</StyledH1>
        <StyledP>{t("PresentationHousing1")}</StyledP>
        <StyledP>{t("PresentationHousing2")}</StyledP>
        <StyledP>{t("PresentationHousing3")}</StyledP>
        <StyledP>{t("PresentationHousing4")}</StyledP>
      </StyledContainer>
  )
}

export default HousingPresentation
