//XMLHttpRequest

//a javascript constructor and it uses callbacks.
//how to create a xhr request.
//what parts are important for request.
//xhr.onreadystatechange
//xhr.readyState
//xhr.status

const xhr = new XMLHttpRequest();   //defines xhr as a constant variable. assigns the new XMLHttpRequest() function to it.

xhr.onreadystatechange = function(){    //empty function has been assigned to xhr.onreadystatechange.
    if(xhr.readyState === 4 && xhr.status === 200){ //if ready state is completed and is successful or equals 200 then process next lines of code.

    }
};

//xhr.readyState
//1 - request has been sent.
//2
//3
//4

//xhr.status
//200 everything is good.
//404 - server status for not finding what requested.
//201 - post request successfully added
//500 - issue with servier