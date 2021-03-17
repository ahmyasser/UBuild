import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyAPxVDZQJ9FlxdpLFIWA2WxtJhA0-Blr7c",
    authDomain: "tiny-homes-with-wheels.firebaseapp.com",
    projectId: "tiny-homes-with-wheels",
    storageBucket: "tiny-homes-with-wheels.appspot.com",
    databaseURL: "https://tiny-homes-with-wheels-default-rtdb.firebaseio.com",
    messagingSenderId: "253948109315",
    appId: "1:253948109315:web:2db3f8dd2a91acec8c6436"
  });
  

export const storage = firebase.storage();
export const db=firebase.firestore();
export const auth= firebase.auth();
