import {observer} from "mobx-react-lite";
import { HomePageView } from "../view/homePageView.jsx";



const HomePagePresenter = observer(function HomePagePresenter(props){
    return <HomePageView userId={props.model.currentUserId} />
})

export {HomePagePresenter};