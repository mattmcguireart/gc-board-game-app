import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2FBgP0Co-7usQW0fJ1RYE3JCVsu5dR4c",
  authDomain: "gc-board-game-app.firebaseapp.com",
  projectId: "gc-board-game-app",
  storageBucket: "gc-board-game-app.appspot.com",
  messagingSenderId: "958119104168",
  appId: "1:958119104168:web:43021f73b6e7775dbe3c9d",
};
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;

export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}
export function signOut(): void {
  firebase.auth().signOut();
}
