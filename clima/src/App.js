import { useEffect, useState } from 'react';
import './App.css';
import Clima from './components/Clima';
import Fornumario from './components/Fornumario';
import Header from './components/Header';
import Error from './components/Error';
import { appId } from './key';


const initilFormvalues = {
  city: '',
  country: ''
}

function App() {
  const [formValues, setFormValues] = useState(initilFormvalues)
  const [consultar, setConsultar] = useState(null)
  const [resultado, setResultado] = useState({})
  const [error, setError] = useState(null)

  const { city, country } = formValues

  useEffect(() => {
    const consultarApi = async () => {
      const key = appId || 'clave'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}
      `
      if (consultar) {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado)
        setConsultar(false)

        if (resultado.cod === '404')
          setError('No hay resultados')
        else
          setError(false)

      }

    }
    consultarApi()
    // eslint-disable-next-line
  }, [consultar])
  return (
    <>
      <Header title='Clima React App' />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Fornumario formValues={formValues} setFormValues={setFormValues} setConsultar={setConsultar} />
            </div>
            <div className="col m6 s12">
              {error
                ? <Error error={error} />
                : <Clima resultado={resultado} />

              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
