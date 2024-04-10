
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyArwqj37ohFxUlvFP0DtxBNQz3rPwT_a48",
    authDomain: "techwire-360c9.firebaseapp.com",
    projectId: "techwire-360c9",
    storageBucket: "techwire-360c9.appspot.com",
    messagingSenderId: "810837532656",
    appId: "1:810837532656:web:c295d6c002cbe5dbea8735",
    measurementId: "G-PCC983FBCM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  createAccount.addEventListener("click", (e) => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           
          const user = userCredential.user;
          alert("Account created successfully")
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
          
        });
  })