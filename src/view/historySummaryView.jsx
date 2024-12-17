import { HistoryView } from "./historyView";
import { SummaryView } from "./summaryView";
export function HistorySummaryView(props){
    return (
        <div className="container">
            {HistoryView}
            {SummaryView}
        </div>
    );
}