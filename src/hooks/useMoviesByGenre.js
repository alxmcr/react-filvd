import { useState, useEffect } from 'react';

function useMoviesByGenre(genreId = 0) {
    const [moviesByGenre, setMoviesByGenre] = useState([]);

    // API KEY
    console.log(process.env)
    const { REACT_APP_API_KEY_TMDB } = process.env;
    // Build URL
    const resource = 'discover';
    const BASE_URL = `https://api.themoviedb.org/3`;
    const nroPage = 1;
    const API_URL = `${BASE_URL}/${resource}/movie?api_key=${REACT_APP_API_KEY_TMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${nroPage}&with_genres=${genreId}`;

    useEffect(() => {
        // Call to service
        fetch(API_URL).then(response => response.json()).then(data => {
            const { results } = data
            setMoviesByGenre(results)
        });
    }, [API_URL]);

    return moviesByGenre;
}

export default useMoviesByGenre;