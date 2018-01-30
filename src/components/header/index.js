import React from 'react';
import {withRouter,Link} from 'react-router-dom';
import Logo from '../logo';
import './header.css';

const header = (props) => (
    <header className="header">
        <div className="container">
            <Logo/>

            <nav className="header-nav">
                <Link to="/teams">Teams</Link>
            </nav>
        </div>
    </header>
);

export default withRouter(header);