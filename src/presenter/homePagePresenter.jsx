import {HomePageView} from "../view/homePageView.jsx";
import {observer} from "mobx-react-lite";
import {fetchUrlContent} from "../util/fetchUrlContent";
import {summarizeContent} from "../util/summarizeContent";



const HomePagePresenter = observer(function HomePagePresenter(props){
    const content = fetchUrlContent("https://www.theguardian.com/world/live/2024/dec/16/germany-parliament-no-confidence-olaf-scholz-chancellor-latest-updates")
    content.then(summarizeContent).then((data)=>console.log(data));

    console.log();
    return <HomePageView exampleData={props.model.exampleData}/>
})

export {HomePagePresenter};

