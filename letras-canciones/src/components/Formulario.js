import React, { useState } from 'react'
import Error from './Error'

const initialFormValues = {
    artista: '',
    cancion: ''
}
const Formulario = ({ setBusqueda }) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [error, setError] = useState(null)
    const { artista, cancion } = formValues

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        }
        )
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        //  validar inputs
        if (!artista.trim() || !cancion.trim()) {
            setError('Artista y canción son obligatorios')
            return false
        }
        setError(null)
        setBusqueda(formValues)
        setFormValues(initialFormValues)
    }
    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form className='col card text-white bg-transparent mb-3 pt-5 pb-2'
                        onSubmit={handleOnSubmit}
                    >

                        <fieldset>
                            <legend className='text-center'>Buscador de canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Artista</label>
                                        <input type="text"
                                            className='form-control'
                                            name='artista'
                                            placeholder='Nombre del artista'
                                            value={artista}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">Canción</label>
                                        <input type="text"
                                            className='form-control'
                                            name='cancion'
                                            placeholder='Nombre de la canción'
                                            value={cancion}
                                            onChange={handleChange}
                                        />
                                    </div>

                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Buscar</button>
                        </fieldset>
                    </form>
                    {error && (<Error message={error} />)}
                </div>
            </div>
        </div>
    )
}

export default Formulario
