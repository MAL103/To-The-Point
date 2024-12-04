import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { HomePagePresenter } from './presenter/homePagePresenter';
import { AuthPresenter } from './presenter/authPresenter';
import { observer } from 'mobx-react-lite';

const App = observer(
    function appRenderer(props) {

        function makeRouter(props) {
            return createBrowserRouter([
                {
                    "path": "/",
                    "element": <HomePagePresenter model={props.model}/>
                },
            ]);
        }

        function renderACB() {
            if (props.model.currentUserId === null) {
                return <AuthPresenter model={props.model}/>;
            }
            return (
                <div>
                    <RouterProvider router={makeRouter(props)}/>
                </div>
            );
        }

    return (renderACB());
});

export default App;