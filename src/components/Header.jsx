import React from 'react'
import Navbar from './Navbar';

function Header() {
    return (
        <header className="Header">
            <div className="Header-main">
                <div className="Box-left">
                    <h1 className="Header-logo">RUN</h1>
                </div>
                <div className="Box-right">
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header;
