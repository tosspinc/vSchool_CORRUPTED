let newHeader = document.getElementById("header"); //this calls a new header to be created as a h1
newHeader.classList.add('header');                 // this adds info into the header in the html doc
newHeader.textContent = 'JavaScript Made This!!';  // string for this assignment
newHeader.style.fontSize = '45px';   // sets the font height of the above string 
newHeader.style.fontWeight = 'bolder'; // bolds string text above.

const headerTwo = document.createElement("h2");  // this calls for a h2 header in the header of the html doc
headerTwo.innerHTML = 'wrote this Javascript';   // stting created for this assignment
newHeader.insertAdjacentElement("afterend", headerTwo); //this inserts the h2 just under the above h1 in the html doc
headerTwo.style.fontSize = '22px';  // font size of string above
headerTwo.style.textAlign ='center'; // centers the string of the h2 

const headerTwoAuthor = document.createElement("span");  // creates author 
headerTwoAuthor.classList.add('name'); // adds the name and assigns the color of the name from the css doc
headerTwoAuthor.textContent = 'Arnold Jones '; // authors name in a string format
headerTwo.prepend(headerTwoAuthor); // add the name at the beginning of the h2 
headerTwo.style.fontWeight = 'bolder'; // bolds the text

const messages = document.querySelector('.messages');  // this creates a message element
messages.setAttribute('id', 'messages');  

const clearAllMessages = document.getElementById("clear-button");  // when selected it clears out the text box
clearAllMessages.addEventListener("click", clearMessages);

function clearMessages(){                                   // assigns name of clearMessages as a function
    document.getElementById("messages").innerHTML = "";  // places the messages in the text box
    toggleDiv="right";    // allows new message from entered text to begin on the left side of the text box.
};


const message = document.getElementsByClassName("message");  // this element assigns the text strings below to rewrite over what is initially in the HTML doc
message[0].textContent = "This is 911, Emergency services. How may I help you?";
message[1].textContent = "I'm currently displaced and looking for a date to go to a movie.";
message[2].textContent = "I think you have the wrong number. This is 911.";
message[3].textContent = "Nope, right number. this is an emergency. I need a date for tonight. will you be my date?";
message[4].textContent = "You have my number in case you change your mind. I'll be waiting for your call";
let dropDown = document.getElementById("theme-drop-down");   // sets the theme drop down box

function changeTheme() {
    let selectedOption = dropDown.value;
    let rightMessage = document.styleSheets[0].cssRules[5].style;  // this calls the fifth element in the css file - which is the right side 
    let leftMessage = document.styleSheets[0].cssRules[6].style;   // this calls the sixth element in the css file - which is  the left side
    if ( selectedOption === "theme-one"){
        rightMessage.backgroundColor = "#B35900";       //sets the color of the first theme to blue on right side of text box
        leftMessage.backgroundColor = "#99EBFF";        // sets the colorof the first theme to brown  on left side of text box
    }if ( selectedOption === "theme-two"){
        rightMessage.backgroundColor = "#808080";      //sets the color of the second theme to red on right side of text box
        leftMessage.backgroundColor = "#E62E00";       //sets the color of the second theme to black on right side of text box
    }if ( selectedOption === "theme-three"){
        rightMessage.backgroundColor = "#FFFF00";       //sets the color of the third theme to yellow on right side of text box
        leftMessage.backgroundColor = "#00FF00";        //sets the color of the third theme to green on right side of text box
    }if ( selectedOption === "theme-four"){
        rightMessage.backgroundColor = "#A020F0";       //sets the color of the fourth theme to purple on right side of text box
        leftMessage.backgroundColor = "#FFA500";        //sets the color of the fourth theme to orange on right side of text box
    };
};
dropDown.addEventListener("change", changeTheme);  // this allows you to select which color theme you want to use in the text box

let sendMessage = document.getElementById("sendButton");  //send text entered in inbox to the text box.
let newMessage = document.getElementById("input");   // input text box
let toggleDiv = "right";  // this sets the default to keep text box empty once press clear button.

function addMessage() {                 // this is the text box message funtion.
    event.preventDefault();
    let newThread = document.createElement('div');
    newThread.classList.add('message');
    if (toggleDiv === "right") {
        newThread.classList.add("left");
        toggleDiv = "left";
    }else{
        newThread.classList.add("right");
        toggleDiv = "right";
    };
    newThread.textContent = newMessage.value;
    let addMessageDiv = document.getElementById("messages");
    addMessageDiv.appendChild(newThread);
    newMessage.value = "";
};
sendMessage.addEventListener("click", addMessage);  