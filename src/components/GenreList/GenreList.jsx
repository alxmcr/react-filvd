import React from 'react';
import useGenres from '../../hooks/useGenres'
import Genre from './../Genre/Genre'
import './GenreList.css'


export default function GenreList() {
    const genreList = useGenres();

    return <section>
        {
            genreList.map(({ id, name }) => <Genre key={id} id={id} name={name} />)
        }
    </section>
}