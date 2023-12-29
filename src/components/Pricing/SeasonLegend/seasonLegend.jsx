// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { LegendTDCellColor, LegendTDCellText, LegendTable, PageSubtitleResponsive, SeasonLegendWrapper } from '../../../utils/style/js/PricingStyle';

// Import Colors
import colors from '../../../utils/style/colors';

function SeasonLegend () {
  const { t } = useTranslation();

  return (
      <SeasonLegendWrapper>
        <PageSubtitleResponsive>{t('Legend')}</PageSubtitleResponsive>
        <div>
            <LegendTable>
                <tr>
                    <LegendTDCellColor style={{ backgroundColor: colors.lowSeason }}></LegendTDCellColor>
                    <LegendTDCellText>{t('LowSeason')}</LegendTDCellText>
                </tr>
                <tr>
                    <LegendTDCellColor style={{ backgroundColor: colors.mediumSeason }}></LegendTDCellColor>
                    <LegendTDCellText>{t('MediumSeason')}</LegendTDCellText>
                </tr>
                <tr>
                    <LegendTDCellColor style={{ backgroundColor: colors.highSeason }}></LegendTDCellColor>
                    <LegendTDCellText>{t('HighSeason')}</LegendTDCellText>
                </tr>
            </LegendTable>
        </div>
      </SeasonLegendWrapper>
  );
}

export default SeasonLegend;
