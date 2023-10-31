import { useTranslation } from "react-i18next";

import { LanguageMenu } from '../LanguageMenu/languageMenu'

import styled from 'styled-components'
import { StyledLinkHeader } from '../../utils/style/jsx/links';

import { borderWidth } from "../../utils/style/jsx/border";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
`

const TitleDiv = styled.div`
  text-align: center;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
`

const LanguagePickerDiv = styled.div`
  text-align: right;

  border-radius: 15px;
  border: ${borderWidth}px solid black;
`

const StyledTitle = styled.h1`
  font-size: 30px;
  
  margin-top: 0px;
  margin-bottom: 5px;
`

const StyledSubtitle = styled.h2`
  font-size: 20px;
  
  margin: 5px;
`



function Header() {

  const { t } = useTranslation();

  return (
      <HeaderWrapper>
        <LanguagePickerDiv>
          <LanguageMenu/>
        </LanguagePickerDiv>
        <TitleDiv>
          <StyledLinkHeader to="/">
            <StyledTitle>{t("mainTitle")}</StyledTitle>
            <StyledSubtitle>{t("subtitle1")}</StyledSubtitle>
            <StyledSubtitle>{t("subtitle2")}</StyledSubtitle>
          </StyledLinkHeader>
        </TitleDiv>
      </HeaderWrapper>
  )
}

export default Header
