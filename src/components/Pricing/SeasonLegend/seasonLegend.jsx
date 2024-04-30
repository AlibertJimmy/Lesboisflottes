// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import { LegendTDCellColor, LegendTDCellText, LegendTable, PageSubtitleResponsive, SeasonLegendWrapper } from '../../../utils/style/js/Pricing_Style/PricingStyle';

// Import Data
import { pricingBySeasonList } from '../../../datas/pricing';

// Import Colors
import colors from '../../../utils/colors/colors';

function SeasonLegend () {
  const { t } = useTranslation();

  return (
      <SeasonLegendWrapper id='seasonPriceLegendWrapper'>
        <PageSubtitleResponsive>{t('Legend')}</PageSubtitleResponsive>
            <LegendTable>
                {pricingBySeasonList.map((season) => (
                    <tr key={season}>
                        <LegendTDCellColor style={{ backgroundColor: colors[season.seasonType] }}></LegendTDCellColor>
                        <LegendTDCellText>{t(season.text)}</LegendTDCellText>
                        <LegendTDCellText>{`${season.price} €`}</LegendTDCellText>
                    </tr>
                ))}
            </LegendTable>
      </SeasonLegendWrapper>
  );
}

export default SeasonLegend;
