import styled,{ css } from 'styled-components'
import colors from './colors'
import { Link } from 'react-router-dom'

// Import Constante
import { borderWidth } from './constantes'
import { screenWidthMobile } from './constantes'

export const PageWrapper = styled.div`
  margin-top: 150px;
`

const commonWriting = css`
  font-family: "Bradley Hand", cursive;
  font-style: italic;
`;

const commonLink = css`
    color: ${colors.link} ;
    text-decoration: none;

    &:hover {
        color: ${colors.linkHover};
    }
`


export const StyledLinkHeader = styled(Link)`
    ${commonWriting};
    ${commonLink}
`

export const StyledLinkSidebar = styled(Link)`
    ${commonWriting};
    ${commonLink};
    font-size: 20px;    

    margin-bottom: 10px;
`

export const StyledWelcome = styled.h1`

    ${commonWriting};
    font-size: 40px;

    color: ${colors.title} ;

    text-align: center;
`

export const StyledH1 = styled.h1`

    ${commonWriting};
    font-size: 30px;

    text-align: left;
    padding-left: 20px;
`

export const StyledH2 = styled.h2`
    ${commonWriting};    
    font-size: 25px;

    color: ${colors.title} ;

    text-align:center;

    @media (max-width: ${screenWidthMobile}px){
        text-align:center;
      }  
`


export const StyledH3 = styled.h3`
    ${commonWriting};
    font-size: 25px;

    color: ${colors.title} ;
`


export const StyledP = styled.p`
    font-size: 15px;
    font-family: Candassa;
    margin: 5px;

    @media (max-width: ${screenWidthMobile}px){
        
        padding-left:10px;
      }
`

export const StyledContainer = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`