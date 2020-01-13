import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {signUp} from '../../store/actions/authActions';

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/' />; 
        return (
            <div className="container z-depth-5">
                <form onSubmit={this.handleSubmit} autoComplete="off" className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" title="Alphanumeric characters only" pattern="[a-z0-9A-Z]{1,}" required autoFocus onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" title="Alphanumeric characters only" pattern="[a-z0-9A-Z]{1,}" required onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                        <div className="red-text">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
