// Import React Libraries
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Components
import HousingPresentationParagraph from '../../components/Housing/HousingPresentationParagraph';
import HousingEquipmentList from '../../components/Housing/HousingEquipment';
import HousingGallery from '../../components/Housing/Housing_Gallery';

// Import Data
import { housingPageContent } from '../../datas/pageContent/housingPageContent';
import { iconsListDataGeneral } from '../../datas/housingEquipmentIconGeneral';
import { iconsListDataIndoor } from '../../datas/housingEquipmentIconIndoor';
import { iconsListDataOutdoor } from '../../datas/housingEquipmentIconOutdoor';

// Import TopIllustration
import housingTopIllustration from '../../assets/topIllustrations/HousingTopIllustration.jpg';

// Import Style
import {
  HousingPageWarper,
  HousingPageContainer,
  HousingPresentationContainer
} from '../../utils/style/js/Housing_Style/HousingPage_Style';
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import TopIllustration from '../../components/TopIllustration/TopIllustration';
import HousingEquipmentIcon from '../../components/Housing/HousingEquipmentIcon';

function Housing () {
  const { t } = useTranslation();
  console.log('housingPageContent.presentation1 : ', housingPageContent.presentation1);

  return (
    <>
    <Helmet>
        <title>{t(`${housingPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${housingPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>
      <TopIllustration image={housingTopIllustration} title={'Housing'}/>
      <PageWrapper>
        <HousingPageWarper id='housingPageWrapper'>
          <HousingPageContainer>
            <HousingPresentationContainer>
              <HousingPresentationParagraph paragraph={housingPageContent.presentation1} paragraphTypoStyle={housingPageContent.presentationTypoStyle1}/>
              <HousingPresentationParagraph paragraph={housingPageContent.presentation2} paragraphTypoStyle={housingPageContent.presentationTypoStyle2}/>
            </HousingPresentationContainer>
            <HousingEquipmentIcon iconsList={iconsListDataGeneral}/>
            <HousingPresentationContainer>
              <HousingPresentationParagraph paragraph={housingPageContent.presentation3} paragraphTypoStyle={housingPageContent.presentationTypoStyle3}/>
              <HousingPresentationParagraph paragraph={housingPageContent.presentation4} paragraphTypoStyle={housingPageContent.presentationTypoStyle4}/>
            </HousingPresentationContainer>
            <HousingEquipmentIcon iconsList={iconsListDataIndoor}/>
            <HousingEquipmentList/>
            <HousingEquipmentIcon iconsList={iconsListDataOutdoor}/>
          </HousingPageContainer>
          <HousingGallery/>
        </HousingPageWarper>
      </PageWrapper>
    </>
  );
}

export default Housing;
