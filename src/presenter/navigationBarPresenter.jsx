// example presenter for the ExampleView
import { NavigationBar } from "../view/navigationBarView";
import {observer} from "mobx-react-lite";

const NavigationBarPresenter = observer(function NavigationBarPresenter(props){ // observer is a HOC that makes the component reactive
    
    return <NavigationBar currentUserId={props.model.currentUserId}/>
})

export {NavigationBarPresenter}; // export the presenter