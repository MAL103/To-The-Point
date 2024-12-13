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
  /*summarizeContent("here is some example content. Syrian Arab Republic, 2019. " +
       "The Syrian Arab Republic is a country in Western Asia, bordering Lebanon, Turkey, Iraq, Jordan").then((data) => {
           console.log(data);
       }
   );*/

    return <LoginView onEmailChange={enterEmailACB} onPasswordChange={enterPasswordACB} onLogin={loginACB} onSignup={signupACB}/>
})

export {LoginPresenter};