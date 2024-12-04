import { NavigationBar } from "../view/navigationBarView";
import {observer} from "mobx-react-lite";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth()

const NavigationBarPresenter = observer(function NavigationBarPresenter(props){ // observer is a HOC that makes the component reactive
    
    function logOutACB(){
        signOut(auth).then(() => {
            console.log('sign out successful');
            props.model.setCurrentUserId(null);
          }).catch((error) => {
            console.log('sing out error', error);
          });
    }
    return <NavigationBar currentUserId={props.model.currentUserId} onLogOut={logOutACB}/>
})

export {NavigationBarPresenter}; // export the presenter