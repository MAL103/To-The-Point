import "../style.css"

export function HomePageView(props) {

  function onSummarizeClickACB() {
    props.onSummarizeClick();
  }

  return (
      <div>
        <div className="body">
          <h1 className="title">
            get to <span className="the">the</span> point
          </h1>
          <h2>Get the key concepts of your news articles</h2>
          {props.loading ? (
              <img
                  src="https://brfenergi.se/iprog/loading.gif"
                  alt="loading img"
                  className="loading-image"
              />
          ) : (
              <div
                  className={
                    props.error
                        ? "searchContainer searchContainer-error"
                        : "searchContainer"
                  }
              >
                <input
                    className={
                      props.error ? "inputBar inputBar-error" : "inputBar"
                    }
                    placeholder="Paste a URL here"
                    onChange={(e) => props.setUrl(e.target.value)}
                />
                <button className="search-button" onClick={onSummarizeClickACB}>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width="20"
                      height="20"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              </div>
          )}
          {props.error ? (
              <p className="inputBar-error-text">
                Some websites block access to websites like To The Point, check if
                your URL is valid or try another one.
              </p>
          ) : null}
        </div>
      </div>
  );

}