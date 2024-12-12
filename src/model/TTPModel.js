const model = {
    exampleData: "This is example data",
    email:"",
    password:"",
    currentUserId:undefined,
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
            //resolvePromise(getUserHistory(userId),this.currentUserPromiseState);
    }
}

export {model}; // export the model
