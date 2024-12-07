import "../style.css"
import { NavigationBar } from "./navigationBarView"

export function LoginView(props) {
  return(
    <div>
      <NavigationBar/>
      <div className="body">
      <h1 className="title">Get to The Point!</h1>
        <h2>Please log in to continue</h2>
        <form className="login">
          <input className="input" type="text" id="username" label="username" placeholder="username"/>
          <input className="input" type="password" id="password" label="password" placeholder="password"/>
          <button onClick={onLoginClickACB} className="button" type="submit" label="login">Login</button>
        </form>
      </div>
    </div>
    
  )
}

function onLoginClickACB(){
  // TO DO add login functionality here
  window.location.hash="#/home";
}