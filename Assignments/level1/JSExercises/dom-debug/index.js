const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(){
    const subItem = createSubItem();
    document.getElementById("list").appendChild(subItem);
});

function createDropDown(){
    const dropDown = document.createElement("select");
    
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option"); //creates option
        option.textContent = colors[i]; //assigns color content
        dropDown.append(option);  // appends to the drop down list of colors.
            };

    dropDown.addEventListener("change", function(e){
        for (let i=0; i<subItem.length; i++){       // allows the full length of the subItem to be displayed.
            if(dropDown.value === "red"){           // assigns red to the value in the drop down menu.
                dropDown.parentElement.style.backgroundColor = "red";
                }
                else if(dropDown.value === "blue"){  // assign blue to the value in the drop down menu.
                    dropDown.parentElement.style.backgroundColor = "blue"; // returns or assigns blue to the parent element - dropdown menu.
                }
                else if(dropDown.value === "green"){  // assigns green to the value in the drop down menu.
                    dropDown.parentElement.style.backgroundColor = "green"; // changes background color of div from where dropDown lives in.
                }
        }
    });
    return dropDown;
}; 

function createSubItem(e){
    const subItem = document.createElement("div");  // assigns the div to subItem.
    var subItemValue = document.getElementById("input").value;  // assigns the value entered into the input to subItemValue.
    document.getElementById("input").value = "";  // clears input box after each submission.
    subItem.textContent = subItemValue;  // assigns subItemValue as the content of subItem.
    const dropDown = createDropDown();  // assigns createDropDown to dropDown.
    subItem.appendChild(dropDown); // appends or changes as child and assigns it to subItem.
    subItem.setAttribute("class", "subItem");
    return subItem;
};

var subItem = document.getElementsByClassName("subItem");   // get the class subItem and assigns it to subItem.
