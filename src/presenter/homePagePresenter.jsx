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

    const promiseState = props.model.currentSummaryPromiseState;
    const isLoading = !promiseState.data && !promiseState.error && promiseState.promise;

    return (
        <HomePageView
            setUrl={setModelUrl}
            onSummarizeClick={summarizeClickACB}
            error={promiseState.error}
            loading={isLoading}
        />
    );
});

export {HomePagePresenter};

