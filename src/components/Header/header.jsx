import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useTranslation } from "react-i18next";

import { LanguageMenu } from '../LanguageMenu/languageMenu'

const HeaderWrapper = styled.div`
  border-radius: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  algin-items: center;
`

const LeftDiv = styled.div`
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
  flex-grow: 1;

`

const StyledTitle = styled.h1`
  font-size: 30px;
  font-style: italic;
  margin-top: 10px;
  margin-bottom: 5px;
`

const StyledSubtitle = styled.h2`
  font-size: 20px;
  font-style: italic;
  margin: 5px;
`

function Header() {

  const { t } = useTranslation();

  return (
      <HeaderWrapper>
        <LeftDiv>
          <Link to="/">
            <StyledTitle>{t("mainTitle")}</StyledTitle>
            <StyledSubtitle>{t("subtitle1")}</StyledSubtitle>
            <StyledSubtitle>{t("subtitle2")}</StyledSubtitle>
          </Link>
        </LeftDiv>
        <div>
          <LanguageMenu/>
        </div>
      </HeaderWrapper>
  )
}

export default Header
