import React, { useContext, useState } from 'react'
import CategoryContext from '../contexts/CategoryContext'
import RecetasContext from '../contexts/RecetasContext'
import Error from './Error'

const initialFormValues = {
    name: '',
    category: ''

}
const Form = () => {

    const { categories } = useContext(CategoryContext)
    const [formValues, setFormValues] = useState(initialFormValues)
    const { name, category } = formValues
    const { setSearch } = useContext(RecetasContext)
    const [error, setError] = useState(null)

    const handleOnChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        if (!name.trim() || !category) {
            setError('Todos los campos son obligatorios')
            return false
        }
        setError(null)
        setSearch(formValues)
        setFormValues(initialFormValues)

    }
    return (
        <form action="" className="col-12" onSubmit={handleOnSubmit}>
            <fieldset>
                <legend className='text-center'>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4 form-group" >
                    <input type="text"
                        className='form-control'
                        name='name'
                        placeholder='Buscar por ingrediente'
                        value={name}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="col-md-4 form-group">
                    <select name="category" className="form-control"
                        onChange={handleOnChange}
                        value={category}
                    >
                        <option value="">Selecciona Categoría</option>
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>

                </div>
                <div className="col-md-4 form-group">
                    <input type="submit" value="Buscar Bebidas"
                        className='btn btn-block btn-primary'
                    />
                </div>

            </div>
            {error && <Error message={error} />}

        </form>
    )
}

export default Form

