import firebase from 'firebase/app'

import 'firebase/auth' 

let firebaseConfig = {
    apiKey: "AIzaSyAmLy7liayj_fgwyVsQvCJdq9VUaMyoIEo",
    authDomain: "sistema-de-chamados-f85fd.firebaseapp.com",
    projectId: "sistema-de-chamados-f85fd",
    storageBucket: "sistema-de-chamados-f85fd.appspot.com",
    messagingSenderId: "344147813375",
    appId: "1:344147813375:web:33b1e61a9d97b1c054bdca",
    measurementId: "G-J49QV57XZF"
  };
  
  if(!firebase.app.length) {
      firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;