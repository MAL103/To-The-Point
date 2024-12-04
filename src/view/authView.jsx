import { NavigationBar } from "./navigationBarView"
import "../style.css"
import { useState } from "react";

export function AuthView(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlerSetEmail(event){
    setEmail(event.target.value);
  }
  function handlerSetPassword(event){
    setPassword(event.target.value);
  }

  function handlerLoginACB(event){
    event.preventDefault();
    props.onLogin(email, password);
  }

  function handlerSignUpACB(event){
    event.preventDefault();
    props.onSignUp(email,password);
  }

  return(
    <div>
      <NavigationBar/>
      <div className="body">
        <h1 className="title">Get to The Point!</h1>
        <h2>Please log in to continue</h2>
        <form className="login">
          <input className="input" type="text" id="username" label="username" placeholder="username"  onChange={handlerSetEmail}/>
          <input className="input" type="password" id="password" label="password" placeholder="password"  onChange={handlerSetPassword}/>
          <button className="button" type="submit" label="login" onClick={handlerLoginACB}>Log In</button>
          <button className="button" type="submit" label="signup" onClick={handlerSignUpACB}>Sign Up</button>
        </form>
        
      </div>
      
    </div>
    
  )
}