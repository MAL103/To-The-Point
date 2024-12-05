export function NavigationBar(props){

  function logOutClickACB(){
    props.onLogOut();
  }
  return (
      <div className="navigationBar">
          <h1 className="navTitle">TO <span className="the">THE</span> POINT</h1>
          {props.currentUserId && (
            <div className="buttonGroup">
              <button>HISTORY</button>
              <button>PROFILE</button>
              <button onClick={logOutClickACB}>LOGOUT</button>
          </div>
          )}
      </div>
  );
}