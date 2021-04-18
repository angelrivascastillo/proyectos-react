import React from 'react'

const Error = ({ message }) => {
    return (
        <div className='col-12 alert alert-primary mt-3'>
            {message}

        </div>
    )
}

export default Error
