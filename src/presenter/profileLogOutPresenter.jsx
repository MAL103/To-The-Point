import {ProfileLogOutView} from "../view/profileLogOutView.jsx";
import {observer} from "mobx-react-lite";



const ProfileLogOutPresenter = observer(function ProfileLogOutPresenter(props){ // observer is a HOC that makes the component reactive
    return <ProfileLogOutView email={props.model.email} currentUserId = {props.model.currentUserId}/>
})

export {ProfileLogOutPresenter}; // export the presenter