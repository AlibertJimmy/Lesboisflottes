import styled from 'styled-components'
import colors from './colors'

// Import Constante
import { borderWidth } from './constantes'
import { screenWidth } from './constantes'

export const PageWrapper = styled.div`
  margin-top: 130px;
`


export const StyledWelcome = styled.h1`
    font-size: 40px;
    font-family: "Bradley Hand",cursive;
    font-style: italic;

    text-align: center;

    color: ${colors.title} ;
`

export const StyledH1 = styled.h1`
    font-size: 30px;
    font-family: "Bradley Hand",cursive;
    font-style: italic;

    text-align: left;
    padding-left: 20px;

    color: ${colors.title} ;
`

export const StyledH2 = styled.h2`
    font-size: 25px;
    font-family: "Bradley Hand",cursive;
    font-style: italic;

    color: ${colors.title} ;

    @media (max-width: ${screenWidth}px){
        text-align:center;
      }
    
`

export const StyledH3 = styled.h2`
    font-size: 25px;
    font-family: "Bradley Hand",cursive;
    font-style: italic;

    color: ${colors.title} ;
`

export const StyledP = styled.p`
    font-size: 15px;
    font-family: Candassa;
    margin: 5px;

    @media (max-width: ${screenWidth}px){
        
        padding-left:10px;
      }
`

export const StyledContainer = styled.div`
    text-align: left;
    padding: 20px;

    border-radius: 15px;
    border: ${borderWidth}px solid black;
`
