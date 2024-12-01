// example presenter for the ExampleView
import {ExampleView} from "../view/exampleView.jsx";
import {observer} from "mobx-react-lite";



const ExamplePresenter = observer(function ExamplePresenter(props){ // observer is a HOC that makes the component reactive
    return <ExampleView exampleData={props.model.exampleData} />
})

export {ExamplePresenter}; // export the presenter