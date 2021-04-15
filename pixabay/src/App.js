import { useEffect, useState } from "react";
import { apikey } from "./Apikey";
import Form from "./components/Form";
import ListImage from "./components/ListImage";

function App() {
  const [search, setSearch] = useState('')
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const consultarApi = async () => {
      if (!search) return false
      const imagenesporpagina = 10;
      const key = apikey
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagenesporpagina}&page=${currentPage}`
      const respuesta = await fetch(url)
      const { hits: resultado, totalHits } = await respuesta.json()
      setImages(resultado)

      // calcular total de paginas
      setTotalPages(Math.ceil(totalHits / imagenesporpagina))

      // mover la pantalla hacia arriba 
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({ behavior: 'smooth' })

    }
    consultarApi()
  }, [search, currentPage])

  const paginaAnterior = () => {
    const nuevaPaginaActual = currentPage - 1
    if (nuevaPaginaActual === 0) return false
    setCurrentPage(nuevaPaginaActual)
  }

  const paginaSiguiente = () => {
    const nuevaPaginaActual = currentPage + 1
    if (nuevaPaginaActual > totalPages) return false
    setCurrentPage(nuevaPaginaActual)
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Form setSearch={setSearch} />
      </div>
      <div className="row justify-content-center">
        <ListImage images={images} />
        {(currentPage !== 1 && search) && (<button className="btn btn-info mr-1 " onClick={paginaAnterior}>
          &laquo; Anterior
        </button>)}

        {(currentPage !== totalPages && search) && (<button type='button' className="btn btn-info " onClick={paginaSiguiente}>
          Siguiente &raquo;
        </button>)}
      </div>
    </div>
  );
}

export default App;
