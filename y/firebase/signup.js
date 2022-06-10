import {app} from './firebase.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';
const auth = getAuth(app);

const name = document.querySelector('#user_name')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
let signUpbtn = document.querySelector('#register')


  signUpbtn.addEventListener('click',  (e) => {
    console.log(email.value)
    console.log(password.value)
    e.preventDefault()
     createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        // Signed in 
        localStorage.setItem('user-email',email.value)
 
      //  addData()
      
        alert(`Account Created`)

        window.location='index.html'

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorMessage)
        document.querySelector('#comment').textContent=errorCode
        // ..
      })
addData()
  }) 




  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  let addData =  () => {
    try {

      const enteredData = doc(db, "users",email.value)
      const userdata = {
        name: name.value,
        email: email.value,
        cart:[]
      }
     setDoc(enteredData, userdata)
      console.log("Document written with ID: ", userdata.email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }