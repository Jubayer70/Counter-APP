import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.component.js";

const div = document.getElementById("app");
const root = ReactDOM.createRoot(div);
root.render(<App />); //jsx element

/*
    Suppose <App /> returns <h1> Hello World </h1>
    Here is how React converts HTML to JS:
    React.createElement(element, null, innerText)
        <h1> Hello World </h1>
    => React.createElement('h1', null, 'Hello World')
*/

/*
    <App /> => equivalent works like the line given below:
    const obj = new App(); // it returns its only property render (render: {....})
    obj.render(); // -> <h1>Hello World or JSX</h1>
*/

/*
    one dot . means own folder || home
    One dot (.) means the current folder || home
    Double dots (..) mean the parent folder || parent home
    Explanation: if "./App" ==> import App from "./App";
    Here, ./App indicates it's in the home folder src and its parent folder is myapp.
    If we indicate its parent folder, then our 3rd line will be:
         import App from "../public";
    which indicates the myapp folder
*/