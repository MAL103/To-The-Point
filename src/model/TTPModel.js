import { resolvePromise } from "../resolvePromise";
const model = {
    currentUserId: null,
    email:"",
    password:"",
    searchURLs: [],
    currentSummaryId: null,
    setEmail(email){
        this.email=email;
    },
    setPassword(password){
        this.password=password;
    },
    setCurrentUserId(userId){
            this.currentUserId = userId;
    },
    setCurrentSummaryId(summaryId){
        this.currentSummaryId = summaryId;
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
