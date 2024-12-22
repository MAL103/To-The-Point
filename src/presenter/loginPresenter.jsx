import {LoginView} from "../view/loginView.jsx";
import {observer} from "mobx-react-lite";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebaseModel.js";
//import {summarizeContent} from "../util/summarizeContent";


const auth = getAuth(app);

const LoginPresenter = observer(function LoginPresenter(props){

  function enterEmailACB(email){
    props.model.setEmail(email);
  }

  function enterPasswordACB(pass){
      props.model.setPassword(pass);
  }

  function loginACB(){
    signInWithEmailAndPassword(auth, props.model.email, props.model.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('sign in success', user);
      })
      .catch((error) => {
        console.log('error logging in', error);
        props.model.setCurrentErrorMessage(error.message);
      })
  }

  function signupACB(){
  createUserWithEmailAndPassword(auth, props.model.email, props.model.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('sign up success', user);
    })
    .catch((error) => {
      console.log('error signing up', error);
      props.model.setCurrentErrorMessage(error.message);
    })
  }
    return <LoginView errorMessage={props.model.errorMessage} onEmailChange={enterEmailACB} onPasswordChange={enterPasswordACB} onLogin={loginACB} onSignup={signupACB}/>
})

export {LoginPresenter};