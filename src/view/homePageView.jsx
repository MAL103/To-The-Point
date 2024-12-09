import { NavigationBar } from "./navigationBarView"
import "../style.css"

export function HomePageView(props) {
  return(
    <div>
      <NavigationBar/>
      <div className="body">
        <h1 className="title">get to <span className="the">the</span> point</h1>
        <h2>Get the key concepts of your news articles</h2>
        <div className="searchContainer">
          <input className="inputBar" placeholder="Paste a URL here"></input>
          {/* The on click for this button will call API */}
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}