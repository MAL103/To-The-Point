export function ProfileLogOutView(props){
    function logOutClickACB(){
        props.onLogOut();
    }
    
    return (
        <div className="profileContainer">
            <h1>your profile</h1>
            <p className="profileInfo">Email: {props.email}</p>
            <button className="loginButton" type="submit" onClick={logOutClickACB}>Log Out</button>
        </div>
    );
}