
function showLocation(position){                                        /* declares showLocation as a function and assings position data to showLocation. */
    let lattitude = position.coords.lattitude;                          /* declares lattitude as a variable and assigns the lattitude coordinates to it. */
    let longitude = position.coords.longitude;                          /* declares longitude as a variable and assigns the longitude coordinates to it. */
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2lat=" + lattitude + "&lon=" + longitude;

    fetch(url)                                                          /* this script grabs the url from google service. */
        .then(response => response.json())                              /* grabs data from data function and assigns it to the .then class. */
        .then(data => {
            let city = data.address.city || data.address.town || data.address.village;  /* || is used to validate property names in case data is formatted differently. validates data for city, town and village via google. */
            let state = data.address.state || data.address.province;                    /* || validates state and province data via google services that it is formated correctly. */
            let country = data.address.country;                                         /* assignds the country data found via google service to country variable. */
            document.getElementById("location.text").innerHTML = city + ", " + state + ",  " + country; /* assigns the city, state and country data obtained via google service and assigns it to location.text. */
        })

        .catch(error => {                                               /* assigns the error function to the class .catch. */
            console.log(error);
            document.getElementById("location.text").innerHTML = "Unable to detect your location";  /*assigns the string to location.text Id. */
        });
}


function showError(error){                                          /* this declares showError as a function and displays message below if information entered is not successful. */
    console.log(error);                                             /* displays the error message listed below to the console. */
    document.getElementById("location.text").innerHTML = "Unable to detect your location";
}

if (navigation.geolocation){                                            /* if statement that allows the navigation function to work and assings geolocation data to it. */
    if (navigation) {navigator.geolocation.getCurrentPosition(showLocation, showError);  /* assigns the current geolocation data to getCurrentPosition which is passed to geolocation. */
    } else {
        document.getElementById("location.text").innerHTML = "Geolocation is not supported by this browser"; /* if no data is assigned to navigator then error message below is displayed on console. */
    }
}

const form = document.getElementById("contact-form");               /* decares form as a constant variable and assigns the contact-form data to form. */

form.addEventListener("submit", (event) =>{                         /* creates the submit event listener for when submit is clicked on. */
    event.preventDefault();   
    console.log('submit')                                      /* tells the listener that if the event doesn't occur then don't proceed. */
    sendForm();                                                     /* calls or initiates the sendForm function. */
});

function sendForm() {                                               /* declares the sendForm as a function. */
    const name = document.getElementById("name").value;             /* declares name as a constant variable. */
    const address = document.getElementById("address").value;       /* declares address as a constatnt variable. */
    const city = document.getElementById("city").value;             /* declares address as a city variable. */
    const state = document.getElementById("state").value;           /* declares address as a state variable. */
    const zip = document.getElementById("zip").value;               /* declares address as a zip variable. */
    const phone = document.getElementById("phone").value;           /* declares address as a phone variable. */
    const email = document.getElementById("email").value;           /* declares address as a email variable. */
    const reason = document.getElementById("reason").value;         /* declares address as a reason variable. */
    
    /* Construct the email body*/
    const body = `
        Name: ${name}
        Address: ${address}                 
        City: ${city}                       
        State: ${state}                     
        Zip Code: ${zip}                    
        Phone: ${phone}                     
        Email: ${email}                     
        Reason for Contacting: ${reason}    
    `;
    
    /* Send the email using google. Will research to figure out how to get this to work. */

    window.open(`mailto:tosspinc@gmail.com?subject=${name}&body=${name}`);
    window.open('mailto:email@email')
    location.href = `mailto:tosspinc@gmail.com?subject=${name}&body=${name}`;
};


    

    
    
    
    
    
