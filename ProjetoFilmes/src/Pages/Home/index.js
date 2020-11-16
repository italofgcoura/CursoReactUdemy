import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <h2>{filme.nome}</h2>
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