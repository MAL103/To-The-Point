// example presenter for the ExampleView
import { HistoryView } from '../view/historyView';
import { SummaryView } from '../view/summaryView';
import {observer} from "mobx-react-lite";



const HistorySummaryPresenter = observer(function HistorySummaryPresenter(props){ 
    //unsure about this
    function changeSummaryACB(id){
        props.model.setCurrentSummaryId(id);
    }
    return (
        <div className="container">
            <HistoryView summaries={props.model.summaries} summaryId={props.model.currentSummaryId} onSummarySelect={changeSummaryACB}/>
            <SummaryView model={props.model}/>
        </div>
    )
})

export {HistorySummaryPresenter}; // export the presenter