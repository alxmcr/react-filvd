import React from 'react';
import MovieListByGenre from '../MovieListByGenre/MovieListByGenre'
import './Genre.css'

export default function Genre({ id = 0, name = '' }) {



    return <div className="genre">
        <h2 className="genre__title">{id} - {name}</h2>
        <MovieListByGenre genreId={id} />
    </div>
}