import {LoginView} from "../view/loginView.jsx";
import {observer} from "mobx-react-lite";
import {summarizeContent} from "../util/summarizeContent";

const LoginPresenter = observer(function LoginPresenter(props){
  // TO DO - connect the model and put actual data in here
   summarizeContent("here is some example content. Syrian Arab Republic, 2019. " +
       "The Syrian Arab Republic is a country in Western Asia, bordering Lebanon, Turkey, Iraq, Jordan").then((data) => {
           console.log(data);
       }
   );

    return <LoginView/>
})

export {LoginPresenter};