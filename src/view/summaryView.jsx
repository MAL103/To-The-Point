import Markdown from "react-markdown";

export function SummaryView(props){
    return (
        <div className="summary">
            <p></p>
            {props.summaryId !==null && props.summaries && props.summaries[props.summaryId] ? (
            <div>
                <Markdown>{props.summaries[props.summaryId].summary}</Markdown>
            </div>
            ) : (
            <p>Select a summary</p>
            )}
        </div>
    );
}