import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

class Header extends Component {

    render() {
        return (
            <div className="titulo">
                <div className="links">
                    <Link to='/'><strong>Filmes</strong></Link>
                    <Link to="/admin">ADMin</Link>
                </div>
            </div>
        )
    }

}

export default Header;