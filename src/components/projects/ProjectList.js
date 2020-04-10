import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            <div className="card z-depth-5">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title code">Blogger</span>
                </div>
            </div>
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id}><ProjectSummary project={project} /></Link>
                )
            })}
        </div>
    )
}

export default ProjectList;