
document.querySelector("#logfrm").addEventListener("submit",(event)=>{
  event.preventDefault();
});


const auth = firebase.auth()
auth.onAuthStateChanged((user)=>{
  if(user){
    location.replace("signin.html");
  }
});

  function login() {
    const email = document.querySelector("#email");
    const password = document.querySelector("password");
    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
  



//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       var uid = user.email;
//       alert("Active User" + email);
//       // ...
//     } else {
//         alert("No Active User Found")
//       // User is signed out
//       // ...
//     }
//   });