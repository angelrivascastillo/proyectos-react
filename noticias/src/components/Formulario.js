import React from 'react'
import useSelect from '../hooks/useSelect'
import styles from './Formulario.module.css'
import PropTypes from 'prop-types';


const Formulario = ({ setCategory, setCountry }) => {
    const options = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]
    const countries = [
        { value: 'mx', label: 'Mexico' },
        { value: 'co', label: 'Colombia' },
        { value: 'ar', label: 'Argentina' },
        { value: 've', label: 'Venezuela' }
    ]
    const [categoria, SelectNoticias] = useSelect('general', options)
    const [country, SelectCountry] = useSelect('co', countries)


    const handleSubmit = e => {
        e.preventDefault()
        setCategory(categoria)
        setCountry(country)
    }
    return (
        <div className={`row ${styles.buscador}`}>
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Encuentra Noticias por categoría y país</h2>

                    <SelectCountry />
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>

        </div>
    )
}
Formulario.propTypes = {
    setCategory: PropTypes.func.isRequired,
    setCountry: PropTypes.func.isRequired
}


export default Formulario
