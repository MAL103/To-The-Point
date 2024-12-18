// import { summarizeContent } from "../util/summarizeContent.js";
// import { fetchUrlContent } from "../util/fetchUrlContent"
import {HomePageView} from "../view/homePageView.jsx";
import {observer} from "mobx-react-lite";
import { useEffect } from "react";
const HomePagePresenter = observer(function HomePagePresenter(props){
    
    useEffect(() => {
        if (props.model.currentSummaryPromiseState.data) {
            //navigate('/history');
            console.log('here it is supposed to navigate to history')
            window.location.hash="#/history";
            props.model.resetCurrentSummaryPromiseState();
            console.log('now the state is', props.model.currentSummaryPromiseState)
        }
    }, [props.model.currentSummaryPromiseState.data]); //this has warning but i cannot solve them because that would modify the logic

    function setModelUrl(url) {
        props.model.url = url;
        console.log(props.model.url);
    }

    function summarizeClickACB() {
        props.model.doSummarize(props.model.url);
    }

    function summaryPromiseRendering(promiseStatus) {
        if (!promiseStatus.data) {
            if (!promiseStatus.promise) {
                return null;
            } else if (!promiseStatus.error) {
                return <img src="https://brfenergi.se/iprog/loading.gif" alt="loading" />;
            } else {
                return <div>Error: {promiseStatus.error}</div>;
            }
        }
        return null;
    }

    return (
        <div>
            <HomePageView setUrl={setModelUrl} onSummarizeClick={summarizeClickACB}/>
            {summaryPromiseRendering(props.model.currentSummaryPromiseState)}
        </div>
    );
});

export {HomePagePresenter};

