const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
        [React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
        React.createElement("h3", {}, "I am h3 tag")]
    )
)
console.log(parent);

ReactDOM.render(parent, document.getElementById("root"));
// Document.getElementById("root").appendChild(parent);