// example presenter for the ExampleView
import { HistoryView } from '../view/historyView';
import { SummaryView } from '../view/summaryView';
import {observer} from "mobx-react-lite";



const HistorySummaryPresenter = observer(function HistorySummaryPresenter(props){ 
    function changeSummaryACB(id){
        props.model.setCurrentSummaryId(id);
    }
    return (
        <div className="sideBarSummarycontainer">
            <div className="sidebar">
                <HistoryView summaries={props.model.summaries} summaryId={props.model.currentSummaryId} onSummarySelect={changeSummaryACB}/>
            </div>
            <div className="summaryView">
                <SummaryView model={props.model} summaries={props.model.summaries} summaryId={props.model.currentSummaryId}/>
            </div>
        </div>
    )
})

export {HistorySummaryPresenter}; // export the presenter