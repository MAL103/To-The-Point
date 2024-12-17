import { HistoryView } from './historyView';
import { SummaryView } from './summaryView';
export function HistorySummaryView(props){
    return (
        <div className="container">
            <HistoryView summaries={props.model.summaries} summaryId={props.model.currentSummaryId} onSummarySelect={props.onSummarySelect}/>
            <SummaryView model={props.model}/>
        </div>
    );
}