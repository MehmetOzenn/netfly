import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDAUXMdp3Xw3qjkUmQFTvoqFO-y5d2waBo",
  authDomain: "netfly-8b493.firebaseapp.com",
  projectId: "netfly-8b493",
  storageBucket: "netfly-8b493.firebasestorage.app",
  messagingSenderId: "878579801226",
  appId: "1:878579801226:web:3284061b1e7d5956e5a173"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password) => {
    try{
        const response  =   await createUserWithEmailAndPassword(auth, email, password);
        const user      =   response.user;
        await addDoc(collection(db, "user"), {
            uid:user.uid,
            name,
            authProvide:"local",
            email
        })
    }catch(err){
            console.log(err)
            toast.error(err.code.split('/')[1].split('-').join(' '))
    }
}

const login = async (email, password) => {
    try{    
        const res = await signInWithEmailAndPassword(auth, email, password)
    }catch(err){
        console.log(err)
        toast.error(err.code.split('/')[1].split('-').join(' '))
    }
}

const logOut = async () => {
    signOut(auth);
}

export {auth, db, login, signUp, logOut}