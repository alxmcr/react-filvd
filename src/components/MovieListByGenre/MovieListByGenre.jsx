import React from 'react';
import useMoviesByGenre from '../../hooks/useMoviesByGenre.js'
import Movie from '../Movie/Movie'
import './MovieListByGenre.css'

export default function MovieList({ genreId = 0 }) {
    const moviesByGenre = useMoviesByGenre(genreId)

    const posterPathSize = "w500";
    return <div className="moviesbygenre">
        {

            moviesByGenre.map(({ id, title, poster_path }) =>
                <Movie key={id}
                    id={id}
                    title={title}
                    poster_path={poster_path}
                    poster_path_size={posterPathSize} />
            )
        }
    </div>
}