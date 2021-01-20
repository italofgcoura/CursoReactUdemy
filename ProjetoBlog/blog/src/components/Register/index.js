import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './register.scss'
class Register extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: '',
            nome: '',
            categoria: []
        }

        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    register(e) {
        e.preventDefault();
        this.onRegister();
    }

    onRegister = async () => {

        try {

            const { nome, email, password, categoria } = this.state;

            firebase.register(nome, email, password, categoria);
            this.props.history.replace('./dashboard');
        }

        catch (error) {
            alert(error.message)
        }

    }

    handleOption(e) {

        if (e.target.checked) {

            this.setState({ categoria: [...this.state.categoria, e.target.value] })

        }

    }

    render() {
        return (
            <div>
                <h1>Novo Usuário</h1>
                <form id="formRegister" onSubmit={this.register}>
                    <label>Nome</label><br />
                    <input type="text" placeholder="João das Couves" autoFocus autoComplete="off" value={this.state.nome} onChange={(e) => { this.setState({ nome: e.target.value }) }}></input><br />
                    <label>Email</label><br />
                    <input type="email" autoComplete="off" placeholder="teste@gmail.com" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}></input><br />
                    <label>Password</label><br />
                    <input type="password" value={this.state.password} onChange={(e) => { this.setState({ password: e.target.value }) }}></input>
                    <div>

                        <label>Categoria1</label>

                        <input type="checkbox" placeholder="Opção1" value={"Almoço"} onChange={(e) => { this.handleOption(e) }} />

                        <label>Categoria2</label>

                        <input type="checkbox" placeholder="Opção2" value={"Café da Manhã"} onChange={(e) => { this.handleOption(e) }} />

                    </div>
                    <button type="submit">Registrar</button>
                </form>
            </div >
        )
    }
}

export default withRouter(Register)