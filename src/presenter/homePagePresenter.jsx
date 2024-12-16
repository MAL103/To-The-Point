import { summarizeContent } from "../util/summarizeContent.js";
import {useState} from "react"
import { fetchUrlContent } from "../util/fetchUrlContent"
import {HomePageView} from "../view/homePageView.jsx";
import {observer} from "mobx-react-lite";

const HomePagePresenter = observer(function HomePagePresenter(props){
    const [url, setUrl] = useState("");

    function setModelUrl(url) {
        props.model.url=url;
        console.log(props.model.url);
    }

    function summarizeClickACB() {
        props.model.doSummarize(props.model.url)
        const content = fetchUrlContent("https://www.theguardian.com/world/live/2024/dec/16/germany-parliament-no-confidence-olaf-scholz-chancellor-latest-updates")
        content.then(summarizeContent).then((data)=>console.log(data));

        console.log();
    }

    return <HomePageView setUrl={setModelUrl} onSummarizeClick={summarizeClickACB} exampleData={props.model.exampleData} />
})

export {HomePagePresenter};

