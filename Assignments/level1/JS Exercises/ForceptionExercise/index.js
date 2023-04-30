let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];   //array of 5 names assigned to a variable called people.
let alphabet = "abcdefghijklmnopqrstuvwxyz";                    //a string of the alphabet letters assigned to a variable called alphabet. 

forception(people, alphabet);                                   //calling the function forception.

function forception(people, alphabet){                          //declaring a function called forception and assigning it the objects of people and alphabet.
    var result = [];                                            //declares result as a variable and sets it to null or as empty.
    var counter = 0;                                            //declares counter as a variable and sets it to 0;

    for (var i = 0; i < people.length; i++){                    //declaring the first for loop and assigns it to the people array.
        result.push(people[i] + ":");                           //puts each name in the name array one after the other.
        
        for (var j = 0; j < alphabet.length; j++){              //declare the seconde for loop and assigns it to the alphabet string.
            result.push(alphabet[j].toUpperCase());            //pushes the letters one after the other and changes them to uppercase.
        };
    };

    console.log(result);                                         //displays output to the terminal window.
};
