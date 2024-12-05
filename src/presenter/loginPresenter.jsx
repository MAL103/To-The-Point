import {LoginView} from "../view/loginView.jsx";
import {observer} from "mobx-react-lite";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

//move from here later
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPresenter = observer(function LoginPresenter(props){

  function enterEmailACB(email){
    props.model.setEmail(email);
  }

  function enterPasswordACB(pass){
      props.model.setPassword(pass);
  }

  function authChangedACB(){
    onAuthStateChanged(auth, (user) => {
      if(user){
        console.log('user logged in', user.email, user.uid);
        props.model.setCurrentUserId(user.uid);
        console.log('now the currentUserId is', props.model.currentUserId)
      }
      else{
        console.log('error loggin in');
        props.model.setCurrentUserId(null);
      }
    })
  }

  function loginACB(){
    signInWithEmailAndPassword(auth, props.model.email, props.model.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('sign in success', user);
        authChangedACB()
      })
      .catch((error) => {
        console.log('error loggin in', error);
      })
  }

  function signupACB(){
  createUserWithEmailAndPassword(auth, props.model.email, props.model.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('sign up success', user);
    })
    .catch((error) => {
      console.log('error signin up', error);
    })
  }

  // TO DO - connect the model and put actual data in here
    return <LoginView onEmailChange={enterEmailACB} onPasswordChange={enterPasswordACB} onLogin={loginACB} onSignup={signupACB}/>
})

export {LoginPresenter};