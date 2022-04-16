import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, deleteUser, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();
console.log(auth.currentUser)
export const signUpHandler = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            const user = userCredential.user;
            return user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage
        })
}
export const writeUserData = (userId, name, email, phoneNumber, password, message) => {
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        message: message
    })
}
export const logInHandler = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export const removeUser = () => {
    return signOut(auth)
        .then(() => {
            return "successfully log out"
        })
        .catch((error) => {
            console.log(error)
        });
}