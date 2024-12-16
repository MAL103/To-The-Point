import { fetchUrlContent } from "../util/fetchUrlContent";
import { summarizeContent } from "../util/summarizeContent";
// import { resolvePromise } from "../resolvePromise";

const model = {
    exampleData: ["Hello World"],
    email:"",
    password:"",
    currentUserId:undefined,
    url: "",
    currentUserPromiseState: {},
    currentSummaryPromiseState: {},
    currentSummaryId: 1,
    summaries: [],
    userId: undefined,
    
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
        // should resolve promise be coming into this
        // resolvePromise(summarizeContent(fetchUrlContent(url)), this.currentSummaryPromiseState);
        const content = fetchUrlContent(url);
        content.then(summarizeContent).then((data)=>console.log(data));
    },
    setCurrentSummaryId(summaryId){
        this.currentSummaryId= summaryId;
    },
    setSummaries(summaries) {
        this.summaries = summaries.map((summary) => ({
          summary: summary.summary || '',
          url: summary.url || '',
          title: summary.title || '',
          id: summary.id || null
        }));
    }
}

export {model}; // export the model
