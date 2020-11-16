import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
class Filme extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filme: []
        }
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;

        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                this.setState({ filme: json })
                console.log(this.state.filme)
            })
            .catch((error) => {
                console.error("Erro filme único", error)
            })
    }

    render() {
        return (
            <div className="filmeUnico">

                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} alt={this.state.filme.nome} />
                <p>{this.state.filme.sinopse}</p>
                {this.state.filme.length !== 0 &&
                    <Link to="/">Voltar para todos filmes</Link>
                }

            </div>
        )
    }

}

export default Filme;