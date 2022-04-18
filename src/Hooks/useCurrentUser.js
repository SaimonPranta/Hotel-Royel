import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";


const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState({})
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getDatabase();
    const dbRef = ref(getDatabase());

    useEffect(() => {
        const getDataFromDatabase = (userId) => {
            const newUser = {
                email: "",
                message: "",
                password: "",
                phoneNumber: "",
                username: ""
            }
            get(child(dbRef, `users/${userId}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const dbUser = snapshot.val()
                    newUser.email = dbUser.email
                    newUser.username = dbUser.username
                    newUser.phoneNumber = dbUser.phoneNumber
                    newUser.password = dbUser.password
                    newUser.message = dbUser.message
                    setCurrentUser(newUser)

                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid
                getDataFromDatabase(uid)

            }
        })

    }, [])
    return { currentUser }
};

export default useCurrentUser;