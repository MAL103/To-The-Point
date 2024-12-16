import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
//initialize firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db= getDatabase(app);
const PATH = "Users";

/*const dummyData = {
  userId: 'pPHl5aBwpeRSMkMUnkzDLBF1xch2',
  currentSummaryId:1,
  summaries: [
    { url: "https://example.com/doc1", summary: "This is a summary of doc1", title: "title 1"},
    { url: "https://example.com/doc2", summary: "This is a summary of doc2", title: "title 2"},
  ],
};*/


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
          return persistenceToModel(snapshot.val(), model);
      })
      .then(function setModelReadyACB(){
          model.ready=true;

      })
}

function userSessionACB(user, model){
  if(user){
    console.log('user logged in', user.email, user.uid);
    model.setCurrentUserId(user.uid);
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

  function isChangeImportantACB(){
    return [model.email, model.currentUserId, model.currentSummaryId, model.summaries];
  }

  function sideEffectACB(){
    saveToFirebase(model);
  }

  watchFunction(isChangeImportantACB, sideEffectACB);
}

export {connectToFirebase, app}