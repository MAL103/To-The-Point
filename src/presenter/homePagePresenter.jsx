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

    function summarizeContent(url) {
        // should the model be coming into play here
        summarizeContent(fetchUrlContent(url))
    }

    return <HomePageView setUrl={setModelUrl} summarizeContent={summarizeContent} exampleData={props.model.exampleData} />
})

export {HomePagePresenter};