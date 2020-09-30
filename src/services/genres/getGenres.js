async function getGenresToAPI({ resource = "", API_KEY = '' }) {
    // Build URL
    const BASE_URL = `https://api.themoviedb.org/3`;
    const API_URL = `${BASE_URL}/${resource}/movie/list?api_key=${API_KEY}&language=en-US`;
    //  Fetch options
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // Fetch
    const response = await fetch(API_URL, options);
    return response.json();
}

export default function getGenres({ resource = "" }) {
   
    return getGenresToAPI({ resource, API_KEY: REACT_APP_API_KEY_TMDB })
};