import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './dashboard.scss';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: localStorage.nome
        }

        this.logout = this.logout.bind(this);
    }

    logout = async () => {
        await firebase.logout()
            .catch((error) => {
                console.log(error)
            })
        localStorage.removeItem("nome");
        this.props.history.push('/');
    }

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
                    <Link className="novoPost"to='/dashboard/new'>Novo Post</Link>
                </div>
                <p>Logado com: {firebase.getCurrent()}</p>
                <button className="deslogar" onClick={this.logout}>DESLOGAR</button>
            </div>
        )
    }
}

export default withRouter(Dashboard);