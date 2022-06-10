// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJBVGnmIcKCDBHehZL2ts3xjehJSHy8D4",
  authDomain: "e-commerce-947a4.firebaseapp.com",
  projectId: "e-commerce-947a4",
  storageBucket: "e-commerce-947a4.appspot.com",
  messagingSenderId: "567510158760",
  appId: "1:567510158760:web:1deb3447dac43f80b0a19d",
  measurementId: "G-VWS6EL1HWZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);