//with the two following lines of code active it does not display in the browser.
//when I comment out the next two lines of code the program renders in the browser (dom document).

//***The reason is that when the following two lines of code are notated out it is allowing jsx to render it through ReactDOM.render and is not using React at all.

//import React from "react"
//import ReactDOM from "react-dom"

const page = (
    <div>
        <h1>My awesome React webpage.</h1>
        <h3>Reasons why I like React.</h3>
            <ol>
                <li>it's Composable.</li>
                <li>it's Declarative.</li>
                <li>it's a hireable skill.</li>
                <li>it's actively maintained by skilled individuals.</li>
            </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))