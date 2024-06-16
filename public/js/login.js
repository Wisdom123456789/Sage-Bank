let email = document.getElementById('email')
let password = document.getElementById('password')
let visible = document.getElementById('visible')
let novisible = document.getElementById('novisible')
let incorrect = document.getElementById("incorrect")

const firebaseConfig = {
    apiKey: "AIzaSyDYQzr6lQRSLAkbu1a48gQqc-oOsTrMGlA",
    authDomain: "sage-bank-4af83.firebaseapp.com",
    projectId: "sage-bank-4af83",
    storageBucket: "sage-bank-4af83.appspot.com",
    messagingSenderId: "366173578786",
    appId: "1:366173578786:web:037b2a0e839d927b6d4c7b"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function showPassword() {
    if (password.type == 'password') {
        password.type = 'text'
        visible.style.display = 'none'
        novisible.style.display = 'block'
    } else {
        password.type = 'password'
        visible.style.display = 'block'
        novisible.style.display = 'none'
    }
}


function loginpage() {
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            userPerson = user.email;
            window.location.href = "../html/dashboard.html"
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            incorrect.style.display = "block"
        });
}
