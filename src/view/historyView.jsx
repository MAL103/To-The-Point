import "../style.css"

export function HistoryView(props) {
    function historyRowCB(row){
        return <li>Key Concept</li>
    }
    return (<div class="sidebar">
        <h2>Article History</h2>
        <ul>
            props.map(historyRowCB)
        </ul>
    </div>);
}
