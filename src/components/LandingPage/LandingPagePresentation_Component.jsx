// Import React Libraries
import React from 'react';

// Import Datas
import { homePageContent } from '../../datas/pageContent/homePageContent';

// Import Style
import { HomePresentationContainer } from '../../utils/style/js/Home_Style/HomePresentation_Style';
import HousingPresentationParagraph from '../Housing/HousingPresentationParagraph';

function LandingPagePresentationComponent () {
  return (
    <HomePresentationContainer>
      <HousingPresentationParagraph paragraph={homePageContent.presentation1} paragraphTypoStyle={homePageContent.presentationTypoStyle1}/>
      <HousingPresentationParagraph paragraph={homePageContent.presentation2} paragraphTypoStyle={homePageContent.presentationTypoStyle2}/>
      <HousingPresentationParagraph paragraph={homePageContent.presentation3} paragraphTypoStyle={homePageContent.presentationTypoStyle3}/>
      <HousingPresentationParagraph paragraph={homePageContent.presentation4} paragraphTypoStyle={homePageContent.presentationTypoStyle4}/>
      <HousingPresentationParagraph paragraph={homePageContent.presentation5} paragraphTypoStyle={homePageContent.presentationTypoStyle5}/>
    </HomePresentationContainer>
  );
}

export default LandingPagePresentationComponent;
