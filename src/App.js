import './App.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import { HomePagePresenter } from './presenter/homePagePresenter';
import { LoginPresenter } from './presenter/loginPresenter';
import { HistorySummaryPresenter } from './presenter/historySummaryPresenter';
import { ProfileLogOutPresenter } from './presenter/profileLogOutPresenter';
import { observer } from "mobx-react-lite";
import { NavigationBarPresenter } from './presenter/navigationBarPresenter';
import { HistorySummaryPresenter } from './presenter/historySummaryPresenter';


const App = observer ( //JA: added the observer
    function appRender(props){
        function makeRouter(props) {
            // CM: i changed this from browser router to hash router so it was like the one we did in the lab. is that ok?
            return createHashRouter([
                {
                    "path": "/",
                    "element": <HomePagePresenter model={props.model}/>
                },
                {
                    "path": "/login",
                    "element": <LoginPresenter model={props.model}/>,
                },
                {
                    "path": "/home",
                    "element": <HomePagePresenter model={props.model}/>
                },
                {
                    "path": "/profile",
                    "element": <ProfileLogOutPresenter model={props.model}/>
                },
                {
                    "path": "/history",
                    "element": <HistorySummaryPresenter model={props.model}/>
                },
            ]);
        }

        //JA: the login-content renderization
        function noUserSessionRenderer(){
            if(props.model.currentUserId === undefined){    //this is not working and i have to ask
                return <img src="https://brfenergi.se/iprog/loading.gif" alt="loading img"/>
            } 
            if(props.model.currentUserId === null){     //if no user yet
                return <LoginPresenter model={props.model}/>
            }
            return(
                <div>
                    <RouterProvider router={makeRouter(props)}/>
                </div>
            )
        }

        return (
            <div>
                <NavigationBarPresenter model={props.model}/>
                {noUserSessionRenderer()}
            </div>
            
        );
    }
)


export default App;
