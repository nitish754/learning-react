import React from "react";
import ReactDOM from "react-dom/client";

console.log("React verstion is ", React.version);
// React Element - Object representation of UI
const heading  = React.createElement("h1",{},"Hello World from React");

const paragraph = React.createElement("div",{id:"parent"},
    React.createElement("div", {id:"child"},[
        React.createElement("h1",{key:"h1"},"I am a h1 tag inside div"),
        React.createElement("h2",{key:"h2"},"I am a h2 tag inside div")
    ])
)

// Render Method
const headingRoot = ReactDOM.createRoot(document.getElementById("heading"));
const paraRoot = ReactDOM.createRoot(document.getElementById("root"));

headingRoot.render(heading);
paraRoot.render(paragraph);