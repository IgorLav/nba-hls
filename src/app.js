import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './containers/home';
import './app.css';

const app = () => {
    return (
        <div>
            <Header />
            <Route to="/" component={Home}/>
            <Footer />
        </div>
    );
};

export default app;