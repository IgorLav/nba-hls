import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';

const app = (
    <Router>
        <App/>
    </Router>
);

ReactDOM.render(app, document.getElementById('root'));
