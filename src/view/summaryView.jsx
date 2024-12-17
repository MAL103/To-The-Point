export function SummaryView(props){
    return (
        <div className="summary">
            <h1>Summary View</h1>
            <h2>Key concepts</h2>
            <h2>Summary</h2>
            <p></p>
            {props.summaryId !==null && props.summaries && props.summaries[props.summaryId] ? (
            <div>
                <p>{props.summaries[props.summaryId].summary}</p>
            </div>
            ) : (
            <p>Select a summary</p>
            )}
        </div>
    );
}