import React, { useState } from 'react'
import Error from './Error'

const Form = ({ setSearch }) => {
    const [formValue, setFormValue] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // validar
        if (!formValue.trim()) {
            setError('Ingresar un término de búsqueda')
            return false
        }

        // enviar al componente principal
        setError(null)
        setSearch(formValue)


    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-group col-md-8 ">
                    <input type="text"
                        className='form-control form-control-lg my-2'
                        placeholder='Busca una imágen, por ejemplo naturaleza'
                        value={formValue}
                        onChange={(e) => setFormValue(e.target.value)}
                    />
                </div>
                <div className="input-group col-md-4">
                    <input type="submit"
                        className='btn  btn-danger btn-block'
                        value='Buscar'
                    />
                </div>
            </div>
            {error && <Error message={error} />}
        </form>
    )
}

export default Form
