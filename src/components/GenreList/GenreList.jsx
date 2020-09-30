import React from 'react';
import useGenres from '../../hooks/useGenres'
import Genre from './../Genre/Genre'
import './GenreList.css'


export default function GenreList() {
    const genreList = useGenres();

    // check is array
    const limitGenres = 5;
    let firstFiveRegister = [];
    if (Array.isArray(genreList)) {
        if (genreList !== null || genreList !== undefined) {
            if (genreList.length > limitGenres) {
                // Limit to limitGenres register
                firstFiveRegister = genreList.slice(0, limitGenres);
            } else {
                firstFiveRegister = [...genreList];
            }
        }
    }


    return <section className="genres">
        {
            firstFiveRegister.map(({ id, name }) => <Genre key={id} id={id} name={name} />)
        }
    </section>
}