import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAv7MeNrFJebFLONxRJ6Ob5TZ24mR6ZC94",
    authDomain: "mead-todo-app-797bf.firebaseapp.com",
    databaseURL: "https://mead-todo-app-797bf.firebaseio.com",
    projectId: "mead-todo-app-797bf",
    storageBucket: "mead-todo-app-797bf.appspot.com",
    messagingSenderId: "347215239027"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        version:'1.0',
        name:'Todo App'
    },
    isRunning : true,
    user:{
        name: 'edvin',
        age:12
    },
});
