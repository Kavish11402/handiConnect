// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARqjb80Oru2l9ZfkqAbRE33qI7oOh2jVQ",
    authDomain: "handiconnect-53d03.firebaseapp.com",
    projectId: "handiconnect-53d03",
    storageBucket: "handiconnect-53d03.appspot.com",
    messagingSenderId: "182455390057",
    appId: "1:182455390057:web:6d9612ce8040c6d84537f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//exporting Firestore Reference
export const db = getFirestore(app)

//exporting Authentication Reference
export const firebaseAuthentication = getAuth(app)

//exporting Storage Reference
export const storage = getStorage(app)