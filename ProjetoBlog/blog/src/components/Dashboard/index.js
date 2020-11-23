import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: localStorage.nome
        }
    }

    logout() { }

    async componentDidMount() {

        if (!firebase.getCurrent()) {
            this.props.history.replace('/login');
            return null;
        }

        firebase.getUserName((info) => {
            localStorage.nome = info.val().name;
            this.setState({ nome: localStorage.nome })
        })

    }

    render() {
        return (
            <div id="dashboard">
                <div className="userInfo">
                    <h1>Olá, {this.state.nome}</h1>
                    <Link to='/dashboard/new'>Novo Post</Link>
                </div>
                <p>Logado com: email@gmail.com</p>
                <button onClick={this.logout}>DESLOGAR</button>
            </div>
        )
    }
}

export default withRouter(Dashboard);