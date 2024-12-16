export function ProfileLogOutView(props){
    return (
        <div className="body">
            <h1>Your Profile</h1>
            <h2>Email: {props.email}</h2>
            <button className="loginButton" type="submit">Log Out</button>
        </div>
    );
}