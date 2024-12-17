import "../style.css"

export function HistoryView(props) {

    function selectSummaryACB(id){
        props.onSummarySelect(id-1);
    }

    function summariesRenderingACB(summary){
        return (
            <tr key={summary.url} >
                <td onClick={() => selectSummaryACB(summary.id)}>{summary.title}</td>
            </tr>
        );
    }
    return (
    <div>
    <div className="sidebar">
        <h2 className = "historyTitle">Article History</h2>
        <table>
          <tbody>
            {(props.summaries).map(summariesRenderingACB)}
          </tbody>
        </table>
    </div>
    {/*<div>
    {props.summaryId !==null && props.summaries && props.summaries[props.summaryId] ? (
        <div>
            <h2>{props.summaries[props.summaryId].title}</h2>
            <p>{props.summaries[props.summaryId].summary}</p>
        </div>
    ) : (
        <p>Select a summary</p>
    )}
    </div>*/}
    </div>
    );
}
