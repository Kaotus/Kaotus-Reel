import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'kaotus-reel.firebaseapp.com',
  projectId: 'kaotus-reel',
  storageBucket: 'kaotus-reel.appspot.com',
  messagingSenderId: '000000000000',
  appId: '1:000000000000:web:kaotus'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
