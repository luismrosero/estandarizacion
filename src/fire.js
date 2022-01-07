// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat";


const firebaseConfig = {
    apiKey: "AIzaSyAb2lj6Kn0NNWZ6ymSlSgq61qbLSiy6U68",
    authDomain: "appworkers-5e751.firebaseapp.com",
    databaseURL: "https://appworkers-5e751-default-rtdb.firebaseio.com",
    projectId: "appworkers-5e751",
    storageBucket: "appworkers-5e751.appspot.com",
    messagingSenderId: "878316256012",
    appId: "1:878316256012:web:dbea175c79543cf0632729",
    measurementId: "G-KYQVTR6LXP"
};


export const fire = firebase.initializeApp(firebaseConfig);
