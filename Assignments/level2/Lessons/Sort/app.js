//.sort()
// sorts the data and mutates the original array.
// purpose is to sort an array and needs two parameters in the function.

const arr = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5];

//arr.sort(function(a, b){
    //return a - b; //sorts by lowest to highest numbers.
    //return a + b;   //does not sort just displays same as in the original array.
    //return b - a;   //sorts from highest to lowest number.
//});

//arr.sort((a, b) => b - a);    //sorts the array from highest to lowest number.
//arr.sort((a, b) => a - b);    //sorts the array from the lowest to highest number.
arr.sort((a, b) => a + b);      //does not sort the array. displays it as the array is originally defined.
console.log(arr);
