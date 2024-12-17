import { fetchUrlContent } from "../util/fetchUrlContent";
import { summarizeContent } from "../util/summarizeContent";
import { resolvePromise } from "../resolvePromise";

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
    addSummary(newSummary){
        this.summaries = [...this.summaries, newSummary];
    },
    doSummarize(url) {
        const content = fetchUrlContent(url)
        .then(summarizeContent).then((data)=> {
            console.log(data);

            const nextId = this.summaries.length > 0 
            ? this.summaries[this.summaries.length - 1].id + 1 
            : 0;

            const newSummary = {
                id: nextId,
                title: 'a title',
                summary: data,
                url: url
            }
            this.addSummary(newSummary);
            this.setCurrentSummaryId(newSummary.id)
            console.log('updated summaries', this.summaries)
            return data;
        })
        return resolvePromise(content, this.currentSummaryPromiseState);
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
    },
    resetCurrentSummaryPromiseState() {
        this.currentSummaryPromiseState = { promise: null, data: null, error: null };
    }
}

export {model}; // export the model
