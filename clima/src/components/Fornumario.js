import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Fornumario = ({ formValues, setFormValues, setConsultar }) => {

    const [error, setError] = useState(null)

    const { city, country } = formValues

    const handleOnChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (!city.trim() || !country.trim()) {
            setError('Todos los campos son obligatorios')
            return false
        }
        setError(null)
        setConsultar(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-field col s12">
                    <input type="text"
                        name='city'
                        id='city'
                        value={city}
                        onChange={handleOnChange}
                    />
                    <label htmlFor="city">Ciudad</label>
                </div>
                <div className="input-field col s12">
                    <select name="country" id="country" value={country}
                        onChange={handleOnChange}
                    >
                        <option value="">Seleccione un país</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>

                    </select>
                    <label htmlFor="country">Pais</label>
                </div>
                <div className="input-field col s12">
                    <button
                        type="submit"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                    >Buscar Clima</button>
                </div>

            </form>
            {error && (
                <div className="col s12 error red darkend-4">
                    {error}
                </div>
            )}
        </>
    )
}
Fornumario.propTypes = {
    formValues: PropTypes.object.isRequired,
    setFormValues: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired,
}

export default Fornumario
