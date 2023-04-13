const momsShoppingListItems =[];     //momsShoppingListItems is a constant variable and initialized as an array.
const form = document["addItem"];   // selects the HTML form element addItem


const addListItems = form.addEventListener("submit", event => { //adds an event listener to the forms submit event.
    event.preventDefault(); //this clears the HTML text input box upon hitting enter

const newItem = document.createElement("li"); // creates new HTML li item. 
const itemName = document.createElement("div"); // creates new HTML div item.
const itemValue = document.getElementById("title"); // assigns the value entered in input field to the id of title in HTML.
itemName.textContent = itemValue.Value;  // sets text content for div element to itemName.
itemName.setAttribute("id", "itemNameDiv"); // adds an id attribute to itemNameDiv to the itemName Div.

const editButton = document.createElement("button"); // creates the edit button in HTML to allow for editing of grocery items.
editButton.textContent = "Edit"; // set the text for the edit button to Exit.
editButton.setAttribute("id", "editButton"); //adds an id attribute of editButton to the edit button.

const saveButton = document.createElement("button"); // creates a save button in the HTML document.
saveButton.textContent = textContent = "Save"; //set the text for the save button to Save.
saveButton.setAttribute("id", "Save"); // adds an id attribute of save to the save button.
saveButton.style.display = "none"; // this allow the save button to initially stay hidden.

const deleteButton = document.createElement("button"); //creates a delete button in the HTML document.
deleteButton.textContent = "X"; // assigns the text content of the x button to X.
deleteButton.setAttribute("id", "delete"); // adds an id attribute of delete to the delete button.

const momsGroceryList = document.getElementById("list"); //gets the HTML element with and id of list for the ul portion of the HTML.
momsGroceryList.appendChild(newItem); //this appends and allows a new item to be added to grocery list.
momsGroceryList.appendChild(itemName); // this appends and adds the new item name to grocery list.
momsGroceryList.appendChild(editButton); // this allows changes to an item when selecting edit button.
momsGroceryList.appendChild(saveButton); // this allows changes made during edited to be saved - appended.
momsGroceryList.appendChild(deleteButton); //this allows items to be deleted from list - appended.
momsShoppingListItems.push(itemName.textContent); //allows the text content of itemName to be added to the grocery list array.

const groceryItem = document.getElementById("list"); // gets HTML element with id of list from ul in HTML document.
const myJSON = JSON.stringify(momsShoppingListItems); //converts momsShppingListItems array to a JSON String.
localStorage.setItem("NewShoppingList", myJSON); //this stores the JSON string in the browsers memory under NewShoppingList.
itemValue.Value = ""; // this clears the value of the input field.

deleteButton.addEventListener("click", event => { //adds an event listener event for when the delete button is clicked on.
    event.target.parentNode.remove(); // this removes the list item once the button is selected.
    localStorage.removeItem(event.target.parentNode); //this removes the list item information from local storage memory.
};

function editButtonEvent(event){ //create the edit button function.
    console.log(localStorage); //shows in console tab and stores info in local storage memory.
    saveButton.style.diplay = "block"; //displays style of save button in block format.
    let editField = document.createElement("input"); //creates new HTML input element for editing the items name.
    editField.setAttribute("id", "inputFieldID"); //add an id of inputFieldID to the editField input element.
    editField.value = event.target.parentNode.childNode[0].textContent; //sets the value of editField input value to the current item name.
    event.target.parentNode.appendChild(editField); //appends the input text of editField and assigns it to the list item.
    saveButton.addEventListener("click", (event) => saveButtonEvent(event, editField)); //adds an event listener for when save button is selected and assigns it to the editField.
    editButton.style.display ="none"; //set the display style of editField element to none and it is initially hidden.
};

function saveButtonEvent(event, editField) { //create the save button function.
    console.log(event.target);  // shows in console tab when function is triggered.
    editField.style.display = "none"; // displays the style of the editField so it is initially hidden.
    const NewItemName = event.target.parentNode.childNodes[0]; //gets itemName Div from parent list item.
    NewItemName.textContent = editField.value; //sets the value of itemName div to the editField input.
    editButton.style.display = "block"; //sets the display style of the edit button so it is visible.
    saveButton.style.display = "none"; // sets the display style of the save button to being hidden.
};

editButton.addEventListener("click", editButtonEvent); // adds an event listener to listen for when the edit button is selected.
});


}