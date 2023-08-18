/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  //import React from "react"                             //imports react.
  //import ReactDOM from "react-dom"                      //imports react-dom.

  const page = (                                        //declares a constant variable named page.
    <div>                                               
        <img src="./IMGS/react.png" width="40px" />     
    </div>

  );

  ReactDOM.render(page, document.getElementById("root"));    //renders code using ReactDOM and renders the variable page in the dom to the oject with an id called page.