import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
//initialize firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db= getDatabase(app);
const PATH = "Users";


function modelToPersistence(model){
  return {
    userId: model.currentUserId,
    email: model.email,
    summaryId: model.currentSummaryId,
    summaries: model.summaries.map((summary) => ({
      url: summary.url,
      summary: summary.summary,
      title: summary.title,
      id: summary.id
    })),
  };
}

function persistenceToModel(dataFromPersistence, model){
  model.setEmail(dataFromPersistence?.email || '');
  model.setCurrentUserId(dataFromPersistence?.userId || null);
  model.setCurrentSummaryId(dataFromPersistence?.summaryId || null);
  model.setSummaries(dataFromPersistence?.summaries || []);
}

function saveToFirebase(model){
  if(model.ready && model.currentUserId){
    set(ref(db, PATH+`/${model.currentUserId}`), modelToPersistence(model));
  }
}
function readFromFirebase(model){
  model.ready = false

  return get(ref(db, PATH+`/${model.currentUserId}`))
      .then(function convertACB(snapshot){
        console.log('data read from firebase', snapshot.val())
        if(!snapshot.val()){  //if user is new and doesn't have data
          const initialData = {
            userId: model.currentUserId,
            email: model.email,
            summaryId:null, //as this is null it isnt written on the firebase
            summaries: {}
          }
          set(ref(db, PATH+`/${model.currentUserId}`), initialData);  //set the initial data for the user
        }
        else{
          return persistenceToModel(snapshot.val(), model);
        }
        //return persistenceToModel(snapshot.val(), model);
      })
      .then(function setModelReadyACB(){
          model.ready=true;

      })
}

function userSessionACB(user, model){
  if(user){
    console.log('user logged in', user.email, user.uid);
    model.setCurrentUserId(user.uid);
    model.setEmail(user.email)
    readFromFirebase(model); //only read from firebase if there is a user session
  }
  else{
    model.setCurrentUserId(null);
  }
}

function connectToFirebase(model, watchFunction){
  onAuthStateChanged(auth, (user) => {
    userSessionACB(user, model);
  })

  function isChangeImportantACB(){ //if something in here changes, it triggers sideEffectACB saving the model to firebase
    //used to have model.email & model.currentUserId, but because they changed when the user logged in,
    //it first saved whatever was in the model from the previous user to firebase rather than reading first from firebase
    return [model.currentSummaryId, model.summaries];
  }

  function sideEffectACB(){
    saveToFirebase(model);
  }

  watchFunction(isChangeImportantACB, sideEffectACB);
}

export {connectToFirebase, app}