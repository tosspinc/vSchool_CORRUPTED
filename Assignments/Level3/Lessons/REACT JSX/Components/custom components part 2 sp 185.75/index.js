//needed for React but not for webdev using cdn.
//import React from "react";
//import ReactDOM from "react-dom";
//const ReactDOM = require("react-dom")

function TemporaryName() {
    return (
    <div>
        <header>
            <nav>
                <img src="./IMGS/react.png" width="40px" />
            </nav>
        </header>
        
        <h1>Fun facts about React!</h1>
        <ul>
            <li>React is a popular library.</li>
            <li>By Knowing React I am more likely to get hired as a developer.</li>
        </ul>
        <footer>
            <small>&copy; 2023 Arnold Jones</small>
        </footer>
    </div>
    );
}

//the code below is needeed for scrimba.
ReactDOM.render(<TemporaryName />, document.getElementById("root"))