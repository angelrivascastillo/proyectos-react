import React, { useState } from 'react'
import styled from 'styled-components';
import { calcularDiferencia, incrementoPorMarca, incrementoPorPlan } from '../helper';

const Campo = styled.div`
display:flex;
margin-bottom:1rem;
align-items:center;
  
`;
const Label = styled.label`
flex:0 0 100px;
  
`;
const Select = styled.select`
display:block;
width:100%;
padding:.7rem;
border: 1px solid #e1e1e1;
appearance: none;
-webkit-appearance:none;
-moz-appearance:none;
`;

const InputRadio = styled.input`
    margin:0 1rem;
  
`;
const Boton = styled.button`
    width:100%;
    padding:.7rem;
    margin-top:1rem;
    background-color:#00838f;
    font-size:16px;
    font-weight:bold;
    color:#fff;
    text-transform:uppercase;
    border:none;
    transition:background-color 0.5s ease;

    &:hover{
        cursor: pointer;
        background-color:#26c6da;
    }
  
`;
const Error = styled.div`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding:12px 20px;
    margin-top:1.5rem;
`

const initialFormValues = {
    brand: '',
    year: '',
    plan: ''
}
const Form = ({ setResumen, setLoading }) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { brand, year, plan } = formValues
    const [error, setError] = useState(null)

    const handleCahnge = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        if (!brand.trim() || !year.trim() || !plan.trim()) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError(null)
        // base de 2000
        let resultado = 2000;

        // calcular difrencia por años
        const diferencia = calcularDiferencia(year)
        resultado -= diferencia * 0.03 * resultado

        //incrementar de acuerdo a marca  europeo:+30%, americano=+15%, asiatico:+5%
        resultado *= incrementoPorMarca(brand)

        // incremnto por plan: basico +20% , completo +50%
        resultado *= incrementoPorPlan(plan)
        resultado = parseFloat(resultado).toFixed(2)

        setTimeout(() => {
            setResumen({
                cotizacion: resultado,
                formValues
            })
            setLoading(false)

        }, 500);


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Campo>
                    <Label>Marca</Label>
                    <Select name='brand' value={brand} onChange={handleCahnge}>
                        <option value="">--Seleccione--</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label>Año</Label>
                    <Select name='year' value={year} onChange={handleCahnge}>
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </Campo>
                <Campo>
                    <Label >Plan</Label>
                    <InputRadio type="radio" name="plan" value='basico' onChange={handleCahnge} />
                    <Label>Básico</Label>
                    <InputRadio type="radio" name="plan" value='completo' onChange={handleCahnge} />
                    <Label>Completo</Label>

                </Campo>
                <Boton type="submit">Cotizar</Boton>
            </form>
            {error && (
                <Error>{error}</Error>
            )}
        </>


    )

}

export default Form
