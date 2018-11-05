import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Order from '../views/Order';
import Product from '../views/Product';

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/orders" component={Order} />
        <Route exact path="/products" component={Product} />

    </Switch>
)