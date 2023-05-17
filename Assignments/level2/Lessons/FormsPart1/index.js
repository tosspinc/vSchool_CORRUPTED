//console.log(form.ant?.value);    //adding the ? after a method,etc allows that error to show and keeps program running.
const form = document["my-form"];


form.addEventListener("submit", function(event){    //submit eventlistener.
    event.preventDefault();                         //stops page from refreshing.
    const fName = form.fName.value;                 //declares constant variable named fName.
    const lName = form.lName.value;                 //declares constant variable named lName.
    
    form.fName.value = "";                          //clears out the data after selecting submit or enter.
    form.lName.value = "";                          //clears out the data after selecting submit or enter.
    console.log(form);
    
    
    const h1 = document.createElement('h1');        //creates an h1 element on the website.                 
    h1.textContent = fName + " " + lName;    //puts input data from text boxes into h1.
    document.getElementsByTagName("body")[0].append(h1);    //displays on website in h1 format below textboxes.
}); 