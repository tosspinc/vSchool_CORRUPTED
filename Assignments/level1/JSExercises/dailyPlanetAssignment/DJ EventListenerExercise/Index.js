var square = document.getElementById("squareOrange");
var wholePage = document.getElementById('body');
square.addEventListener("mouseover", over); // there are no brackets after over when calling the over() function as nothing is being passed through element.
//square.addEventListener("mouseout", out); // there are no brackets after out when calling the out() function as nothing is being passed through the element.
square.addEventListener("mousedown", down); // changes the internal color of the square to red when clicking on the left button of the mouse.
square.addEventListener("dblclick",dblClick); // there are no brackets after dblclick when calling the dblclick() function as nothing is being passed throug the element.
square.addEventListener("mouseup", up); // this is for the right mouse being clicked
document.addEventListener("keydown", assignColorByLetter); // this is for selecting the first letter of each color to change the color inside the square.
document.addEventListener("scroll", out);
function over(){
 // console.log("testing over") -- initially this feature was being called as testing when it was not working properly.
square.style.backgroundColor = "blue" // sets the square internal color to blue when the mouse hovers over the square called in css
};

function out(){ 
  square.style.backgroundColor = "orange"; // resets the square internal color to organge as the mouse exits the square called in css.
};

function down(){
  square.style.backgroundColor = "red"; // changes the background color of the square to red when clicking on the left mouse button.
}

function up(){
  square.style.backgroundColor = "yellow"; // changes background to yellow when releasing the left key.
}

function dblClick(){
  square.style.backgroundColor = "green"; // changes background to green when doubleclicking the left mouse button.
}


function assignColorByLetter(event){
  event.preventDefault()
  //console.log('a key was pressed')
  //console.log(event)
  var code = event.code // assigns code to an event funtion.
  if (code === "KeyB"){  // allows the key B to be selected via the keyboard and changes the color of the square to blue by calling the function over()
    over();
    }
  if (code === "KeyO"){  // allows the key O to be selected via the keyboard and changes the color of the square to orange by calling the function out()
    out();
    }
  if (code === "KeyR"){  // allows the key R to be selected via the keyboard and changes the color of the square to red by calling the function down()
    down();
    }
  if (code === "KeyY"){  // allows the key Y to be selected via the keyboard and changes the color of the square to yellow by calling the function up()
    up();
  }
  if (code === "KeyG"){  // allows the key G to be selected via the keyboard and changes the color of the square to green by calling the function dblClick()
    dblClick();
  }
}