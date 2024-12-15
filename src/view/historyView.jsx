import "../style.css"

export function HistoryView(props) {
    function summariesRenderingACB(summary){
        return (
            <tr key={summary.url}>
                <td >{summary.summary}</td>
                <td >{summary.url}</td>
            </tr>
        );
    }
    function historyRowCB(row){
        return <li>Key Concept</li>
    }
    return (<div className="sidebar">
        <h2>Article History</h2>
        <ul>
            {props.exampleData.map(historyRowCB)}
        </ul>
        <h3>Dummy data persisted from firebase</h3>
        <table>
          <tbody>
            {(props.summaries).map(summariesRenderingACB)}
          </tbody>
        </table>
    </div>);
}
