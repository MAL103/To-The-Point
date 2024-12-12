export function NavigationBar(props){

  function logOutClickACB(){
    props.onLogOut();
  }
  return (
      <div className="navigationBar">
          <button className="titleButton" onClick={returnHomeACB}>
            <h1 className="navTitle">TO <span className="the">THE</span> POINT</h1>
          </button>
          {props.currentUserId && (
            <div className="buttonGroup">
              <button className="profileIcon">
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
              {/* potentially move this logout button to the profile page */}
              <button onClick={logOutClickACB}>LOGOUT</button>
          </div>
          )}
      </div>
  );
}

function returnHomeACB() {
  window.location.hash="#home"
}