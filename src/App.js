import './App.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import { HomePagePresenter } from './presenter/homePagePresenter';
import { LoginPresenter } from './presenter/loginPresenter';

function App(props) {

    function makeRouter(props) {
        // CM: i changed this from browser router to hash router so it was like the one we did in the lab. is that ok?
        return createHashRouter([
            {
                "path": "/",
                "element": <LoginPresenter mode={props.model}/>
            },
            {
                "path": "/login",
                "element": <LoginPresenter mode={props.model}/>,
            },
            {
                "path": "/home",
                "element": <HomePagePresenter model={props.model}/>
            },
        ]);
    }

    return (
        <RouterProvider router={makeRouter(props)}/>
    );
}

export default App;
