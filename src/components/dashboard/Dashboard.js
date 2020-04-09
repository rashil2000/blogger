import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends React.Component {
    render() {
        //console.log(this.props);
        const { projects, notifications } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"><ProjectList projects={projects} /></div>
                    <div className="col s12 m5 offset-m1"><Notifications notifications={notifications}/></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

export default compose(connect(mapStateToProps), firestoreConnect(
    [
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', orderBy: ['time', 'desc'] }
    ]
))(Dashboard);