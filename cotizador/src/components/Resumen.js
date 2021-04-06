import React from 'react'
import { primerMayuscula } from '../helper'
import styled from 'styled-components';

const ResumenContenedor = styled.div`
    padding:1rem;
    margin-top:1rem;
    text-align:center;
    background-color:#00838f;
    color:#fff;
  
`;
const Resumen = ({ formValues }) => {
    const { brand, year, plan } = formValues
    return (
        <ResumenContenedor>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(brand)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul>

        </ResumenContenedor>
    )
}

export default Resumen
