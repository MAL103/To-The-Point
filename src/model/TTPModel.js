import { getUserHistory,getSummaryDetails} from "../userSource";
import { resolvePromise } from "../resolvePromise";
const model = {
    currentUserId: null,
    searchURLs: [],
    currentSummaryId: null,
    summaryPromiseState: {},
    currentUserPromiseState: {},
    setCurrentSummaryId(summaryId){
        if (summaryId && this.currentSummaryId!==summaryId){
            this.currentSummaryId = summaryId;
            resolvePromise(getSummaryDetails(currentUserId,summaryId),this.summaryPromiseState);
        }
    },
    addURL(URLToAdd){
        this.searchURLs= [...this.searchURLs,URLToAdd];
    },
    removeURL(URLToRemove){
        function shouldWeKeepURLCB(URL){
            return URLToRemove !== URL;
        }
        this.searchURLs = this.searchURLs.filter(shouldWeKeepURLCB);
    }
}

export {model}; // export the model