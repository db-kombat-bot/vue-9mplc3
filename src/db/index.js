import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: 'AIzaSyCkOpBGRTDkp847R1DU321hDtVITwh1Dn0',
  authDomain: 'kombat-0669.firebaseapp.com',
  databaseURL:
    'https://kombat-0669-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kombat-0669',
  storageBucket: 'kombat-0669.appspot.com',
  messagingSenderId: '529514023680',
  appId: '1:529514023680:web:6e8f7fb21079d41b6fc1e5',
  measurementId: 'G-XZKD4FH14X',
};

const firebaseapp = firebase.initializeApp(config);
export default firebaseapp.firestore();
