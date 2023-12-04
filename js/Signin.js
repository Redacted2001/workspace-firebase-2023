const firebaseConfig = {
  apiKey: "AIzaSyCVgOTjIx7Y_FhncCa45USl2M9mG_FcqzQ",
  authDomain: "csci225db.firebaseapp.com",
  projectId: "csci225db",
  storageBucket: "csci225db.appspot.com",
  messagingSenderId: "89756766124",
  appId: "1:89756766124:web:d1a18d3de334120f84b409",
  measurementId: "G-6Z9SM30EE5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = document.getElementById("usern").toString();
  var password = document.getElementById("pwd").toString();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        myname = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(myname, email, emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then();
})
