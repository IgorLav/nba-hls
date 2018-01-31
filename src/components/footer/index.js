import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo';
import './footer.scss';


const footer = (props) => (
    <footer className="footer">
        <div className="container">
            <Logo/>
            <nav className="header-nav">
                <Link to="/teams">Teams</Link>
            </nav>
        </div>
    </footer>
);

export default footer;