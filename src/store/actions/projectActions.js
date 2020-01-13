export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const id = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: id,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project: project})
        }).catch((error) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error})
        })
    }
};

