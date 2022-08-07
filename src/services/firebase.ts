import * as firebase from 'firebase/app';
import * as auth from 'firebase/auth';
import * as store from 'firebase/firestore';

const clientCredentials = {
    apiKey: "AIzaSyAUxrBLHlmZsuQ0NJ6S8M_HUKolyl6V64M",
    authDomain: "booking-barber-7ab01.firebaseapp.com",
    projectId: "booking-barber-7ab01",
    storageBucket: "booking-barber-7ab01.appspot.com",
    messagingSenderId: "879692708520",
    appId: "1:879692708520:web:3cfa6edfbd4855045ae09d",
    measurementId: "G-MYXKMRYHTF"
};

if (!firebase.getApps.length) {
  firebase.initializeApp(clientCredentials);
}

export const firebaseAuth = auth;
export const fireStore = store;

export default firebase;