import React from 'react';
import './Banner.css'

export default function Banner() {
    return <main className="banner">
        <h1 className="banner__title">Filvd</h1>
        <h3 className="banner__subtitle">Watch thousands of movies</h3>
        <div className="banner__actions">
            <a href="#" className="banner__link banner__link--secondary">Login</a>
            <a href="#" className="banner__link banner__link--primary">Register</a>
        </div>
    </main>
}