// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUBkSU0hEmXW4d5Cwg2Sl0gCC4L3Wr8To',
  authDomain: 'todoapp-79ad8.firebaseapp.com',
  projectId: 'todoapp-79ad8',
  storageBucket: 'todoapp-79ad8.appspot.com',
  messagingSenderId: '818037579966',
  appId: '1:818037579966:web:d8a1c6c10771a013b0feef',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
