  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyA9isF_GvCXg91fFWEcm9AaH-GawrkKKU4",
    authDomain: "catering-9496e.firebaseapp.com",
    databaseURL: "https://catering-9496e-default-rtdb.firebaseio.com",
    projectId: "catering-9496e",
    storageBucket: "catering-9496e.appspot.com",
    messagingSenderId: "982629801002",
    appId: "1:982629801002:web:93117f2bf175443c75f753"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase(app);
export default app;
