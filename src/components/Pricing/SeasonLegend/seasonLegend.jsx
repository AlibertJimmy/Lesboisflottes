// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import styled from 'styled-components';
import { PageSubtitle } from '../../../utils/style/js/style';

// Import Colors
import colors from '../../../utils/style/colors';

// Import Constants
import { responsiveWidthMobile } from '../../../utils/constants';

const SeasonLegendWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    border-radius: 15px;
`;

const LegendTable = styled.table`
    border-radius: 15px;
    padding: 10px;
    border-spacing: 5px 10px;

    @media (max-width: ${responsiveWidthMobile}px){
        padding:0;
        border-spacing: 5px 5px;
    }

`;

const LegendTDCell = styled.td`
    padding: 5px;
    border-radius: 5px;
    text-align:left;
`;

const PageSubtitleResponsive = styled(PageSubtitle)`
    @media (max-width: ${responsiveWidthMobile}px){
        display:none;
    }  
`;

function SeasonLegend () {
  const { t } = useTranslation();

  return (
      <SeasonLegendWrapper>
        <PageSubtitleResponsive>{t('Legend')}</PageSubtitleResponsive>
        <div>
            <LegendTable>
                <tr>
                    <LegendTDCell style={{ backgroundColor: colors.lowSeason, width: '40px' }}></LegendTDCell>
                    <LegendTDCell>{t('LowSeason')}</LegendTDCell>
                </tr>
                <tr>
                    <LegendTDCell style={{ backgroundColor: colors.mediumSeason, width: '40px' }}></LegendTDCell>
                    <LegendTDCell>{t('MediumSeason')}</LegendTDCell>
                </tr>
                <tr>
                    <LegendTDCell style={{ backgroundColor: colors.highSeason, width: '40px' }}></LegendTDCell>
                    <LegendTDCell>{t('HighSeason')}</LegendTDCell>
                </tr>
            </LegendTable>
        </div>
      </SeasonLegendWrapper>
  );
}

export default SeasonLegend;
