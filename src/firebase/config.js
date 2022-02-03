import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJsrgh6IsitNv1Mzcdjo0ts_Xd68v1pec",
  authDomain: "signup-login-app-d8004.firebaseapp.com",
  projectId: "signup-login-app-d8004",
  storageBucket: "signup-login-app-d8004.appspot.com",
  messagingSenderId: "1009221413074",
  appId: "1:1009221413074:web:0a0dc351153bed21e6250b"
}

initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
