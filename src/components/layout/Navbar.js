import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props) => {
    const {auth, profile} = props;
    const Links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3 z-depth-5">
            <div className="container">
                <Link to="/" className="rashil2000 left code">&nbsp;rashil2000</Link>
                {Links}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    //console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
}
export default connect(mapStateToProps)(Navbar);