const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    if (email === "admin@taskhub.com") {
      document.getElementById("admin-panel").style.display = "block";
    }
  } catch (err) {
    alert("خطأ في تسجيل الدخول: " + err.message);
  }
}
