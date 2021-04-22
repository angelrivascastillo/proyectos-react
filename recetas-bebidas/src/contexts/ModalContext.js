import { createContext, useEffect, useState } from "react";

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
    const [idrecipe, setIdrecipe] = useState(null)
    const [inforecipe, setRecipe] = useState({})

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idrecipe) return false
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`
            const res = await fetch(url);
            const { drinks } = await res.json()
            setRecipe(drinks[0])

        }
        obtenerReceta()

    }, [idrecipe])
    return <ModalContext.Provider value={{ inforecipe, setRecipe, setIdrecipe }}>
        {children}
    </ModalContext.Provider>
}
export { ModalProvider }

export default ModalContext