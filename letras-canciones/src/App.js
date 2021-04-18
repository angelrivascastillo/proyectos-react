import { useEffect, useState } from "react";
import Artista from "./components/Artista";
import Cancion from "./components/Cancion";
import Error from "./components/Error";
import Formulario from "./components/Formulario";
import Spinner from "./components/Spinner";


function App() {
  const [busqueda, setBusqueda] = useState({})
  const [letra, setLetra] = useState('')
  const [artista, setArtista] = useState('')
  const [spinner, setSpinner] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (Object.keys(busqueda).length === 0) return false
    const consultarApiLetra = async () => {
      setSpinner(true)
      setArtista('')
      setLetra('')

      const { artista, cancion } = busqueda
      const cancionAPI = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const artistAPI = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [resCancion, resArtista] = await Promise.all([fetch(cancionAPI), fetch(artistAPI)])

      const { lyrics } = await resCancion.json()
      const { artists } = await resArtista.json()
      if (!artists) {
        setError('No existe el artista')
        setSpinner(false)
        // setArtista('')
        return false
      }
      setError(null)

      if (!lyrics) {
        setError('No existe la canción')
        setSpinner(false)
        // setLetra('')
      }
      setLetra(lyrics)
      setArtista(artists[0]);
      setSpinner(false)
    }
    consultarApiLetra()
  }, [busqueda])
  return (
    <>
      <Formulario setBusqueda={setBusqueda} />

      {spinner
        ? <Spinner />
        : (<div className="container mt-5">
          <div className="row">
            {error && <Error message={error} />}
            <div className="col-md-6">
              <Cancion letra={letra} />
            </div>
            <div className="col-md-6">
              <Artista artista={artista} />
            </div>
          </div>
        </div>)}
    </>
  );
}

export default App;
