<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAmDx2_w87sEfwA3vnFmbbrUuOnV0lN-uw",
    authDomain: "afreen-practice.firebaseapp.com",
    projectId: "afreen-practice",
    storageBucket: "afreen-practice.firebasestorage.app",
    messagingSenderId: "519535988382",
    appId: "1:519535988382:web:708c0828df5e6f02ebf58f",
    measurementId: "G-LMQXL7R7TL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

document.getElementById('login-form').addEventListener('submit'), function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value
    const errorMessage = document.getElementById('error-message');}
  


    // Clear any previous error messages
    errorMessage.textContent = '';

    // Basic validation
    if (!email || !password) {
        errorMessage.textContent = "Both fields are required!";
        return;
    } 

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email!";
        return;
    }

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function myfunction(){if (email === "user@example.com" && password === "password123") {
    // Simulate successful sign-in
    alert("Sign In Successful!");
    window.location.href = "./welcome.html"; // Redirect to the next page
} else {
    errorMessage.textContent = "Invalid email or password!";
}}









