import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChiNrVuGAWihAOjUzzU-H4OlzFIDjwkR8",
  authDomain: "twitter-clone-55b23.firebaseapp.com",
  projectId: "twitter-clone-55b23",
  storageBucket: "twitter-clone-55b23.appspot.com",
  messagingSenderId: "636716380801",
  appId: "1:636716380801:web:b328d837bf6103be0b1380",
  measurementId: "G-QT05TPQXPL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
