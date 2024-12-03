export function NavigationBar(props){
  return (
      <div className="navigationBar">
          <h1 className="navTitle">TO <span className="the">THE</span> POINT</h1>
          <div className="buttonGroup">
            <button>HISTORY</button>
            <button>PROFILE</button>
            <button>LOGOUT</button>
          </div>
      </div>
  );
}