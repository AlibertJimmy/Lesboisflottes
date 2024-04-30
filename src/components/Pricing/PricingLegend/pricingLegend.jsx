// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import {
  PricingLegendWrapper,
  PricingLegendTable,
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
    <PricingLegendWrapper id='pricingLegendWrapper'>
      <PricingLegendTable id='pricingLegendTable'>
        {pricingBySeasonList.map((season) => (
          <tr key={season} id={`pricingLegendTR-${season.seasonType}`}>
            <LegendTDCellColor style={{ backgroundColor: colors[season.seasonType] }}></LegendTDCellColor>
            <LegendTDCellText>{t(season.text)}</LegendTDCellText>
            <LegendTDCellText>{`${season.price} €`}</LegendTDCellText>
          </tr>
        ))}
      </PricingLegendTable>
    </PricingLegendWrapper>
  );
}

export default SeasonLegend;
