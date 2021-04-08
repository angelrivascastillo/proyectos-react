import React from 'react'
import styled from 'styled-components';

const MensajeError = styled.p`
    padding:1rem;
    margin-top:1rem;
    background-color:#b7322c;
    font-family:'Bebas Neue', cursive;
    font-size:30px;
    font-weight:bold;
    text-align:center;
    color:#fff;
    text-transform:uppercase;
  
`;

const Error = ({ mensaje }) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

export default Error
