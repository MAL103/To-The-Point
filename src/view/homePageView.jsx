import { NavigationBar } from "./navigationBarView"
import "../style.css"

export function HomePageView(props) {
  return(
    <div>
      <NavigationBar/>
      <div className="body">
        <h1 className="title">Get to The Point!</h1>
        <h2>Please log in to continue</h2>
        <form className="login">
          <input className="input" type="text" id="username" label="username" placeholder="username"/>
          <input className="input" type="password" id="password" label="password" placeholder="password"/>
          <button className="button" type="submit" label="login">Login</button>
        </form>
        
      </div>
      
    </div>
    
  )
}