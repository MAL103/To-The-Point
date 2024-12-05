const model = {
    exampleData: "Hello World",
    email:"",
    password:"",
    currentUserId:null,

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