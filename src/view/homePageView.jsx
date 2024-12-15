import "../style.css"

export function HomePageView(props) {
  return(
    <div>
      <div className="body">
        <h1 className="title">get to <span className="the">the</span> point</h1>
        <h2>Get the key concepts of your news articles</h2>
        <div className="searchContainer">
          <input
            className="inputBar"
            placeholder="Paste a URL here"
            onChange={(e) => props.setUrl(e.target.value)}
          >
          </input>
          <button className="search-button" onClick={() => props.setModelUrl}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}