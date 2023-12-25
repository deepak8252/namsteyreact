const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
[
React.createElement("h1",{},"this is a h1 tag"),
React.createElement("h2",{},"i am a h2 tag"),
React.createElement("h3",{},"i am a h3 tag")
]
),
React.createElement("div",{id:"child"},
[
React.createElement("h1",{},"this is a h1 tag"),
React.createElement("h2",{},"i am a h2 tag"),
React.createElement("h3",{},"i am a h3 tag")
]
)
]

);



const heading=React.createElement("h1",{id:"heading",xyz:"abc"},"hello world from react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)