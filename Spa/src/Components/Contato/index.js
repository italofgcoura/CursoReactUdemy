import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

function Contato() {
    return (
        <address id="contato" className="contato">
            <h1>CONTATO</h1>
            <h2>Mussum ipssum Mussum ipssum Mussum ipssum Mussum ipssum Mussum ipssum Mussum ipssum Mussum ipssum </h2>
            <Link smooth to="#inicio">Voltar para início</Link>
        </address>
    );
}


export default Contato;