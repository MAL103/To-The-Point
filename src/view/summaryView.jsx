import Markdown from 'react-markdown'

const markdown = '# Hello, *World*!'

export function SummaryView(props){
    return (
        <div className="summary">
            <Markdown>{markdown}</Markdown>
        </div>
    );
}