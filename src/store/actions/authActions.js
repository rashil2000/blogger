export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'SIGNED_IN'});
        }).catch((error) => {
            dispatch({type: 'ERROR_SIGNING_IN', error})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => dispatch({type: 'SIGNED_OUT'}))
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({type: 'SIGNED_UP'})
        }).catch((error) => {
            dispatch({type: 'ERROR_SIGNING_UP', error})
        });

    }
}
