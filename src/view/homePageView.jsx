import { NavigationBar } from "./navigationBarView"
import "../style.css"

export function HomePageView(props) {
  return(
    <div>
      <NavigationBar/>
      <div className="body">
      <h1 className="title">Get to The Point!</h1>
        <h2>Get the key concepts of your news articles</h2>
        <input></input>
      </div>
    </div>
  )
}