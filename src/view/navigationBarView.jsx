export function NavigationBar(props){

  function handlerHistoryTab(){
    window.location.hash='#/example';
  }
  function handlerLogOutACB(){
    props.onLogOut();
  }
  return (
      <div className="navigationBar">
          <h1 className="navTitle">TO <span className="the">THE</span> POINT</h1>
          {props.currentUserId && (
            <div className="buttonGroup">
              <button onClick={handlerHistoryTab}>HISTORY</button>
              <button>PROFILE</button>
              <button onClick={handlerLogOutACB}>LOGOUT</button>
          </div>
          )}
          
      </div>
  );
}