import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home'
import Header from './Components/Header'
const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;