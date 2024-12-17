// import { summarizeContent } from "../util/summarizeContent.js";
// import { fetchUrlContent } from "../util/fetchUrlContent"
import {HomePageView} from "../view/homePageView.jsx";
import {observer} from "mobx-react-lite";

const HomePagePresenter = observer(function HomePagePresenter(props){

    function setModelUrl(url) {
        props.model.url=url;
        console.log(props.model.url);
    }

    function summarizeClickACB() {
        props.model.doSummarize(props.model.url)
    }

    function summaryPromiseRendering(promiseStatus) {
        if (!promiseStatus.data) {
            if (!promiseStatus.promise) {
                return null;
            } else if (!promiseStatus.error) {
                return <img src="https://brfenergi.se/iprog/loading.gif" alt="loading" />;  //the loader just appears at the bottom could maybe make it appear on the whole view
            } else {
                return <div>Error: {promiseStatus.error}</div>;     //add some error message
            }
        }
        else{   
            window.location.hash = "#/history";     //this part is giving me a warning but works
            props.model.resetCurrentSummaryPromiseState();
            return null;
        }
    }

    //return <HomePageView setUrl={setModelUrl} onSummarizeClick={summarizeClickACB} />
    return(
        <div>
            <HomePageView setUrl={setModelUrl} onSummarizeClick={summarizeClickACB}/>
            {summaryPromiseRendering(props.model.currentSummaryPromiseState)}
        </div>
    )
})

export {HomePagePresenter};

