import React, { useContext } from 'react'
import RecetasContext from '../contexts/RecetasContext'
import Recipe from './Recipe'

const RecipeList = () => {
    const { recipes } = useContext(RecetasContext)
    return (
        <div className='row mt-5'>
            {recipes.map(recipe => (
                <Recipe key={recipe.idDrink} recipe={recipe} />
            ))}

        </div>
    )
}

export default RecipeList
