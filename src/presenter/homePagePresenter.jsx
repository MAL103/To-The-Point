import {HomePageView} from "../view/homePageView.jsx";
import {observer} from "mobx-react-lite";



const HomePagePresenter = observer(function HomePagePresenter(props){
    return <HomePageView exampleData={props.model.exampleData} summaries = {props.model.summaries}/>
})

export {HomePagePresenter};