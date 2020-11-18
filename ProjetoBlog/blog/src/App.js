import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Erro from './components/Erro';
import Header from './components/Header';
import firebase from './firebase';

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
