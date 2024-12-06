import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//initialize firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function connectToFirebase(model){
        onAuthStateChanged(auth, (user) => {
            if(user){
              console.log('user logged in', user.email, user.uid);
              model.setCurrentUserId(user.uid);
              console.log('now the currentUserId is', model.currentUserId)
            }
            else{
              model.setCurrentUserId(null);
            }
          })
    
}

export {connectToFirebase, app}