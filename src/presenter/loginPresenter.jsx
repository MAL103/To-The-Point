import {LoginView} from "../view/loginView.jsx";
import {observer} from "mobx-react-lite";

const LoginPresenter = observer(function LoginPresenter(props){
  // TO DO - connect the model and put actual data in here
    return <LoginView/>
})

export {LoginPresenter};