import './App.css';
import {ExamplePresenter} from "./presenter/examplePresenter";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

function App(props) {

    function makeRouter(props) {
        return createBrowserRouter([
            {
                "path": "/",
                "element": <ExamplePresenter model={props.model}/>
            },
        ]);
    }

    return (
        <RouterProvider router={makeRouter(props)}/>
    );
}

export default App;
