import { createContext, useEffect, useState } from "react";

const RecetasContext = createContext()
const RecetasProvider = ({ children }) => {
    const [search, setSearch] = useState({})
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`
            const res = await fetch(url)
            const { drinks } = await res.json()
            setRecipes(drinks)
        }
        if (Object.keys(search).length !== 0) {
            consultarApi()
        }

    }, [search])

    return <RecetasContext.Provider value={{ recipes, setSearch }}>
        {children}
    </RecetasContext.Provider>

}
export { RecetasProvider }
export default RecetasContext