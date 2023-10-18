import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useTranslation } from "react-i18next";

import { LanguageMenu } from '../LanguageMenu/languageMenu'

const HeaderWrapper = styled.div`
  text-align: center;
  border-radius: 15px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
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

const StyledMenu = styled.div`
  margin-left: 0px;
`


function Header() {

  const { t } = useTranslation();

  return (
      <HeaderWrapper>
        <div>
          <Link to="/">
            <StyledTitle>{t("mainTitle")}</StyledTitle>
            <StyledSubtitle>{t("subtitle1")}</StyledSubtitle>
            <StyledSubtitle>{t("subtitle2")}</StyledSubtitle>
          </Link>
        </div>
        <StyledMenu><LanguageMenu/></StyledMenu>
      </HeaderWrapper>
  )
}

export default Header
