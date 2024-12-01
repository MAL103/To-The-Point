export function ExampleView(props){
    return (
        <div>
            <h1>Example View</h1>
            <p>This is an example view in the MVP</p>
            <p> {props.exampleData} </p>
        </div>
    );
}