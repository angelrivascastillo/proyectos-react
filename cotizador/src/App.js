import './App.css';
import Header from './components/Header';
import styled from 'styled-components';
import Form from './components/Form';
import { useState } from 'react';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width:600px;
  margin: 0 auto;
`
const ContenedorForm = styled.div`
background-color:#fff;
padding:2rem;
text-align:center;
`


function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    formValues: null
  })
  const [loading, setLoading] = useState(null)
  const { formValues, cotizacion } = resumen
  return (
    <Contenedor>
      <Header title='Cotizador de seguros' />
      <ContenedorForm>
        <Form setResumen={setResumen} setLoading={setLoading} />
        {loading && <Spinner />}
        {formValues && (!loading && <Resumen formValues={formValues} />)}
        {!loading && <Resultado cotizacion={cotizacion} />}
        {/* {loading
          ? <Spinner />
          : <Resumen formValues={formValues} />
        }
        {!loading && <Resultado cotizacion={cotizacion} />} */}
      </ContenedorForm>


    </Contenedor>
  );
}

export default App;
