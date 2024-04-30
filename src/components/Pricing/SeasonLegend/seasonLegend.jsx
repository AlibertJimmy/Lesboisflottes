// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import {
  SeasonLegendWrapper,
  LegendTable,
  LegendTDCellColor,
  LegendTDCellText
} from '../../../utils/style/js/Pricing_Style/PricingLegend_Style';

// Import Data
import { pricingBySeasonList } from '../../../datas/pricing';

// Import Colors
import colors from '../../../utils/colors/colors';

function SeasonLegend () {
  const { t } = useTranslation();

  return (
    <SeasonLegendWrapper id='seasonPriceLegendWrapper'>
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
