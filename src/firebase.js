import firebase from 'firebase';

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCIF0NVDBPR3vOYHrkY0XZIelMvjap_0fA",
    authDomain: "my-app-59465.firebaseapp.com",
    databaseURL: "https://my-app-59465.firebaseio.com",
    projectId: "my-app-59465",
    storageBucket: "",
    messagingSenderId: "749692624985"
  };
  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();