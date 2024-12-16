import { HistoryView } from "../view/historyView";
import {observer} from "mobx-react-lite";
const HistoryPresenter = observer(function HistoryPresenter(props){
    /*function changeSummaryACB(){
        props.model.setCurrentSummaryId(2);
        console.log('now current summaryId is', props.model.currentSummaryId)
    }*/
    return <HistoryView exampleData={props.model.exampleData} summaries = {props.model.summaries} summaryId={props.model.currentSummaryId} />
})

export {HistoryPresenter};