1. Why do we need to 'import React from "react"' in our files?
    answer: if we do not import React it will not work as we are not using CDN's any longer as when programming with html, js and css. the jsx syntax is defined in React.

2. If I were to console.log(page) in index.js, What would show up?
    answer: lines of javascript code (object) which is React elements. Also children objects will appear within it. that are not compiled and recognized by the browser.

3. What's wrong with this code?

    const page = (
        <h1>Hello.</h1>
        <p>This is my website.</p>
    )

    answer: import React from "react" and import ReactDOM from "react-dom" has not been done so it will not render. It has two child elments, h1 and p. This needs to be under on parent element, <div>.  ReactDOM.render(page, document.getElementByID("root")) has not been added at the bottom of the js file so it will not render.

4. What does it mean for something to be "declarative" instead of "imperative"?
    answer: when using React we write the code in javascript and the compiler figures how how it needs to be rendered. Imperative is writing the code step by step and uses CDN's.

5. What does it mean for something to be composable?
    answer: Create small pieces of the User Interface (UI) and then combine all of them together to work as a whole unit.