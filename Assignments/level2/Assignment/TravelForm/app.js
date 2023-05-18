const passengerForm = document.getElementById('travelFormContainer');      //defines form as a constant variable and assigns travelFormContainer to it.

function detectLanguage() {                     //declares detectLanguage function so browser will automatically detect users language.
    var preferredLanguage = navigator.language || navigator.userLanguage;   //compares navigator browser language to current users language.
    var lang = preferredLanguage.substr(0, 2);                              //subtracts first two letter of the users current browner language and dynamically assigns it to lang on html page.
    document.documentElement.lang = lang;                                   //assigns lang to the html main document page declaration of <html lang="xx".
}

function tosspiPassengerCount() {
    var passengerCount = document.getElementById("passengerCount").value;
    var passengerForm = document.getElementById("passengerForm");

    passengerForm.innerHTML = "";

    for(i = 0; i < passengerCount; i++) {
        var passengerNumber = i + 1;

        var passengerFieldset = document.createElement('fieldset');
        passengerFieldset.innerHTML = '<legend>Passenger ' + passengerNumber + '</legend>';

        var firstNameInput = document.createElement('input');
        firstNameInput.setAttribute('type', 'text');
        firstNameInput.setAttribute('placeholder', 'First Name');
        firstNameInput.setAttribute('name', 'firstName' + passengerNumber);
        passengerFieldset.appendChild(firstNameInput);a
        var lastNameInput = document.createElement('input');
        lastNameInput.setAttribute('type', 'text');
        lastNameInput.setAttribute('placeholder', 'Last Name');
        lastNameInput.setAttribute('name', 'lastName' + passengerNumber);
        passengerFieldset.appendChild(lastNameInput);
 
    //    // var genderLabel = document.createElement('label');
    //     genderLabel.textContent = 'Gender: ';
    //     passengerFieldset.appendChild(genderLabel);

    //     var femaleRadio = document.createElement('input');
    //     femaleRadio.setAttribute('type', 'radio');
    //     femaleRadio.setAttribute('name', 'gender ' + passengerNumber);
    //     femaleRadio.setAttribute('value', 'female');
    //     genderLabel.appendChild(femaleRadio);
    //     genderLabel.appendChild(document.createTextNode('Female'));
 
    //     var maleRadio = document.createElement('input');
    //     maleRadio.setAttribute('type', 'radio');
    //     maleRadio.setAttribute('name', 'gender ' + passengerNumber);
    //     maleRadio.setAttribute('value', 'male');
    //     genderLabel.appendChild(maleRadio);
    //     genderLabel.appendChild(document.createTextNode('Male'));

    //     var ageInput = document.createElement('input');
    //     ageInput.setAttribute('type', 'number');
    //     ageInput.setAttribute('placeholder', 'Age');
    //     ageInput.setAttribute('name', 'age' + passengerNumber);
    //     passengerFieldset.appendChild(ageInput);

    //     var dietLabel = document.createElement("label");
    //     dietLabel.textContent = "Dietary Preference: ";
    //     passengerFieldset.appendChild(dietLabel);

    //     var noRestrictionsCheckbox = document.createElement("input");
    //     noRestrictionsCheckbox.setAttribute("type", "checkbox");
    //     noRestrictionsCheckbox.setAttribute("name", "diet" + passengerNumber);
    //     noRestrictionsCheckbox.setAttribute("value", "no_restrictions");
    //     dietLabel.appendChild(noRestrictionsCheckbox);
    //     dietLabel.appendChild(document.createTextNode("No Restrictions"));

    //     var vegetarianCheckbox = document.createElement("input");
    //     vegetarianCheckbox.setAttribute("type", "checkbox");
    //     vegetarianCheckbox.setAttribute("name", "diet" + passengerNumber);
    //     vegetarianCheckbox.setAttribute("value", "vegetarian");
    //     dietLabel.appendChild(vegetarianCheckbox);
    //     dietLabel.appendChild(document.createTextNode("Vegetarian"));

    //     var veganCheckbox = document.createElement("input");
    //     veganCheckbox.setAttribute("type", "checkbox");
    //     veganCheckbox.setAttribute("name", "diet" + passengerNumber);
    //     veganCheckbox.setAttribute("value", "vegan");
    //     dietLabel.appendChild(veganCheckbox);
    //     dietLabel.appendChild(document.createTextNode("Vegan"));

    //     var paleoCheckbox = document.createElement("input");
    //     paleoCheckbox.setAttribute("type", "checkbox");
    //     paleoCheckbox.setAttribute("name", "diet" + passengerNumber);
    //     paleoCheckbox.setAttribute("value", "paleo");
    //     dietLabel.appendChild(paleoCheckbox);
    //     dietLabel.appendChild(document.createTextNode("Paleo"));

    //     var destinationSelect = document.createElement("select");
    //     destinationSelect.setAttribute("name", "destination" + passengerNumber);
    //     var destinations = ["Destination 1", "Destination 2", "Destination 3", "Destination 4"];
    //     for (var j = 0; j < destinations.length; j++) {
    //       var option = document.createElement("option");
    //       option.setAttribute("value", destinations[j]);
    //       option.textContent = destinations[j];
    //       destinationSelect.appendChild(option);
    //     };
  //      passengerFieldset.appendChild(destinationSelect);

        passengerForm.appendChild(passengerFieldset);
    };
};