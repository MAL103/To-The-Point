import "../style.css"
import { fetchUrlContent } from "../util/fetchUrlContent"
import {useState} from "react"
import { summarizeContent } from "../util/summarizeContent";

export function HomePageView(props) {

  // is this ok to be doing? should i be using the presenter??
  const [url, setUrl] = useState("");

  function summariseContentACB() {
    console.log(url);
    console.log(fetchUrlContent(url));
    console.log(summarizeContent(fetchUrlContent(url)));
  }

  return(
    <div>
      <div className="body">
        <h1 className="title">get to <span className="the">the</span> point</h1>
        <h2>Get the key concepts of your news articles</h2>
        <div className="searchContainer">
          <input
            className="inputBar"
            placeholder="Paste a URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          >
          </input>
          <button className="search-button" onClick={summariseContentACB}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}