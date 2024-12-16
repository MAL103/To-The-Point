import "../style.css"

export function HistoryView(props) {
    /*function selectSummaryACB(){
        props.onSummarySelect();
    }*/

    function summariesRenderingACB(summary){
        return (
            <tr key={summary.id}>
                <td >{summary.title}</td>
            </tr>
        );
    }
    return (
    <div>
    <div className="sidebar">
        <h2 className = "historyTitle">Article History {props.summaryId}</h2>
        <table>
          <tbody>
            {(props.summaries).map(summariesRenderingACB)}
          </tbody>
        </table>
    </div>
    <div>
    {props.summaryId && props.summaries && props.summaries[props.summaryId] ? (
        <div>
            <h2>{props.summaries[props.summaryId].title}</h2>
            <p>{props.summaries[props.summaryId].summary}</p>
        </div>
    ) : (
        <p>Select a summary</p>
    )}
    </div>
    </div>
    );
}
