// example presenter for the ExampleView
import { HistorySummaryView } from "../view/historySummaryView";
import {observer} from "mobx-react-lite";



const HistorySummaryPresenter = observer(function HistorySummaryPresenter(props){ // observer is a HOC that makes the component reactive
    return <HistorySummaryView exampleData={props.model.exampleData} />
})

export {HistorySummaryPresenter}; // export the presenter