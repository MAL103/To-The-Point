import {LoginView} from "../view/loginView.jsx";
import {observer} from "mobx-react-lite";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebaseModel.js";


const auth = getAuth(app);
import {summarizeContent} from "../util/summarizeContent";

const LoginPresenter = observer(function LoginPresenter(props){

  function enterEmailACB(email){
    props.model.setEmail(email);
  }

  function enterPasswordACB(pass){
      props.model.setPassword(pass);
  }

  /*function authChangedACB(){
    props.model.setCurrentUserId(undefined);
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
  }*/

  function loginACB(){
    signInWithEmailAndPassword(auth, props.model.email, props.model.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('sign in success', user);
        //authChangedACB()
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
    {/*return <LoginView onEmailChange={enterEmailACB} onPasswordChange={enterPasswordACB} onLogin={loginACB} onSignup={signupACB}/>*/}
   summarizeContent("here is some example content. Syrian Arab Republic, 2019. " +
       "The Syrian Arab Republic is a country in Western Asia, bordering Lebanon, Turkey, Iraq, Jordan").then((data) => {
           console.log(data);
       }
   );

    return <LoginView onEmailChange={enterEmailACB} onPasswordChange={enterPasswordACB} onLogin={loginACB} onSignup={signupACB}/>
})

export {LoginPresenter};