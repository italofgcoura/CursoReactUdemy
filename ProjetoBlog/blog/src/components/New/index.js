import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './new.scss';

class New extends Component {

    constructor(props) {

        super(props);

        this.state = {
            titulo: '',
            descricao: '',
            imagem: ''

        }

        this.cadastrar = this.cadastrar.bind(this);

    }

    cadastrar(e) {

        e.preventDefault();
    }

    render() {

        return (
            <div className="newpost">
                <header>
                    <Link to="/dashboard">Voltar</Link>
                </header>
                <form onSubmit={this.cadastrar}>
                    <label>Título:</label>
                    <input type="text" placeholder="Título do post" value={this.state.titulo} autoFocus onChange={(e) => this.setState({ titulo: e.target.value })}></input>

                    <label>Url da imagem:</label>
                    <input type="text" placeholder="Url da imagem" value={this.state.imagem} onChange={(e) => this.setState({ titulo: e.target.value })}></input>

                    <label>Descrição do post:</label>
                    <textarea type="text" placeholder="Descrição do post" value={this.state.descricao} onChange={(e) => this.setState({ descricao: e.target.value })}></textarea>

                    <button type="submit">Cadastrar Post</button>
                </form>
            </div>
        )
    }

}

export default withRouter(New);