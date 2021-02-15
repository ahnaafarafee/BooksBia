import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBAl-C7_ouJYhK-OHIMaT_xZ-pp0J2yWz8",
  authDomain: "booksiba-28d4a.firebaseapp.com",
  projectId: "booksiba-28d4a",
  storageBucket: "booksiba-28d4a.appspot.com",
  messagingSenderId: "554423034832",
  appId: "1:554423034832:web:02378dcc2276ffa6d3cfd5",
  measurementId: "G-X0J5863QQW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in firebaseConfig) {
      firebase.analytics();
    }
  }
}

export default firebase;
