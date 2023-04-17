//create a button that allows you to toggle between "lights on" and "light off" and will toggle a total of the addintion of the numbers in the array.
// I need to use the modulus operator and this will leave a remainder. this remainder is what I need to validate in my coding.
var bonusChallenge = [2, 1, 3]; //adding these together to come to sum this would equal 6, which is a even number.
var sumOfBonusChallenge = 0;
var testOne = [2, 5, 435, 4, 3];
var sumOfTestOne = 0;
var testTwo = [1, 1, 1, 1, 3];
var sumOfTestTwo = 0;
var testThree = [9, 3, 4, 2];
var sumOfTestThree = 0;


for (var i = 0; i < bonusChallenge.length; i++){
    sumOfBonusChallenge = bonusChallenge[i];       //adds together the integers of bonusChallenge array & totals 6, displayed as "ligts are off".
} 

for (var i = 0; i < testOne.length; i++){
    sumOfTestOne = testOne[i];                     //adds integers of testOne array from loops and array bonus challenge in level 1 assignment & totals 449, displayed as "lights are on".
} 

for (var i = 0; i < testTwo.length; i++){
    sumOfTestTwo = testTwo[i];                     //adds integers of testTwo array from loops and array bonus challenge in level 1 assignment & totals 7, displayed as "lights are on".
} 

for (var i = 0; i < testThree.length; i++){         //adds integers of testThree array from loops and Array bonus challenge in level 1 assignment and totals 18, displayed "lights are off".
    sumOfTestThree = testThree[i];
} 

for (var i = 0; i < sumOfBonusChallenge; i++){
    if (sumOfBonusChallenge[i] === sumOfTestOne[i]) {
        console.log("The light is on.");
    };
    if (sumOfBonusChallenge[i] === sumOfTestTwo[i]){
        console.log("The light is on.");
    };
    if (sumOfBonusChallenge[i]=== sumOfTestThree[i]){
        console.log("the light is off.");
    };
}
//console.log("the sum of my bonus challenge array is: " + sumOfBonusChallenge);
//console.log("the sum of my test one array is: " + sumOfTestOne);
//console.log("the sum of my test two array is: " + sumOfTestTwo);
//console.log("the sum of my test three array is: " + sumOfTestThree);