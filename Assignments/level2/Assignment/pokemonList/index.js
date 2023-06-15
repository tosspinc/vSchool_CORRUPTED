//This gets a list of pokemon characters and displays them in the web browser individually an each one is a h1 header.

const pokemonArray = new Array();                               //declares pokemonArray as a variable and passes new array instance to it.
const xhr = new XMLHttpRequest();                               //delcares xhr as a variable and passes new instance of XMLHttpRequest to it.

xhr.open("GET", "https://api.vschool.io/pokemon", true);        //implements the xhr and looks at vschool server and assigns asynchronous to true.
xhr.send();                                                     //sends the xhr request to server.

xhr.onreadystatechange = function() {                           //declares an empty function and assigns function to xhr.
    if (xhr.readyState === 4 && xhr.status === 200) {           //validates that the request to server is good and that it has has been validated.
        const JSONdata = xhr.responseText;                      //declares JSONdata as a variable and assigns json text data to it.
        const data = JSON.parse(JSONdata);                      //declares data as a variable and assigns the returned json data to it.
        console.log(data);                                      //displays in the console the pokemon data.
        showData(data.objects[0].pokemon);                      //displays pokemon data.
    };
};

function showData(arr) {                                        //declares showData as a function and passes the array to it.
    arr.sort((a, b) => a.name.localeCompare(b.name));           //displays pokemon character names in alphabetical order.

    for (let i = 0; i < arr.length; i++) {                      //increments through names of pokemon characters.
        const container = document.createElement('div');        //declares container as a variable and creates a div on the web document.

        const h1 = document.createElement('h1');                //declares h1 as a variable and create h1 element in html document.
        h1.textContent = arr[i].name;                           //assigns name of pokemon character to h1.
        document.body.appendChild(h1);                          //puts data into the h1 on website.

        const h2 = document.createElement('h2');                //declares h2 as a variable and create h2 on document and passes it to hr.
        h2.textContent = 'information: ' + arr[i].information;  //assigns information about pokemon characters to the h2 in the web document.
        document.body.appendChild(h2);                          //puts data from json into the h2 for each character.
    
        //document.body.appendChild(container);
    };
};