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
    currentSummaryId: null,
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
        content.then(summarizeContent).then((data)=> {
            console.log(data);
            //after getting the summary update summaries property with the new summary obj
            const nextId = this.summaries.length > 0 
            ? this.summaries[this.summaries.length - 1].id + 1 
            : 1;
            const newSummary = {
                id: nextId,
                title: 'a title',
                summary: data,
                url: url
            }
            //this.summaries.push(newSummary);
            this.summaries = [...this.summaries, newSummary];
            console.log('updated summaries', this.summaries)
        })
        
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
