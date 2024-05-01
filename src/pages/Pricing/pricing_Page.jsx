// Import react libraries
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Import Component
import DayPickerInformationDisplay from '../../components/Pricing/DayPickerInformationDisplay/dayPickerInformationDisplay';
import SeasonLegend from '../../components/Pricing/PricingLegend/pricingLegend';
import PricingInformationDisplay from '../../components/Pricing/Information/pricingInformationDisplay';

// Import Datas
import { pricesPageContent } from '../../datas/pageContent/pricesPageContent';

// Import Style
import '../../utils/style/css/react-day-picker.css';
import { PageWrapper } from '../../utils/style/js/GlobalStyle';
import { SelectionInformationWrapper } from '../../utils/style/js/Pricing_Style/PricingStyle';
import { PageTitle } from '../../utils/style/js/Font_Style';
import DayPickerComponent from '../../components/Pricing/DayPicker/dayPicker';

function Pricing () {
  const { t } = useTranslation();
  const [currentLayout, setCurrentLayout] = useState(window.innerWidth >= 1300 ? 'laptop' : 'responsive');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setCurrentLayout(screenWidth >= 1300 ? 'laptop' : 'responsive');
    };

    // Initial setup
    handleResize();

    // Add event listener to update on window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <Helmet>
        <title>{t(`${pricesPageContent.pageTitle}`)}</title>
        <meta
          name="description"
          content={`${pricesPageContent.referencement.map((keyWords) => (keyWords)).join(', ')} `}
        />
      </Helmet>
      <PageWrapper id='pricingPageWrapper'>
          <PageTitle>{t('Prices')}</PageTitle>
        {currentLayout === 'laptop'
          ? <SelectionInformationWrapper id='selectionInformationWrapper'>
        <DayPickerInformationDisplay/>
        <DayPickerComponent/>
        <SeasonLegend />
      </SelectionInformationWrapper>
          : <>
      <SelectionInformationWrapper id='selectionInformationWrapper'>
        <DayPickerInformationDisplay/>

        <SeasonLegend />
      </SelectionInformationWrapper>
      <DayPickerComponent/>
      </>
        }

        <PricingInformationDisplay />

      </PageWrapper>
      </>
  );
}

export default Pricing;
