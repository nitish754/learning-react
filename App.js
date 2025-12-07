import React from "react";
import ReactDOM from "react-dom/client";

const Headingcom = () =>{
    return <h1>Namaste React Functional Component</h1>
}

const BodyComponent = () => {
    return (
        <div id="parent">
            <div id="child">
                <h1>This is h1 tag inside child div</h1>
            </div>
        </div>
    );
}

const headingRoot = ReactDOM.createRoot(document.getElementById("heading"));
const parentRoot = ReactDOM.createRoot(document.getElementById("root"));

headingRoot.render(<Headingcom />);
parentRoot.render(<BodyComponent />);