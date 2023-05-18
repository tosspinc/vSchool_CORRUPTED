//gets data from travelFormContainer entered on html document and assigns to passengerForm.
const passengerForm = document.getElementById('travelFormContainer');      //defines form as a constant variable and assigns travelFormContainer to it.

function detectLanguage() {                     //declares detectLanguage function so browser will automatically detect users language.
    var preferredLanguage = navigator.language || navigator.userLanguage;   //compares navigator browser language to current users language.
    var lang = preferredLanguage.substr(0, 2);                              //subtracts first two letter of the users current browner language and dynamically assigns it to lang on html page.
    document.documentElement.lang = lang;                                   //assigns lang to the html main document page declaration of <html lang="xx".
}

function tosspiPassengerCount() {                                           //declares tosspiPassengerCount as a function.
    var passengerCount = parseInt(document.getElementById("passengerCount").value); //get the value from passengerCount dropdown list and assigns to passengerCount.
    var passengerInfoContainer = document.getElementById("passengerInfoContainer"); //gets the data from passengerContainer entere on html document and assigns to passengerInfoContainer box.
    
    passengerInfoContainer.innerHTML = "";      //clears out the passengerInfoContainer box data when choosing from drop down menu.
    if (passengerCount > 0) {                   //verifies if passengerCount is greater than zero and if it is runs for loop.
        for(i = 0; i < passengerCount; i++) {   //iterates through each of the passengers selected from dropdown menu that are travelling.
            var passengerNumber = i + 1;        //adds one to the passengerNumber as 0 has no value.  starts with first passenger.

            var passengerFieldset = document.createElement('fieldset');     //gets data from html document and groups it all together as a collective.
            passengerFieldset.innerHTML = '<legend>Passenger ' + passengerNumber + '</legend>'; //sets the legend or number of passengers and assigns to passengerFielset from data in html document.

            var firstNameLabel = document.createElement('label');       //sets firstNameLabel as a variable and assigns the label data in the html document to it.
            passengerFieldset.appendChild(document.createElement('br'));    //puts a line in between the names allows for better viewability for user.
            firstNameLabel.textContent = 'First Name: ';                    //assigns the string First Name to firstNameLabel.
            passengerFieldset.appendChild(firstNameLabel);

            var firstNameInput = document.createElement('input');           //assigns firstNameInput as a variable and assigns input data from user to it.
            firstNameInput.setAttribute('type', 'text');                    //defines the type of input box as a textbox.
            firstNameInput.setAttribute('placeholder', 'First Name');       //assigns the string First Name to be displayed in the name textbox for user.
            firstNameInput.setAttribute('name', 'firstName' + passengerNumber); //assigns data entered in the text box to the first passenger or passenger 1.
            firstNameInput.classList.add('input-field');                    //assigns input-field to correlate with css file so can be styled appropriately.
            passengerFieldset.appendChild(firstNameInput);                  //this nests the firstNameInput inside of passengerFieldset and ensures it is displayed as part of the form.

            var lastNameLabel = document.createElement('label');
            lastNameLabel.textContent = 'Last Name: ';
            passengerFieldset.appendChild(lastNameLabel);
            
            var lastNameInput = document.createElement('input');
            lastNameInput.setAttribute('type', 'text');
            lastNameInput.setAttribute('placeholder', 'Last Name');
            lastNameInput.setAttribute('name', 'lastName' + passengerNumber);
            lastNameInput.classList.add('input-field');                 //assigns input-field to correlate with css file so can be styled appropriately.
            passengerFieldset.appendChild(lastNameInput);

            var ageInputLabel = document.createElement('label');
            passengerFieldset.appendChild(document.createElement('br'));
            passengerFieldset.appendChild(document.createElement('br'));
            ageInputLabel.textContent = 'Age: ';
            passengerFieldset.appendChild(ageInputLabel);


            var ageInput = document.createElement('input');
            ageInput.setAttribute('type', 'number');
            ageInput.setAttribute('placeholder', 'Age');
            ageInput.setAttribute('name', 'age' + passengerNumber); //assigns name and age as part of ageInput and assigns to correct passenger number.
            ageInput.setAttribute('min', '1');                      //allows for the minimum age to be entered as 1 for the age.
            ageInput.setAttribute('max', '105');                    //allows for the maiximum age to be enetered as 105 for the age. 
            ageInput.classList.add('input-field');                  //assigns input-field to correlate with css file so can be styled appropriately.
            passengerFieldset.appendChild(ageInput);

            var genderLabel = document.createElement('label');      //declares genderLabel as a variable and dynamically creates label in html document.
            genderLabel.textContent = 'Gender: ';                   //assigns description string Gender: to the label.
            passengerFieldset.appendChild(genderLabel);
   
            var femaleRadio = document.createElement('input');      //declares the input button dynamically in the html document.
            femaleRadio.setAttribute('type', 'radio');              //declares the type of dynamically created input button as a radio button.
            femaleRadio.setAttribute('name', 'gender ' + passengerNumber);  //assigns name and gender to the appropriate passengerNumber created.
            femaleRadio.setAttribute('value', 'female');            // assigns the value of female to the radio button.
            femaleRadio.appendChild(document.createTextNode(", \u00A0")); // Add a space character between the text nodes
            genderLabel.appendChild(femaleRadio);                   
            genderLabel.appendChild(document.createTextNode('Female, '));  //assigns the string Female to the radio button created.
 
            var maleRadio = document.createElement('input');                //creates the input button dynamically on the html document.
            maleRadio.setAttribute('type', 'radio');                        //declares the type of dynamically created button as a radio button.
            maleRadio.setAttribute('name', 'gender ' + passengerNumber);    //assigns name and gender dynamically to assigned passenger number.
            maleRadio.setAttribute('value', 'male');                        //value for selected radio button is male.
            
            genderLabel.appendChild(maleRadio); 
            genderLabel.appendChild(document.createTextNode('Male '));       //assigns the string Male to the radio button created.

            var destinationSelectLabel = document.createElement('label');   //creates a label element dynamically in the HTML document and .
            passengerFieldset.appendChild(document.createElement('br'));    //adds a new line.
            passengerFieldset.appendChild(document.createElement('br'));    //adds a new line.
            destinationSelectLabel.textContent = 'Destination: ';           //assigns the text Destination: to the label created.
            passengerFieldset.appendChild(destinationSelectLabel);

            var destinationSelect = document.createElement("select");
            destinationSelect.setAttribute("name", "destination" + passengerNumber);

            //list of city and states that are destinations that airline flies to.
            var destinations = ["Miami, FL", "New York City, NY", "Los Angelos, CA", "Salt Lake City, UT", "Portland, OR", "Honolulu, HI"];
            for (var j = 0; j < destinations.length; j++) {
                var option = document.createElement("option");
                option.setAttribute("value", destinations[j]);
                option.textContent = destinations[j];
                destinationSelect.appendChild(option);
            };
        
            passengerFieldset.appendChild(destinationSelect);
            passengerFieldset.appendChild(document.createElement('br'));
            passengerFieldset.appendChild(document.createElement('br'));
            var dietLabel = document.createElement("label");
            dietLabel.textContent = "Dietary Preference: ";
            passengerFieldset.appendChild(dietLabel);

            var noRestrictionsCheckbox = document.createElement("input");
            noRestrictionsCheckbox.classList.add('checkbox'); // Add this line to add a class to the checkbox element
            noRestrictionsCheckbox.setAttribute("type", "checkbox");
            noRestrictionsCheckbox.setAttribute("name", "diet" + passengerNumber);
            noRestrictionsCheckbox.setAttribute("value", "no_restrictions");
            dietLabel.appendChild(noRestrictionsCheckbox);
            dietLabel.appendChild(document.createTextNode("No Restrictions"));
            dietLabel.appendChild(document.createTextNode(", \u00A0")); // Add a space character between the text nodes

            var vegetarianCheckbox = document.createElement("input");
            vegetarianCheckbox.classList.add('checkbox'); // Add this line to add a class to the checkbox element
            vegetarianCheckbox.setAttribute("type", "checkbox");
            vegetarianCheckbox.setAttribute("name", "diet" + passengerNumber);
            vegetarianCheckbox.setAttribute("value", "vegetarian");
            vegetarianCheckbox.classList.add('checkbox'); // Add this line to add a class to the checkbox element
            dietLabel.appendChild(vegetarianCheckbox);
            dietLabel.appendChild(document.createTextNode("Vegetarian"));
            dietLabel.appendChild(document.createTextNode(", \u00A0")); // Add a space character between the text nodes
            
            var veganCheckbox = document.createElement("input");
            veganCheckbox.setAttribute("type", "checkbox");
            veganCheckbox.setAttribute("name", "diet" + passengerNumber);
            veganCheckbox.setAttribute("value", "vegan");
            veganCheckbox.classList.add('checkbox'); // Add this line to add a class to the checkbox element
            dietLabel.appendChild(veganCheckbox);
            dietLabel.appendChild(document.createTextNode("Vegan"));
            dietLabel.appendChild(document.createTextNode(", \u00A0")); // Add a space character between the text nodes
    
            var paleoCheckbox = document.createElement("input");
            paleoCheckbox.setAttribute("type", "checkbox");
            paleoCheckbox.setAttribute("name", "diet" + passengerNumber);
            paleoCheckbox.setAttribute("value", "paleo");
            paleoCheckbox.classList.add('checkbox');
            dietLabel.appendChild(paleoCheckbox);
            dietLabel.appendChild(document.createTextNode("Paleo"));
            
            passengerFieldset.appendChild(dietLabel);
            passengerInfoContainer.appendChild(passengerFieldset);
            passengerInfoContainer.appendChild(document.createElement('br'));
        };
        var submitButton = document.createElement("input");
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('value', "Submit");
        passengerInfoContainer.appendChild(submitButton);

        // Attach event listener to the dynamically created form
        var passengerForm = document.forms['passengerTravelInformation'];
        passengerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        var formData = new FormData(this);
        var passengerData = {};

        for (var pair of formData.entries()) {
            passengerData[pair[0]] = pair[1];
        }

        var alertMessage = "Passenger Information:\n";      //sets alertMessage as a variable and assigns passenger information to it.
        for (var i = 0; i < passengerCount; i++) {          //stores data from each element of the object.
          var passengerNumber = i + 1;                      //checks for number of passengers and validates info has been captured for each.
          alertMessage += "\nPassenger " + passengerNumber + ":";       //displays passenger number for each passenger.
          alertMessage += "\nFirst Name: " + passengerData["firstName" + passengerNumber];  //adds passenger first name after First Name on a new line.
          alertMessage += "\nLast Name: " + passengerData["lastName" + passengerNumber];    //adds passenger last name after Last Name: on a new line.
          alertMessage += "\nAge: " + passengerData["age"];                                 //adds age of passenger after Age: on a new line.
          alertMessage += "\nGender: " + passengerData["gender " + passengerNumber];        //add gender of passenger after Gender: on a new line.
          alertMessage += "\nLocation: " + passengerData["destination" + passengerNumber];  //adds travel location for passenger after Location: on a new line.
          
          var dietaryRestrictions = document.querySelectorAll('input[name="diet' + passengerNumber + '"]:checked'); //validate which dietary checkbox was selected and prints on a new line for each passenger.
          var restrictionsArray = Array.from(dietaryRestrictions).map(function(checkbox) {  //assigns data mapped or grabbed from dietaryRestictions choice and assigne it to restrictionsArray.
            return checkbox.value;      //validate which checkbox selected and displays in alertbox.
          });
          alertMessage += "\nDietary restrictions: " + restrictionsArray.join(", ");        //displays the dietary array.
          alertMessage += "\n";         //adds a new line at end of alert message.
        }
        
        alert(alertMessage);        //give alert message.
        

        });
    };
};