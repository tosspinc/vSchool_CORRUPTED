//instructions.
//step 1: use the list of names from the original list from vSchool 
//stpe 2: then combine a list of new names.  
//step 3: Then remove the second name in the list. 
//step 4: filter out the names that end with the letters 'a' and 'y'.
//step 5: make two lists of names.
//step 6: display a list of names of those which last names end in 'a' and 'y' in alphabetical order.
//step 7: display a list of the remaining name with the second name of the combined list removed and display the names in alphabetical order.


var peopleArray = [ //original list of names.
    {firstName: "Sarah", lastName: "Palin", age: 47}, 
    {firstName: "Frank", lastName: "Zappa", age: 12},
    {firstName: "Rick", lastName: "Sanchez", age: 78 },
    {firstName: "Morty", lastName: "Smith", age: 29},
    {firstName: "Kyle", lastName: "Mooney", age: 27},
    {firstName: "Pasha", lastName: "Datsyuk", age: 13},
    {firstName: "Lev", lastName: "Tolstoy", age: 82}
];

const newNames = [  //array with new names to be added to list.
    {firstName: 'Arnold', lastName: 'Jones', age: 58},
    {firstName: 'Raquel', lastName: 'Jones', age: 48},
    {firstName: 'Tsolole', lastName: 'Wolfgramm', age: 30}
];

var arr = peopleArray.concat(newNames);  //the combines both lists of names.

//sorts names alphabetically comparing last names of each person in the list.
arr.sort(function(a, b) { 
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;
});

arr.splice(1, 1);  //removes the second name in the list.

//filters the name of the list of individuals whose names end in an 'a' or 'y'.
var lastNamesEndingInYAndA = arr.filter(function(person) {
    var lastName = person.lastName.toLowerCase();
    return lastName.endsWith('y') || lastName.endsWith('a');
});

// returns the list of names that end with a 'a' or a 'y'.
var remainingNames = arr.filter(function(person) {
    var lastName = person.lastName.toLowerCase();
    return !lastName.endsWith('y') && !lastName.endsWith('a');
});


lastNamesEndingInYAndA.sort(function(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;
});

//sorts the remaing list of names alphabetically. compariing the first name in the list to the next name in the list.
remainingNames.sort(function(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    } else if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;
});

//displays the list of names ending with the letter 'a' and 'y' in alphabetical order first.  then displays the remaining list in alphabetical order with the second name on the combined list removed.  has my name removed from the list.
console.log(lastNamesEndingInYAndA);
console.log(remainingNames);