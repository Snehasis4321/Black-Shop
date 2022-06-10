import {app} from './firebase.js'
import { getAuth, onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

const auth = getAuth(app);


let signOutbtm=document.querySelector('#logout')
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(`logged in as ${uid}`)
  localStorage.setItem('user_id',uid)
      // ...
    } else {
      // User is signed out
      // ...
      window.location='signin.html'
      alert('Please Sign In To Continue')
      localStorage.removeItem('user-email')
      
      localStorage.removeItem('user_id')
      localStorage.removeItem('count')
      localStorage.removeItem('cart')
    }
  });
 
try{
  signOutbtm.addEventListener('click', async (e) => {
    e.preventDefault()

    await signOut(auth)
  })
}catch(e){

}
  