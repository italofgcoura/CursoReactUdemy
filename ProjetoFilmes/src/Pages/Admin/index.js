import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Admin extends Component {
    render() {
        return (
            <div>
                <h1>ADMIN</h1>
                <Link to="/">Voltar para todos filmes</Link>
            </div>
        )
    }
}

export default Admin;
