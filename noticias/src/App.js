import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListNews from "./components/ListNews";

function App() {
  const [category, setCategory] = useState('')
  const [country, setCountry] = useState('')

  const [news, setNews] = useState([])
  useEffect(() => {
    const consultarApi = async () => {

      const url = `https://newsapi.org/v2/top-headlines?country=${country || 'co'}&category=${category}&apiKey=483fc9c6ff2b4923b2adecf76641347a`
      const respuesta = await fetch(url)
      const resultado = await respuesta.json();
      setNews(resultado.articles)
    }
    consultarApi()

  }, [category, country])
  return (
    <>
      <Header title='Buscador de Noticias' />
      <div className="white container">
        <Formulario setCategory={setCategory} setCountry={setCountry} />
        <ListNews news={news} />
      </div>
    </>
  );
}

export default App;
