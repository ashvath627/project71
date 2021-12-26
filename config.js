import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 // Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_ZsHgeUc0057dml2ZufVd02m_6MZTyNQ",
  authDomain: "project71-9c5b6.firebaseapp.com",
  projectId: "project71-9c5b6",
  storageBucket: "project71-9c5b6.appspot.com",
  messagingSenderId: "823986252382",
  appId: "1:823986252382:web:f3c39b78e1b389a6d1e2cf"
};
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

