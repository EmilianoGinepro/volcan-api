/* // Import the functions you need from the SDKs you need
const  { initializeApp } = require("firebase/app") ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBumQYNZTEdoQ-_4-P7-ZoRFaZDSSE9F_o",
  authDomain: "volcan-dev.firebaseapp.com",
  databaseURL: "https://volcan-dev-default-rtdb.firebaseio.com",
  projectId: "volcan-dev",
  storageBucket: "volcan-dev.appspot.com",
  messagingSenderId: "58697927896",
  appId: "1:58697927896:web:b0a9ae82269b4e7af55bad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = { app }; */

const admin = require('firebase-admin');
const serviceAccount = require('../../volcan-dev-firebase-adminsdk-4ydbs-c2c6dc005c.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://volcan-dev-default-rtdb.firebaseio.com'
});

const db = admin.database();

module.exports = { db };