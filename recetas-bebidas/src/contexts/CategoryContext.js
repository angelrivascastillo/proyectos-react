import { useEffect, useState, createContext } from "react"

const CategoryContext = createContext()
const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const res = await fetch(url)
            const { drinks } = await res.json()
            setCategories(drinks)

        }
        getCategories()

    }, [])

    return <CategoryContext.Provider value={{ categories }}>
        {children}
    </CategoryContext.Provider>
}
export default CategoryContext
export { CategoryProvider }
