import React from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import M from 'materialize-css';

class CreateProject extends React.Component {
    state = {
        title: '',
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim() === "" || this.state.content.trim() === "") {
            const options = {
                opacity: 0.1
            };
            M.Modal.init(this.Modal, options);
            let instance = M.Modal.getInstance(this.Modal);
            instance.open();
        }
        else {
            this.props.createProject(this.state);
            this.props.history.push('/');
        }
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        document.title = `New Blog - Blogger`;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Blog</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" required autoFocus onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea rows="2" cols="20" wrap="hard" style={{textAlign: "justify"}} required className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
                <div ref={Modal => { this.Modal = Modal }} id="modal1" class="modal">
                    <div class="modal-content">
                        <h6 className="center">Enter non-empty values</h6>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
