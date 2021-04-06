import React from 'react'
import styled from 'styled-components'

const ContenedorHeader = styled.header`
background-color:#26c6da;
color:#fff;
padding:10px;
font-weight:bold;
`
const TextoHeader = styled.h1`
    font-size:2rem;
    margin:0;
    text-align:center;
    font-family:'Slabo 27px', sans-serif
`

const Header = ({ title }) => {
    return (
        <ContenedorHeader>
            <TextoHeader>{title}</TextoHeader>
        </ContenedorHeader>
    )
}

export default Header
