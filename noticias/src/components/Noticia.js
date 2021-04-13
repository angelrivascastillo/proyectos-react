import React from 'react'
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {
    const { urlToImage, url, title, description, source } = noticia
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {urlToImage && (<div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className="card-title">{source.name}</span>
                </div>)}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url}
                        className='waves-effect waves-light btn'
                        target='_blank'
                        rel='noopener noreferrer'
                    >Ver Notcia completa</a>
                </div>
            </div>
        </div>
    )
}
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia
