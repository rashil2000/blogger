const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('Notification added', doc));
})

exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: 'added a blog',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })

exports.userJoined = functions.firestore
    .document('users/{userId}')
    .onCreate(doc => {
        const user = doc.data();
        const notification = {
            content: 'signed up',
            user: `${user.firstName} ${user.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })

/* exports.userJoined = functions.auth.user()
    .onCreate(user => {
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: 'signed up',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
                return createNotification(notification);

            })
    }) */
