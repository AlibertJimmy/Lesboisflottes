import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'



export const StyledLinkHeader = styled(Link)`
    font-family: "Bradley Hand",cursive;
    font-style: italic;
    text-decoration: none;

    color: ${colors.link} ;
`

export const StyledH1 = styled.h1`
    text-align: left;
    font-size: 30px;
    font-family: "Bradley Hand",cursive;
    font-style: italic;
    text-decoration: none;

    padding-left: 20px;

    color: ${colors.title} ;
`

