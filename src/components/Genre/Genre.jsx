import React from 'react';
import './Genre.css'

export default function Genre({ name = '' }) {
    return <div className="genre">
        <h2 className="genre__title">{name}</h2>
    </div>
}