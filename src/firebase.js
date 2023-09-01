import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPl82B3kkg0hwiE7YnRjO4yoQW1N6ylX4",
  authDomain: "slackclone-6fe49.firebaseapp.com",
  projectId: "slackclone-6fe49",
  storageBucket: "slackclone-6fe49.appspot.com",
  messagingSenderId: "61760371137",
  appId: "1:61760371137:web:48d025aff5bd5343f51740"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
