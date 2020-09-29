import React from 'react'
import './AppHeader.css'

export default function AppHeader() {
    return <header>
        <div className="header__logo">
            <a href="/" className="header__link header__link--brand">Filvd</a>
        </div>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <a href="/catalog" className="header__link">Catalog</a>
                </li>
                <li className="header__item">
                    <a href="/movies/premiers" className="header__link">Premieres</a>
                </li>
                <li className="header__item">
                    <a href="/subscription" className="header__link">Subscription</a>
                </li>
                <li className="header__item">
                    <a href="/login" className="header__link header__link--login">Iniciar Sesion</a>
                </li>
            </ul>
        </nav>
    </header>
}