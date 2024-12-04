import {AuthView} from "../view/authView.jsx";
import {observer} from "mobx-react-lite";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthPresenter = observer(function AuthPresenter(props){

    function authChangedACB(){
        onAuthStateChanged(auth, (user)=>{
            if(user){
                console.log('user logged in!', user.email, user.uid);
                props.model.setCurrentUserId(user.uid);
            }
            else{
                props.model.setCurrentUserId(null);
                console.log('error in log in');
            }
        })
    }

    function clickLogInACB(mail, password){
        signInWithEmailAndPassword(auth, mail, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('sign in success', user);

            authChangedACB();
        })
        .catch((error) => {
            console.log('error signing up', error);
        })
    }

    function clickSignUpACB(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('sign up success', user);
        })
        .catch((error) => {
            console.log('error signing up', error);
        })
    }
    return <AuthView exampleData={props.model.exampleData} onLogin={clickLogInACB} onSignUp={clickSignUpACB}/>
})

export {AuthPresenter};