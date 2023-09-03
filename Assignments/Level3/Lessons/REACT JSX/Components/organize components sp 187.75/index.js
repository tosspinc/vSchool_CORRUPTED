import React from "react";
import ReactDOM from "react-dom";
import {Header, MainContent, Footer} from "./Header";

function App() {
    return (
        <div>
            <Header />            
            <MainContent />
            <Footer />
        </div>
    );   
}

ReactDOM.render(<App />, document.getElementById("root"));