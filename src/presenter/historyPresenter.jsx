import { HistoryView } from "../view/historyView";
import {observer} from "mobx-react-lite";
const HistoryPresenter = observer(function HistoryPresenter(props){
    function changeSummaryACB(id){
        props.model.setCurrentSummaryId(id);
    }
    return <HistoryView summaries={props.model.summaries} summaryId={props.model.currentSummaryId} onSummarySelect={changeSummaryACB}/>
})

export {HistoryPresenter};