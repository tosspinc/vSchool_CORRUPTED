const passengerForm = document.getElementById('travelFormContainer');      //defines form as a constant variable and assigns travelFormContainer to it.

function detectLanguage() {                     //declares detectLanguage function so browser will automatically detect users language.
    var preferredLanguage = navigator.language || navigator.userLanguage;   //compares navigator browser language to current users language.
    var lang = preferredLanguage.substr(0, 2);                              //subtracts first two letter of the users current browner language and dynamically assigns it to lang on html page.
    document.documentElement.lang = lang;                                   //assigns lang to the html main document page declaration of <html lang="xx".
}

function tosspiPassengerCount() {
    var passengerCount = parseInt(document.getElementById("passengerCount").value);
    var passengerInfoContainer = document.getElementById("passengerInfoContainer");
    
    passengerInfoContainer.innerHTML = "";      //clears out the passengerInfoContainer box data when choosing from drop down menu.
    if (passengerCount > 0) {
        for(i = 0; i < passengerCount; i++) {
            var passengerNumber = i + 1;

            var passengerFieldset = document.createElement('fieldset');
            passengerFieldset.innerHTML = '<legend>Passenger ' + passengerNumber + '</legend>';

            var firstNameLabel = document.createElement('label');
            passengerFieldset.appendChild(document.createElement('br'));
            firstNameLabel.textContent = 'First Name: ';
            passengerFieldset.appendChild(firstNameLabel);

            var firstNameInput = document.createElement('input');
            firstNameInput.setAttribute('type', 'text');
            firstNameInput.setAttribute('placeholder', 'First Name');
            firstNameInput.setAttribute('name', 'firstName' + passengerNumber);
            firstNameInput.classList.add('input-field');
            passengerFieldset.appendChild(firstNameInput);

            var lastNameLabel = document.createElement('label');
            lastNameLabel.textContent = 'Last Name: ';
            passengerFieldset.appendChild(lastNameLabel);
            
            var lastNameInput = document.createElement('input');
            lastNameInput.setAttribute('type', 'text');
            lastNameInput.setAttribute('placeholder', 'Last Name');
            lastNameInput.setAttribute('name', 'lastName' + passengerNumber);
            lastNameInput.classList.add('input-field');
            passengerFieldset.appendChild(lastNameInput);

            var ageInputLabel = document.createElement('label');
            passengerFieldset.appendChild(document.createElement('br'));
            passengerFieldset.appendChild(document.createElement('br'));
            ageInputLabel.textContent = 'Age: ';
            passengerFieldset.appendChild(ageInputLabel);


            var ageInput = document.createElement('input');
            ageInput.setAttribute('type', 'number');
            ageInput.setAttribute('placeholder', 'Age');
            ageInput.setAttribute('name', 'age', min='1', max='99', + passengerNumber);
            ageInput.classList.add('input-field');
            passengerFieldset.appendChild(ageInput);

            var genderLabel = document.createElement('label');
            genderLabel.textContent = 'Gender: ';
            passengerFieldset.appendChild(genderLabel);
   
            var femaleRadio = document.createElement('input');
            femaleRadio.setAttribute('type', 'radio');
            femaleRadio.setAttribute('name', 'gender ' + passengerNumber);
            femaleRadio.setAttribute('value', 'female');
            genderLabel.appendChild(femaleRadio);
            genderLabel.appendChild(document.createTextNode('Female'));
 
            var maleRadio = document.createElement('input');
            maleRadio.setAttribute('type', 'radio');
            maleRadio.setAttribute('name', 'gender ' + passengerNumber);
            maleRadio.setAttribute('value', 'male');
            genderLabel.appendChild(maleRadio);
            genderLabel.appendChild(document.createTextNode('Male'));

            var destinationSelectLabel = document.createElement('label');
            passengerFieldset.appendChild(document.createElement('br'));
            passengerFieldset.appendChild(document.createElement('br'));
            destinationSelectLabel.textContent = 'Destination: ';
            passengerFieldset.appendChild(destinationSelectLabel);

            var destinationSelect = document.createElement("select");
            destinationSelect.setAttribute("name", "destination" + passengerNumber);

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

        var alertMessage = "Passenger Information:\n";
        for (var i = 0; i < passengerCount; i++) {
          var passengerNumber = i + 1;
          alertMessage += "\nPassenger " + passengerNumber + ":";
          alertMessage += "\nFirst Name: " + passengerData["firstName" + passengerNumber];
          alertMessage += "\nLast Name: " + passengerData["lastName" + passengerNumber];
          alertMessage += "\nAge: " + passengerData["age"];
          alertMessage += "\nGender: " + passengerData["gender " + passengerNumber];
          alertMessage += "\nLocation: " + passengerData["destination" + passengerNumber];
          
          var dietaryRestrictions = document.querySelectorAll('input[name="diet' + passengerNumber + '"]:checked');
          var restrictionsArray = Array.from(dietaryRestrictions).map(function(checkbox) {
            return checkbox.value;
          });
          alertMessage += "\nDietary restrictions: " + restrictionsArray.join(", ");
          alertMessage += "\n";
        }
        
        alert(alertMessage);
        

        });
    };
};