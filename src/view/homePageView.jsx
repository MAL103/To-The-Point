import { NavigationBar } from "./navigationBarView"
import "../style.css"

export function HomePageView(props) {

  return(
    <div>
      <NavigationBar/>
      <div className="body">
        <h1 className="title">Get to The Point!</h1>
        <h2> {props.userId || ''}</h2>
        
      </div>
      
    </div>
    
  )
}