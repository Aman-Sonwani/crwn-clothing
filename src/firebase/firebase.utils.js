import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyDjm_mFLqMs_FKXFw4zcAK5jQryZa73mlY",
    authDomain: "crwn-db-96f4f.firebaseapp.com",
    projectId: "crwn-db-96f4f",
    storageBucket: "crwn-db-96f4f.appspot.com",
    messagingSenderId: "59054311003",
    appId: "1:59054311003:web:d344acbb45875e2f57217e"
  };
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account' });
 export const signInwithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;