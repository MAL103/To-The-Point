const model = {
    exampleData: "This is example data",
    email:"",
    password:"",
    currentUserId:undefined,
    currentSummaryId: null,
    url: "",
    
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
    }
}

export {model}; // export the model
