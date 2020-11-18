import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Titulo} from '../../styles'
import './styles.scss';
class Home extends Component {

    constructor(props) {

        super(props)

        this.state = {

            filmes: []

        }

        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount() {

        this.loadFilmes();

    }

    loadFilmes() {

        let url = ' https://sujeitoprogramador.com/r-api/?api=filmes/';

        fetch(url)
            .then((res) => res.json()
                .then((json) => {
                    this.setState({ filmes: json })
                }))

    }

    render() {
        return (
            <div>
                {this.state.filmes.map((filme) => {
                    return (
                        <div className="filme" key={filme.id}>
                            <Titulo cor="ffffff">{filme.nome}</Titulo>
                            <img src={filme.foto} alt={filme.nome} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Home;