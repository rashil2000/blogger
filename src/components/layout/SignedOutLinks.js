import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signup">Sign Up</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating blue darken-1">.</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;