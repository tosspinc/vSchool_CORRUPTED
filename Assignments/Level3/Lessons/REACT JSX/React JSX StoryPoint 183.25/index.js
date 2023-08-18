//I need to use react-dom@17.0.2 and react@17.0.2 in scrimba when writing code in the dependencies area to the left.

//I need to make sure I am suing the following two imports when writing code in scrimba. 
//import React from "react";
//import ReactDOM from "react-dom";  

const navbar = (                
    <nav>                       
        <h1>Bob's Bistro</h1>   
        <ul>
            <li>Menu</li>
            <li>About</li>      
            <li>Contact</li>
        </ul>
    </nav>
);

//the ReactDOM.render() function renders React components into the DOM. This renders the navbar into the html element with the id of root.
ReactDOM.render(navbar, document.getElementById("root"))