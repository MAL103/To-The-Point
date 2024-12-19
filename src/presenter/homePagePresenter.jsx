// import { summarizeContent } from "../util/summarizeContent.js";
// import { fetchUrlContent } from "../util/fetchUrlContent"
import {HomePageView} from "../view/homePageView.jsx";
import {observer} from "mobx-react-lite";
import { useEffect } from "react";
const HomePagePresenter = observer(function HomePagePresenter(props){
    
    useEffect(() => {
        if (props.model.currentSummaryPromiseState.data) {
            window.location.hash="#/history";
            props.model.resetCurrentSummaryPromiseState();
        }
        // eslint-disable-next-line
    }, [props.model.currentSummaryPromiseState.data]); //just ignored the warning bc it was right

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
                //return <div>Error: {promiseStatus.error}</div>;
                const errorMessage =
                promiseStatus.error instanceof Error
                    ? promiseStatus.error.message
                    : String(promiseStatus.error);
                return <div>Error: {errorMessage}</div>;

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

