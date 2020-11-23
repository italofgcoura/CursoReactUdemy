import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'

function Header() {
    return (
        <div className="header">
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;