import { fetchUrlContent } from "../util/fetchUrlContent";
import { summarizeContent } from "../util/summarizeContent";
import { resolvePromise } from "../resolvePromise";

const model = {
    exampleData: ["Hello World"],
    email:"",
    password:"",
    currentUserId:undefined,
    currentSummaryId: null,
    url: "",
    currentUserPromiseState: {},
    currentSummaryPromiseState: {},
    currentSummaryId: 1,
    summaries: [],
    UserId,
    
    setEmail(email){
        this.email=email;
    },
    setPassword(password){
        this.password=password;
    },
    setCurrentUserId(userId){
            this.currentUserId = userId;
            //resolvePromise(getUserHistory(userId),this.currentUserPromiseState);
    },

    setUrl(url){
        this.url=url;
    },

    doSummarize(url) {
        resolvePromise(summarizeContent(fetchUrlContent(url)), this.currentSummaryPromiseState);
        this.currentUserId = userId;
        //resolvePromise(getUserHistory(userId),this.currentUserPromiseState);
    },
    setCurrentSummaryId(summaryId){
        this.currentSummaryId= summaryId;
    },
    setSummaries(summaries) {
        this.summaries = summaries.map((summary) => ({
          summary: summary.summary || 'y',
          url: summary.url || 'x',
          title: summary.title || 'x',
          id: summary.id || 1
        }));
    }
}

export {model}; // export the model
