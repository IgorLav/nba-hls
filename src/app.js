import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './containers/home';
import Teams from './containers/teams';
import Team from './containers/team';
import './app.scss';

const app = () => {
    return (
        <div>
            <Header />
            <Route path="/" component={Home} exact/>
            <Route path="/teams" component={Teams} exact/>
            <Route path="/teams/:id" component={Team} exact/>
            <Footer />
        </div>
    );
};

export default app;