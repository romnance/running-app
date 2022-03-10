import React from 'react'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="Nav-list">
                <li>
                    <a className="Header-nav-label" href="#">Gear</a>
                </li>
                <li>
                    <a className="Header-nav-label" href="#">Books</a>
                </li>
                <li>
                    <a className="Header-nav-label" href="#">Inspo</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
