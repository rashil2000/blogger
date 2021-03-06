import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
const ReactMarkdown = require('react-markdown');

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        document.title = `${project.title} - Blogger`;
        return (
            <div className="container section project-details">
                <div className="card">
                    <div className="card-content">
                        <span style={{ whiteSpace: "pre-line" }}>
                            <ReactMarkdown source={'## ' + project.title} />
                        </span>
                        <span style={{ whiteSpace: "pre-line", textAlign: "justify" }}>
                            <ReactMarkdown source={project.content} />
                        </span>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}
                            <div className="right">{moment(project.createdAt.toDate()).calendar()}</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container center">
            <p>Loading project...</p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'projects'
    }])
)(ProjectDetails);
