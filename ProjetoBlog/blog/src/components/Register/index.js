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
            nome: ''
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

            const { nome, email, password } = this.state;

            firebase.register(nome, email, password);
            this.props.history.replace('./dashboard');
        }

        catch (error) {
            alert(error.message)
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
                    <button type="submit">Registrar</button>
                </form>
            </div >
        )
    }
}

export default withRouter(Register)