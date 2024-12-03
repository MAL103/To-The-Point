import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HomePagePresenter } from './presenter/homePagePresenter';

function App(props) {

    function makeRouter(props) {
        return createBrowserRouter([
            {
                "path": "/",
                "element": <HomePagePresenter model={props.model}/>
            },
        ]);
    }

    return (
        <RouterProvider router={makeRouter(props)}/>
    );
}

export default App;
