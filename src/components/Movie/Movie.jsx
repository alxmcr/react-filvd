import React from 'react';
import './Movie.css'

export default function Movie({ id, title, poster_path, poster_path_size }) {
    return <div className="movie">
        <img className="movie__image" src={`https://image.tmdb.org/t/p/${poster_path_size}${poster_path}`} />
        <span className="movie__title">{title}</span>
    </div>
}