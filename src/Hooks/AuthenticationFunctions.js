import { firebaseConfig } from "./firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";


const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signUpHandler = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage
            // ..
        });
}
