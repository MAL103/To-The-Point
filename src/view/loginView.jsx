import "../style.css"
import { NavigationBar } from "./navigationBarView"

export function LoginView(props) {

  function handlerEmailACB(event){
    props.onEmailChange(event.target.value);
  }

  function handlerPasswordACB(event){
    props.onPasswordChange(event.target.value);
  }

  function onLoginClickACB(event){
    event.preventDefault();
    props.onLogin();
  }

  function onSignupClickACB(event){
    event.preventDefault();
    props.onSignup();
  }
  return(
    <div>
      <div className="body">
      <h1 className="title">Get to The Point!</h1>
        <h2>Please log in to continue</h2>
        <form className="login">
          <input onChange={handlerEmailACB} className="input" type="text" id="email" label="email" placeholder="email"/>
          <input onChange={handlerPasswordACB} className="input" type="password" id="password" label="password" placeholder="password"/>
          <button onClick={onLoginClickACB} className="button" type="submit" label="login">Login</button>
          <button onClick={onSignupClickACB} className="button" type="submit" label="login">Signup</button>
        </form>
      </div>
    </div>
    
  )
}

/*function onLoginClickACB(){
  // TO DO add login functionality here
  window.location.hash="#/home";
}*/