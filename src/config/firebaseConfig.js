// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//JA: left this just moved the apikey to an .env
import { configuration } from "./openAIConfig"
export const firebaseConfig = {
    apiKey: configuration.reactAppAPIKey,
    authDomain: "dh2642-to-the-point.firebaseapp.com",
    databaseURL: "https://dh2642-to-the-point-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dh2642-to-the-point",
    storageBucket: "dh2642-to-the-point.firebasestorage.app",
    messagingSenderId: "743609629383",
    appId: "1:743609629383:web:6c664183319b04849e1ce2",
    measurementId: "G-6R4BQ7VYXT"
};