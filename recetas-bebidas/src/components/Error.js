import React from 'react'

const Error = ({ message }) => {
    return (
        <div className='alert alert-danger row'>
            {message}

        </div>
    )
}

export default Error