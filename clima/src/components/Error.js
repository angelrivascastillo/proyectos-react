import React from 'react'
import PropTypes from 'prop-types'


const Error = ({ error }) => {
    return (
        <div className="col s12 error red darkend-4">
            {error}
        </div>
    )
}
Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}


export default Error
