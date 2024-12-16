import Markdown from 'react-markdown'

// this markdown should be what is returned from the API.
const markdown = '# Hello, *World*!'

export function SummaryView(props){
    return (
        <div className="summary">
            <Markdown>{markdown}</Markdown>
        </div>
    );
}