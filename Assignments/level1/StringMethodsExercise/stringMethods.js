
var city = "New York City";

//toUpperCase - changes lower case letters in a string to uppercase.
//toLowerCase - changes upper case letter in a string to lowercase.
var name = "luke";                                              //declares name as a variable and assigns the string "luke" to it.

var upperCasedLuke = name.toUpperCase();                        //declares upperCasedLuke as a variable and assigns name to it and then converts it to uppercase.
var lowerCasedLuke = upperCasedLuke.toLowerCase();              //declares lowerCasedLuke as a variable and assign upperCasedLuke to it and converts it to lowercase.

//concat -  combines two strings or arrays into one string, array or combination of such.
var S = "'s";                                                    //declares the variable S and assigns the letter s to it.

var newName = name.concat(S);                                   //declares newName as a variable and assigns combines the letter s and what is stored in the name variable together as one string.

//split - splits a string or an array at a particular point that is desired.
var animal = "tiger";

var characterArr = animal.split();                              //this converts the string of "tiger" in the variable animal into an array.
var newCharacterArr = animal.split("");                        //this converst the string of "tiger" into individuals letters and converts it into an array.

//slice -   this slices a string or array at a particular location that is desired.
var phoneNumber = "6764567890";
var first3 = phoneNumber.slice(0, 3);                           //splits the phoneNumber string at location 3.

var next3 = phoneNumber.slice(3, 6);                            //splits the phoneNumber string at location number 6.
var last4 = phoneNumber.slice(6);                               //second argument request in parenthesis not needed as goes to end of string and start at postion 6.
var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4;    //combines all of the variables and adds the dashes.

//indexOf: shows the place or location of a particular item you want to locate in a string or variable.
var indexOfLetterC = city.indexOf("C");                         //assigns indexOfC as a variable and looks for the location of the letter C in the city variable.
var indexOfC = city.indexOf(" ");                               //looks for the location of the first empty space in the city variable.
var lastIndexOfC = city.lastIndexOf(" ");                        //looks for the location of the last empy space in in the city variable.


console.log(upperCasedLuke);                                    //displays luke as LUKE - which is uppercase letters.
console.log(lowerCasedLuke);                                    //displays LUKE back in lowercase letters.
console.log(newName);                                           //displays luks as lukes - it combines the name and S varibles from above.
console.log(characterArr);                                      //displays tiger as an array.
console.log(newCharacterArr);                                   //displays tiger as individual letter in a new array.
console.log(first3);                                            //displays the first 3 numbers of the phoneNumber object.
console.log(next3);                                             //displays the second 3 numbers of the phoneNumber object.
console.log(last4);                                             //displays the last 4 number of the phoneNumber object.
console.log(phoneNumWithDashes);                                //displays the combined phone number form PhoneNumWithDashes variable including the dashes.
console.log(indexOfLetterC);                                    //displays the location of the letter C in the variable called city.
console.log(indexOfC);                                          //displays the location of first empty space in the variable called city.
console.log(lastIndexOfC);                                      //displays the location fo the last empty space in the variable called city.