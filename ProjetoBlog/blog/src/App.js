import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Erro from './components/Erro';
import Header from './components/Header';
import firebase from './firebase';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import Register from './components/Register'
import New from './components/New'
import './styleGlobal.scss';

class App extends Component {

  state = {
    firebaseInitialized: false
  };

  componentDidMount() {
    firebase.isInitialized()
      .then(resultado => {
        //devolve o usuário
        this.setState({ firebaseInitialized: resultado })
      })
  }

  render() {
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard/new" component={New} />

          <Route path="*" component={Erro} />

        </Switch>
      </BrowserRouter>
    )
      : (
        <h1>carregando</h1>
      )
  }
}
export default App;
