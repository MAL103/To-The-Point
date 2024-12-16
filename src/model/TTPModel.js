const model = {
    exampleData: ["Hello World"],
    email:"",
    password:"",
    currentUserId:undefined,
    searchURLs: [],
    currentSummaryId: 1,
    summaries: [],
    
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
