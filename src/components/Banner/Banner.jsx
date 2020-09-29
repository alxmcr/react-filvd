import React from 'react';
import './Banner.css'

export default function Banner() {
    return <main className="banner">
        <div className="banner__brand">
            <h1 className="banner__title">Filvd</h1>
            <h2 className="banner__subtitle"><i>Watch <u>thousands</u> of MOVIES</i></h2>
        </div>
        <div className="banner__actions">
            <a href="/login" className="banner__link banner__link--secondary">Login</a>
            <a href="/register" className="banner__link banner__link--primary">Register</a>
        </div>
    </main>
}