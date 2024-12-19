import "../style.css"

export function HistoryView(props) {

    function selectSummaryACB(id){
        props.onSummarySelect(id-1);
    }

    function summariesRenderingACB(summary){
        const isSelected = props.summaryId === summary.id-1;
        return (
            <tr key={summary.id} className={isSelected ? "selected" : ""}>
                <td onClick={() => selectSummaryACB(summary.id)}>{summary.title}</td>
            </tr>
        );
    }
    return (
    <div className="historyViewContainer">
        <div className="historyHeader">
            <h2 className="historyTitle">history</h2>
            <button className="newSummaryButton" onClick={onNewSummaryACB}>New Summary</button>
        </div>

        <table className="historyTable">
            <tbody>
            {props.summaries.map(summariesRenderingACB)}
            </tbody>
        </table>
    </div>
    );
}

function onNewSummaryACB(){
    window.location.hash = "#/home";
}
