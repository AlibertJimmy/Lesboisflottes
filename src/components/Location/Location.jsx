// Import React Libraries
import { useTranslation } from "react-i18next";

// Import Style
import { StyledContainer } from "../../utils/style/jsx/titles&text";
import { StyledH1 } from '../../utils/style/jsx/titles&text';
import { StyledP } from "../../utils/style/jsx/titles&text";


function LocationDisplay() {

    const { t } = useTranslation();

  return (
      <StyledContainer>
        <StyledH1>{t("Location")}</StyledH1>
          <StyledP>{t("PresentationSituation1")}</StyledP>
          <StyledP>{t("PresentationSituation2")}</StyledP>
          <StyledP>{t("PresentationSituation3")}</StyledP>
      </StyledContainer>
  )
}

export default LocationDisplay
