import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './AppHeader.css'

export default function AppHeader() {
    return <header>
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__items">
                    <a href="/" className="header__link header__link--brand">Filvd</a>
                </li>
                <li className="header__items">
                    <i className="header__icon header__icon--menu">
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </li>
            </ul>
        </nav>

        <ul className="header__menu">
            <li className="header__item">
                <i className="header__icon header__icon--close">
                    <FontAwesomeIcon icon={faTimes} />
                </i>
            </li>
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
    </header>
}