import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import useCryptoMoneda from '../hooks/useCriptoMoneda';
import useMoneda from '../hooks/useMoneda';
import Error from './Error';

const Boton = styled.input`
display:block;
margin-top:2rem;
width:100%;
padding:.7rem;
font-size:20px;
font-weight:bold;
color:#fff;
background-color:#66a2fe;
border:none;
border-radius:10px;
transition:background-color 0.3s ease;

&:hover{
    background-color:#326ac0;
    cursor: pointer;
}
  
`;

const Formulario = ({ setDatos }) => {
    const [crytomonedas, setCrytomonedas] = useState([])
    const [error, setError] = useState(null)

    const monedas = [
        {
            codigo: 'USD',
            nombre: 'Dolar de Estados Unidos'
        },
        {
            codigo: 'MXN',
            nombre: 'Peso Mexicano'
        },
        {
            codigo: 'EUR',
            nombre: 'Euro'
        },
        {
            codigo: 'GBP',
            nombre: 'Libra Esterlina'
        }
    ]
    const [coin, Seleccionar] = useMoneda('Elige tu moneda', monedas)
    const [criptoCoin, SeleccionarCrypto] = useCryptoMoneda('Elige tu Crytomoneda', crytomonedas)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (coin === '' || criptoCoin === '') {
            setError('Debe seleccionar los campos requeridos')
            return false
        }
        setError(null)
        setDatos({ coin, criptoCoin })
    }


    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios(url)
            setCrytomonedas(resultado.data.Data)

        }
        consultarApi()

    }, [])
    return (
        <form action="" onSubmit={handleSubmit}>
            <Seleccionar />
            <SeleccionarCrypto />
            <Boton type='submit' value='Calcular' />
            {error && (
                <Error mensaje={error} />
            )}
        </form>
    )
}

export default Formulario
