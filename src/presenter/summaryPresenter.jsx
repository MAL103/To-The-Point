import {SummaryView} from "../view/summaryView.jsx";
import {observer} from "mobx-react-lite";



const SummaryPresenter = observer(function SummaryPresenter(props){ // observer is a HOC that makes the component reactive
    return <SummaryView />
})

export {SummaryPresenter}; // export the presenter