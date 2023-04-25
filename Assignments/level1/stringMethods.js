var phoneNumber = "6764567890";
var city = "New York City";

var first3 = phoneNumber.slice(0, 3);                           //splits the phoneNumber string at location 3.
var next3 = phoneNumber.slice(3, 6);                            //splits the phoneNumber string at location number 6.
var last4 = phoneNumber.slice(6);                               //second argument request in parenthesis not needed as goes to end of string and start at postion 6.
var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4;    //combines all of the variables and adds the dashes.
var indexOfLetterC = city.indexOf("C");                         //assigns indexOfC as a variable and looks for the location of the letter C in the city variable.
var indexOfC = city.indexOf(" ");                               //looks for the location of the first empty space in the city variable.
var lastIndexOfC = city.lastIndexOf(" ");                        //looks for the location of the last empy space in in the city variable.

console.log(first3);                                            //displays the first 3 numbers of the phoneNumber object.
console.log(next3);                                             //displays the second 3 numbers of the phoneNumber object.
console.log(last4);                                             //displays the last 4 number of the phoneNumber object.
console.log(phoneNumWithDashes);                                //displays the combined phone number form PhoneNumWithDashes variable including the dashes.
console.log(indexOfLetterC);                                    //displays the location of the letter C in the variable called city.
console.log(indexOfC);                                          //displays the location of first empty space in the variable called city.
console.log(lastIndexOfC);                                      //displays the location fo the last empty space in the variable called city.