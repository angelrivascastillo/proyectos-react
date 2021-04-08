import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cotizacion from './components/Cotizacion';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import image from './cryptomonedas.png'

const Contenedor = styled.div`
  max-width:992px;
  margin:0 auto;
  @media  (min-width: 768px){
    display:grid;
    grid-template-columns:1fr 1fr;
    column-gap:4rem;
  }
  
  
`;
const Imagen = styled.img`
  max-width:100%;
  margin-top:5rem;
`;
const Heading = styled.h1`
margin-top:80px;
margin-bottom:50px;
color:#fff;
text-align:left;
font-weight:700;
font-family:'Bebas Neue', cursive;
font-size:50px;
&::after{
    content:'';
    display:block;
    width:100px;
    height:6px;
    background-color:#66a2fe;
  }
  
`;
const initialDatos = {
  coin: '',
  criptoCoin: ''
}

function App() {
  const [datos, setDatos] = useState(initialDatos)
  const [cotizacion, setCotizacion] = useState({})
  const [loading, setLoading] = useState(false)
  const { coin, criptoCoin } = datos


  useEffect(() => {


    // consultar api 
    const cotizarCriptmoneda = async () => {

      // evitamos la ejecucion la primer vez
      if (coin === '') return false
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`
      const resultado = await axios.get(url)

      // mostrar spinner 
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setCotizacion(resultado.data.DISPLAY[criptoCoin][coin])
      }, 500);
    }
    cotizarCriptmoneda()

  }, [coin, criptoCoin])
  const componente = (loading) ? <Spinner /> : <Cotizacion cotizacion={cotizacion} />
  return (
    <Contenedor>
      <div>
        <Imagen src={image} alt='Imagen crypto' />
      </div>
      <div>
        <Heading>Cotizador de criptomonedas en tiempo real</Heading>
        <Formulario setDatos={setDatos} />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
