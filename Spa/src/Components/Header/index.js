import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

import '../../styles.css'

function Header() {
    return (
        <header>
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link smooth to="#inicio">Home</Link></li>
                        <li><Link smooth to="#sobre">Sobre</Link></li>
                        <li><Link smooth to="#contato">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}


export default Header;