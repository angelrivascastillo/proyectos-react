import React from 'react'

const Cancion = ({ letra }) => {
    if (!letra) return false
    return (
        <>
            <h2>Letra de la canción</h2>
            <p className="letra">{letra}</p>

        </>
    )
}

export default Cancion
