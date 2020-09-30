import React from 'react';
import useGenres from '../../hooks/useGenres'
import Genre from './../Genre/Genre'
import './GenreList.css'


export default function GenreList() {
    const genreList = useGenres();
    // Limit to 5 register
    const firstFiveRegister = genreList.slice(0, 5);

    return <section className="genres">
        {
            firstFiveRegister.map(({ id, name }) => <Genre key={id} id={id} name={name} />)
        }
    </section>
}