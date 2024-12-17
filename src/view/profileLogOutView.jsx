export function ProfileLogOutView(props){
    function logOutClickACB(){
        props.onLogOut();
    }
    
    return (
        <div className="body">
            <h1>Your Profile</h1>
            <h2>Email: {props.email}</h2>
            <button className="loginButton" type="submit" onClick={logOutClickACB}>Log Out</button>
        </div>
    );
}