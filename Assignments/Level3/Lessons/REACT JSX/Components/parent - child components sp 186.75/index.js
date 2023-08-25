//needed for React but not for webdev using cdn.
//import React from "react";
//import ReactDom from "react-dom";
function Header() {     //Header name is using pascal case where first letter is capitalized and is a parent component.
    return (
    <header>
        <nav>
            <img src="./IMGS/react.png" width="40px" />
        </nav>
    </header>   
)}

function Footer() {     //Footer is a parent component and the name is using Pascal case.
    return(
    <footer>
        <small>&copy; 2023 Arnold Jones</small>
    </footer>
    )
}

function MainContent () {   //MainContents is a parent component. MainContent is pascal case where the first letter of each word is capitalized.
    return (                
        <div>
            <h1>Fun facts about React!</h1>
            <ul>
                <li>React is a popular library.</li>
                <li>By Knowing React I am more likely to get hired as a developer.</li>
            </ul>
        </div>
    )
}
function Page() {  //Pahe is a parent component and is using Pascal case by capitalizing the first letter..
    return ( //the components below in the div become chilren of the parent (Page) component above.
    <div>   
        <Header />  
        <MainContent />    
        <Footer />
    </div>
    );
}

//the code below is needeed for scrimba.
ReactDOM.render(<Page />, document.getElementById("root"))  //need to use ReactDOM.render() in order for page to render and be displayed in the browser as we are utilizing react.