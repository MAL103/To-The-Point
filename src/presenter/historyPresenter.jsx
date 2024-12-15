import { HistoryView } from "../view/historyView";
import {observer} from "mobx-react-lite";
const HistoryPresenter = observer(function HistoryPresenter(props){
    return <HistoryView exampleData={props.model.exampleData} summaries = {props.model.summaries}/>
})

export {HistoryPresenter};