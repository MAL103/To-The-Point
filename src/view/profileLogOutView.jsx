export function ProfileLogOutView(props){
    return (
        <div className="profileContainer">
            <h1>your profile</h1>
            <p className="profileInfo">Email: {props.email}</p>
            <button className="loginButton" type="submit">Log Out</button>
        </div>
    );
}