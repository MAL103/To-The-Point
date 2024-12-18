import Markdown from "react-markdown";

export function SummaryView(props){
    return (
        <div className="summary">
            <p></p>
            {props.summaryId !==null && props.summaries && props.summaries[props.summaryId] ? (
            <div>
                <Markdown>{props.summaries[props.summaryId].summary}</Markdown>
                <button class="button"><a className="link" href={props.model.url}>Read Full Article</a></button>
            </div>
            ) : (
            <p>Select a summary</p>
            )}
        </div>
    );
}