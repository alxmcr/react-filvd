import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './AppHeader.css'

export default function AppHeader() {
    return <header>
        <nav className="header__nav" role="navigation" aria-label="main navigation">
            <ul className={`header__menu  header__menu--desktop`}>
                <li className="header__item">
                    <a href="/" className="header__link header__link--brand">Filvd</a>
                </li>
                <li className="header__item">
                    <ul className="header__submenu header__submenu--desktop">
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
                </li>
                <li className="header__item header__item--bars">
                    <i className="header__icon header__icon--bars">
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </li>
            </ul>

            <ul className={`header__menu header__menu--mobile`}>
                <li className="header__item header__item--close">
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
        </nav>
    </header>
}