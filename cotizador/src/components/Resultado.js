import React from 'react'
import styled from 'styled-components';

const Mensaje = styled.p`
    margin-top:1rem;
    padding:1rem;
    text-align:center;
    background-color:rgb(127,224,237);
  
`;
const ContenedorCotizacion = styled.div`
position:relative;
margin-top:1rem;
padding:.5rem;
background-color:rgb(127,224,237);
border:1px solid #26c6da;
text-align:center;
  
`;
const TextoCotizacion = styled.p`
    margin:0;
    padding:1rem;
    color:#00838f;
    font-weight:bold;
    text-transform:uppercase;
  
`;
const Resultado = ({ cotizacion }) => {


    return (
        <div>
            {cotizacion === 0
                ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
                : (
                    <ContenedorCotizacion>
                        <TextoCotizacion>el total es: $ {cotizacion}</TextoCotizacion>
                    </ContenedorCotizacion>
                )
            }

        </div>
    )
}

export default Resultado
