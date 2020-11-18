import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCokCxRoA4b1EHL2ynZrpva6dqDzuuh1P8",
    authDomain: "reactapp-77532.firebaseapp.com",
    databaseURL: "https://reactapp-77532.firebaseio.com",
    projectId: "reactapp-77532",
    storageBucket: "reactapp-77532.appspot.com",
    messagingSenderId: "988535720896",
    appId: "1:988535720896:web:fdffc2afe79334e6f4d625",
    measurementId: "G-YDSHMM7HK0"
};

class Firebase {

    constructor() {

        // Initialize Firebase
        app.initializeApp(firebaseConfig);
    }

    login(email, password) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    async register(name, email, password) {
        await app.auth().createUserWithEmailAndPassword(email, password);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('users').child(uid).set({
            name: name
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }


}

export default new Firebase();