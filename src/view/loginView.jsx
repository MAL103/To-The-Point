import "../style.css"

export function LoginView(props) {

  function handlerEmailACB(event){
    props.onEmailChange(event.target.value);
  }

  function handlerPasswordACB(event){
    props.onPasswordChange(event.target.value);
  }

  function onLoginClickACB(event){
    event.preventDefault();
    props.onLogin();
  }

  function onSignupClickACB(event){
    event.preventDefault();
    props.onSignup();
  }
  return(
    <div>
      <div className="body">
      <h1 className="title">get to <span className="the">the</span> point</h1>
        <h2>Please log in or sign up to continue</h2>
        <form className="login">
          <input onChange={handlerEmailACB} className="loginInput" type="text" id="username" label="username" placeholder="email"/>
          <input onChange={handlerPasswordACB} className="loginInput" type="password" id="password" label="password" placeholder="password"/>
          {props.errorMessage && <p className="errorMessage">{props.errorMessage}</p>}
          <div className="loginButtonGroup">
            <button onClick={onLoginClickACB} className="button" type="submit" label="login">Login</button>
            <button onClick={onSignupClickACB} className="button" type="submit" label="login">Signup</button>
          </div>
        </form>
      </div>
    </div>
    
  )
}