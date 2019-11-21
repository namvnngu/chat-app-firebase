import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
    clientId: process.env.CLIENT_ID
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();

        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)

    doSignOut = () => this.auth.signOut();

    // User API
    user = uid => this.db.ref(`message-chat/users/${uid}`);
    users = () => this.db.ref('message-chat/users');
    currentUser = () => this.auth.currentUser.uid;
}

export default Firebase;
