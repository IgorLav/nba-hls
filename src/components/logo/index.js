import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from './logo.png';

const logo = () => (
    <Link to="/">
        <img className="img-responsive" src={logoImg} alt="" />
    </Link>
);
export default logo;