import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAmrvQjlM5tFXvMkdq6bNlINhHO_TDQ0zE",
    authDomain: "beach-blogger.firebaseapp.com",
    databaseURL: "https://beach-blogger.firebaseio.com",
    projectId: "beach-blogger",
    storageBucket: "beach-blogger.appspot.com",
    messagingSenderId: "548062356434",
    appId: "1:548062356434:web:db6c9aa2158ad57b665e0b",
    measurementId: "G-ZLPQLEFGFN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;