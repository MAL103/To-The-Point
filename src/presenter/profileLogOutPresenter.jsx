import {ProfileLogOutView} from "../view/profileLogOutView.jsx";
import {observer} from "mobx-react-lite";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();


const ProfileLogOutPresenter = observer(function ProfileLogOutPresenter(props){ // observer is a HOC that makes the component reactive
    function logOutACB(){
        signOut(auth).then(()=>{
            console.log('sign out successful');
            props.model.setCurrentUserId(null);
            props.model.setCurrentSummaryId(null);
            props.model.resetSummaries();
            props.model.setCurrentErrorMessage("");
        }).catch((error)=>{
            console.log('sign out error', error);
        })
    }

    return <ProfileLogOutView email={props.model.email} currentUserId = {props.model.currentUserId} onLogOut={logOutACB}/>
})

export {ProfileLogOutPresenter}; // export the presenter