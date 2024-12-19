export function NavigationBar(props){

  return (
      <div className="navigationBar">
          <button className="titleButton" onClick={returnHomeACB}>
            <h1 className="navTitle">TO <span className="the">THE</span> POINT</h1>
          </button>
          {props.currentUserId && (
            <div className="buttonGroup">
              <button label="history" className="navIcon" onClick={navigateToHistoryACB}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,0A11.972,11.972,0,0,0,4,3.073V1A1,1,0,0,0,2,1V4A3,3,0,0,0,5,7H8A1,1,0,0,0,8,5H5a.854.854,0,0,1-.1-.021A9.987,9.987,0,1,1,2,12a1,1,0,0,0-2,0A12,12,0,1,0,12,0Z"/>
                  <path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"/>
                </svg>
              </button>
              <button label="home" className="navIcon" onClick={returnHomeACB}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 319.841c-35.346 0-64 28.654-64 64v128h128v-128c0-35.346-28.654-64-64-64z"/>
                  <path d="M362.667 383.841v128H448c35.346 0 64-28.654 64-64V253.26c0-11.083-4.302-21.733-12.011-29.696l-181.29-195.99C287.711-6.037 233.723-8.162 199.113 23.826L12.395 223.5C4.453 231.496 0 242.31 0 253.58v194.261c0 35.346 28.654 64 64 64h85.333v-128c0.399-58.172 47.366-105.676 104.073-107.044C312.01 275.383 362.22 323.696 362.667 383.841z"/>
                </svg>
              </button>
              <button label="profile" onClick={navigateToProfileACB} className="navIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="custom-icon"
                >
                  <g>
                    <circle cx="256" cy="128" r="128" />
                    <path d="M256,298.667c-105.99,0.118-191.882,86.01-192,192C64,502.449,73.551,512,85.333,512h341.333c11.782,0,21.333-9.551,21.333-21.333C447.882,384.677,361.99,298.784,256,298.667z" />
                  </g>
                </svg>
              </button>
          </div>
          )}
      </div>
  );
}

function returnHomeACB() {
  window.location.hash="#/home";
}

function navigateToHistoryACB() {
  window.location.hash="#/history";
}

function navigateToProfileACB() {
  window.location.hash="#/profile";
}