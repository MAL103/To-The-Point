// example presenter for the ExampleView
import { HistorySummaryView } from "../view/historySummaryView";
import {observer} from "mobx-react-lite";



const HistorySummaryPresenter = observer(function HistorySummaryPresenter(props){ 
    //unsure about this
    function changeSummaryACB(id){
        props.model.setCurrentSummaryId(id);
    }
    return <HistorySummaryView onSummarySelect={changeSummaryACB}/>
})

export {HistorySummaryPresenter}; // export the presenter