// Import React Libraries
import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Style
import {
  PricingLegendWrapper,
  PricingLegendTable,
  LegendTDCellColor,
  LegendTDCellText,
  LegendColorDiv
} from '../../../utils/style/js/Pricing_Style/PricingLegend_Style';
import { StyledP } from '../../../utils/style/js/Font_Style';

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
            <LegendTDCellColor><LegendColorDiv style={{ backgroundColor: colors[season.seasonType] }}/></LegendTDCellColor>
            <LegendTDCellText><StyledP>{t(season.text)}</StyledP></LegendTDCellText>
            <LegendTDCellText><StyledP>{`${season.price} €`}</StyledP></LegendTDCellText>
          </tr>
        ))}
      </PricingLegendTable>
    </PricingLegendWrapper>
  );
}

export default SeasonLegend;
