import { fetchUrlContent } from "../util/fetchUrlContent";
import { summarizeContent } from "../util/summarizeContent";
import { resolvePromise } from "../resolvePromise";

const model = {
    exampleData: "This is example data",
    email:"",
    password:"",
    currentUserId:undefined,
    currentSummaryId: null,
    url: "",
    currentUserPromiseState: {},
    currentSummaryPromiseState: {},
    
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
    }
}

export {model}; // export the model
