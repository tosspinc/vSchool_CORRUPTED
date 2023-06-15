//XMLHttpRequest

//a javascript constructor and it uses callbacks.
//how to create a xhr request.
//what parts are important for request.
//xhr.onreadystatechange
//xhr.readyState
//xhr.status

//xhr.open - sets up request.
//xhr.send - sends request to server.

//url: https://swapi.co/api/people/1

const xhr = new XMLHttpRequest();   //defines xhr as a constant variable. assigns the new XMLHttpRequest() function to it.

//this xhr.open needs three parameters. GET, webaddress and asynchronous.  so code can run without waiting for completion.
xhr.open("GET", "https://swapi.dev/api/people/1", true);

//then send request to server.
xhr.send(); //nothing is needed here as it is sending request for above line of code.

xhr.onreadystatechange = function(){    //empty function has been assigned to xhr.onreadystatechange.
    if(xhr.readyState === 4 && xhr.status === 200){ //if ready state is completed and is successful or equals 200 then process next lines of code.
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        console.log(data);
    }
};
