import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
    return (
        <div>
            <h2>Namaste React</h2>
        </div>
    );
}

const CardComponent = () => {
    return (
        <div className="card">
            <TitleComponent />
            <p>This is a description of the card.</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CardComponent />);