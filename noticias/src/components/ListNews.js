import React from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types';

const ListNews = ({ news }) => {
    return (
        <div className='row'>
            {
                news?.map(noticia => (
                    <Noticia key={noticia.url} noticia={noticia} />
                ))
            }
        </div>
    )
}
ListNews.propTypes = {
    news: PropTypes.array.isRequired
}


export default ListNews
