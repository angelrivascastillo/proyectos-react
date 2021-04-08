import { useState } from "react"
import styled from 'styled-components';

const Label = styled.label`
    margin-top:2rem;
    display:block;
    font-family:'Bebas Neue', cursive;
    font-size:2.4rem;
    font-weight:bold;
    color:#fff;
    text-transform:uppercase;
  
`;
const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border:none;
    border-radius:.5rem;
    font-size:1.2rem;
    appearance: none;
    -webkit-appearance:none;

  
`;

const useCryptoMoneda = (label, monedas) => {
    const [coin, setCoin] = useState('')
    const SeleccionarCrypto = () => (
        <>
            <Label htmlFor="">{label}</Label>

            <Select name="" id="" onChange={(e) => setCoin(e.target.value)} value={coin}>
                <option value="">Seleccione</option>
                {monedas.map(moneda => (
                    <option value={moneda.CoinInfo.Name} key={moneda.CoinInfo.Id}>{moneda.CoinInfo.FullName} </option>
                ))}

            </Select>
        </>
    )
    return [coin, SeleccionarCrypto]

}

export default useCryptoMoneda