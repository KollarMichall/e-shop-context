import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCCtPQDH-saFZ4rMJ-VJU58W96PmhvhemQ",
    authDomain: "e-shop-db-af101.firebaseapp.com",
    projectId: "e-shop-db-af101",
    storageBucket: "e-shop-db-af101.appspot.com",
    messagingSenderId: "892449553697",
    appId: "1:892449553697:web:59f4abf9597f9c68de1260",
    measurementId: "G-053RT45527"
  };

  firebase.initializeApp(firebaseConfig)

  export const createUseProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if (!snapShot.exists) {
      const { displayName, email} = userAuth
      const createdAt = new Date()

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.error(error)
      }
      
    }
    return userRef
  }

  

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase