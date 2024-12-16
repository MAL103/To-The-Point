import "../style.css"

export function HistoryView(props) {
    function summariesRenderingACB(summary){
        return (
            <tr key={summary.id}>
                <td >{summary.title}</td>
            </tr>
        );
    }
    return (<div className="sidebar">
        <h2 className = "historyTitle">Article History</h2>
        <table>
          <tbody>
            {(props.summaries).map(summariesRenderingACB)}
          </tbody>
        </table>
    </div>);
}
