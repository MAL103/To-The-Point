const model = {
    currentUserId: null,
    exampleData: "Hello World",
    setCurrentUserId(userId){
        if (userId && this.currentUserId!==userId){
            this.currentUserId = userId;
            //resolvePromise(getUserHistory(userId),this.currentUserPromiseState);
        }
    },
}

export {model}; // export the model