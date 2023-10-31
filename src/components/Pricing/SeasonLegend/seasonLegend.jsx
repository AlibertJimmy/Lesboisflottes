import { useTranslation } from "react-i18next";

import styled from 'styled-components'
import colors from '../../../utils/style/jsx/colors'



const SeasonLegendWrapper = styled.div`
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
`

const LegendTable = styled.table`
    border-radius: 15px;
    padding: 10px;
    border-spacing: 5px 10px;
`
const LegendTDCell = styled.td`
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
`

function SeasonLegend() {

    const { t } = useTranslation();

  return (
      <SeasonLegendWrapper>
        <div>
            <LegendTable>
                <tr>
                    <LegendTDCell style={{backgroundColor:colors.lowSeason , width:'40px'}}></LegendTDCell>
                    <LegendTDCell>{t("lowSeason")}</LegendTDCell>
                </tr>
                <tr>
                    <LegendTDCell style={{backgroundColor:colors.mediumSeason , width:'40px'}}></LegendTDCell>
                    <LegendTDCell>{t("mediumSeason")}</LegendTDCell>
                </tr>
                <tr>
                    <LegendTDCell style={{backgroundColor:colors.highSeason , width:'40px'}}></LegendTDCell>
                    <LegendTDCell>{t("highSeason")}</LegendTDCell>
                </tr>
            </LegendTable>
        </div>
      </SeasonLegendWrapper>
  )
}

export default SeasonLegend
