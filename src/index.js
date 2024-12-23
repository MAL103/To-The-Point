import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {observable, reaction} from "mobx";
import {model} from "./model/TTPModel";
import { connectToFirebase } from './model/firebaseModel';

// make model observable
const reactiveModel = observable(model);
connectToFirebase(reactiveModel, reaction);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App model={reactiveModel}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
