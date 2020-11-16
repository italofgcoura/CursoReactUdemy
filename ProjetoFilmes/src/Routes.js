import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Filme from './Pages/Filme'
import Admin from './Pages/Admin'
import { autenticado } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        autenticado() ? (
            <Component {...props} />
        ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
    )} />
)

const Routes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filme} />
                <PrivateRoute exact path="/admin" component={Admin} />

                {/* ABAIXO PÁGINA DE ERRO */}
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;