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

    return (<div className="sidebar">
        <h2>Article History</h2>
        <table>
          <tbody>
            {(props.summaries).map(summariesRenderingACB)}
          </tbody>
        </table>
    </div>);
}
