import { useState, useEffect } from 'react';

function useGenres() {
    const [genresList, setGenresList] = useState([]);

    // API KEY
    const { REACT_APP_API_KEY_TMDB } = process.env;
    // Build URL
    const resource = 'genre';
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_URL = `${BASE_URL}/${resource}/movie/list?api_key=${REACT_APP_API_KEY_TMDB}&language=en-US`;

    useEffect(() => {
        // Call to service
        fetch(API_URL).then(response => response.json()).then(data => {
            const { genres } = data
            setGenresList(genres)
        });
    }, [API_URL]);

    return genresList;
}

export default useGenres;