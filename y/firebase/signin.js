import {app} from './firebase.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

const auth = getAuth(app);

const email = document.querySelector('#email')
const password = document.querySelector('#password')
let signInBtn = document.querySelector('#login')


  signInBtn.addEventListener('click', async (e) => {
    console.log(email.value)
    console.log(password.value)
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      localStorage.setItem('user-email',email.value)
      const user = userCredential.user.uid;
      console.log(`logged in as ${user}`)
      window.location='index.html'
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      document.querySelector('#comment').textContent=errorCode
      // alert(errorMessage)
    });
  }) 

