let fruit = ["banana", " apple", " orange", " watermelon"];      //types of fruit in array called fruit.
let vegetables = ["carrot", " tomato", " pepper ", " lettuce"]; //types of vegetables in the array called vegetables.

editArray();                                                    //calls the editArray() function.


function editArray() {                                          //declares editArray as a function.
    let removesFromEndOfList = vegetables.pop();                //removes the last item in the vegetables array.
        console.log("vegetables remaining: " + vegetables);     //displays remaining list of vegetables.
    
    let removesFromFrontOfList = fruit.shift();                 //removes the first item in the fruit array.
        console.log("Fruits remaining: " + fruit);              //displays remaining list of fruits.

    let findIndexOfFruit = fruit.indexOf(" orange");            //finds the 3rd item from the fruit array.
        console.log(findIndexOfFruit);                          //displays what the 3rd items is "orange".
    
    fruit.push("1");                                            //adds the number assigned to findIndexOfFruit to the end of the fruit array.
        console.log(fruit);                                     //adds the number one to the end of the fruit array.
    
    let lengthOfVegetablesArray = vegetables.length;            //finds the length of the vegetables array.
        console.log(lengthOfVegetablesArray);                   //this displays the length of the vegetable array.
    
    vegetables.push("3");                                       //adds the length of the vegetable arrary to the end of the array.
        console.log(vegetables);                                //displays the number at the end of the vegetables array.

    let food = fruit.concat(vegetables);                        //combines the vegetable and the fruit arrays into one array.
        console.log(food);                                      //displays the new combined array.

    let removeIndexedItems = food.splice(4, 2);                 //removes two items from food array starting at index position 4.
        console.log(food);                                      //displays the new list of items in the food array.

    food.reverse();                                             //reverses the list of the food array items.
        console.log(food);                                      //displays the list of items in the food array after being reversed.
};