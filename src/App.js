import './App.css';
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import { HomePagePresenter } from './presenter/homePagePresenter';
import { AuthPresenter } from './presenter/authPresenter';
import { observer } from 'mobx-react-lite';
import { ExamplePresenter } from './presenter/examplePresenter';
import { NavigationBarPresenter } from './presenter/navigationBarPresenter';

const App = observer(
    function appRenderer(props) {

        function makeRouter(props) {
            return createHashRouter([
                {
                    "path": "/",
                    "element": <HomePagePresenter model={props.model}/>
                },
                {
                    "path": "/example",
                    "element": <ExamplePresenter model={props.model}/>
                },
            ]);
        }

        function renderACB() {
            if(props.model.currentUserId === undefined){
                <img src="https://brfenergi.se/iprog/loading.gif"/>
            }
            if (props.model.currentUserId === null) {
                return <AuthPresenter model={props.model}/>;
            }
            return (
                <div>
                    <RouterProvider router={makeRouter(props)}/>
                </div>
            );
        }

    return (
        <div>
            <NavigationBarPresenter model={props.model}/>
            {renderACB()}
        </div>
        );
});

export default App;