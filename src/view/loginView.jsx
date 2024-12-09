import "../style.css"
import { NavigationBar } from "./navigationBarView"

export function LoginView(props) {
  return(
    <div>
      <NavigationBar/>
      <div className="body">
      <h1 className="title">get to <span className="the">the</span> point</h1>
        <h2>Please log in to continue</h2>
        <form className="login">
          <input className="loginInput" type="text" id="username" label="username" placeholder="username"/>
          <input className="loginInput" type="password" id="password" label="password" placeholder="password"/>
          <button onClick={onLoginClickACB} className="loginButton" type="submit" label="login">Login</button>
        </form>
      </div>
    </div>
    
  )
}

function onLoginClickACB(){
  // TO DO add login functionality here
  window.location.hash="#/home";
}