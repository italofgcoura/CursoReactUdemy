import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './login.scss';
class Login extends Component {

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);

    }

    componentDidMount() {
        //verificar se usuário já está logado
        if (firebase.getCurrent()) {
            return this.props.history.replace('/dashboard')
        }
    }

    entrar(e) {

        e.preventDefault();
        this.login();
    }

    login = async () => {

        const { email, password } = this.state;

        try {
            await firebase.login(email, password)
                .catch((error) => {
                    if (error.code === 'autg/user-not-found') {
                        alert('Este usuário não existe')
                    }
                    else {
                        alert('Código de erro: ' + error);
                        return null;
                    }
                })
            this.props.history.replace('/dashboard');
        }
        catch (error) {
            alert(error.message)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.entrar} id="formEntrar">
                    <label>EMAIL</label><br />
                    <input type="email" autoComplete="off" autoFocus placeholder="teste@gmail.com" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    ></input>

                    <label>PASSWORD</label><br />
                    <input type="password" autoComplete="off" value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    ></input>
                    <button type="submit">ENTRAR</button>
                    <Link to="/register">Cadastrar uma nova conta</Link>
                </form>
            </div>
        )
    }
}

export default withRouter(Login)