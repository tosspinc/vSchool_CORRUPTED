//es5 format
/*function addNumbers() {
  var numbers = Array.prototype.slice.call(arguments);

  return numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0);
}

const result = addNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);
*/

function addNumbers(...numbers) {
  // numbers is now an array that we can use .reduce() on
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

const result = addNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log(result);


//es5 format
// const defaultColors = ['red', 'green'];
// const userFavoriteColors = ['orange', 'yellow'];

// var allColors = defaultColors.concat(userFavoriteColors);  /*this combines both arrays to make one array with the list or red, green, orange and yellow.*/
// console.log(allColors);

/*adding an additonal two colors to the array.*/
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['blue', 'brown'];

var allColors = defaultColors.concat(userFavoriteColors, fallColors);  /*this combines both arrays to make one array with the list or red, green, orange and yellow.*/
console.log(allColors);  /*this will show an array of all six colors.*/

/*write a shopping list that checks for milk and if it does not have it in the list add it to the list. in es5 format.*/
/*function validateShoppingList(shoppingList) {
    var hasMilk = false;
  
    for (var i = 0; i < shoppingList.length; i++) {
      if (shoppingList[i] === 'milk') {
        hasMilk = true;
        break;
      }
    }
  
    if (!hasMilk) {
      shoppingList.push('milk');
    }
  
    return shoppingList;
  }
  
var shoppingList = ['bread', 'eggs', 'apples'];
var validatedList = validateShoppingList(shoppingList);
console.log(validatedList);*/

/*above shopping list in es6 format*/
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
      return [ 'milk', ...items ];
    }
  
    return items;
  }
  
const shoppingList = validateShoppingList('oranges', 'bread', 'eggs');
console.log(shoppingList);

//rest and spread methods in es5 format.

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

//es5 format
var MathLibrary = {
  calculateProduct: function() {
    var rest = Array.prototype.slice.call(arguments);
    console.log('Please use the multiply method instead');
    return this.multiply.apply(this, rest);
  },
  multiply: function(a, b) {
    return a * b;
  }
};


//es6 format with new variable assigned.
var MathLibrary2 = {
    calculateProduct(...rest) {
      console.log('Please use the multiply method instead');
      return this.multiply(...rest);
    },
    multiply(a, b) {
      return a * b;
     }
  };

var sum = MathLibrary.calculateProduct(a, b);
console.log(sum);
  
const newSum = MathLibrary2.calculateProduct(a, b);
console.log(newSum);

//using reduce operator.
/*function product(a, b, c, d, e) {
    const numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }
  
const results = product(a, b, c, d, e);
console.log(results);*/
  
//using both rest and spread.
//es5 format
var array = ['lets', 'have', 'some', 'fun'];
function unshift(array) {
    var rest = Array.prototype.slice.call(arguments, 1);
    return rest.concat(array);
}

var unshiftResults = unshift.apply(null, [array, a, b, c, d, e]);
console.log(unshiftResults);

//es6 format.
/*const product = (a, b, c, d, e) => {
    const numbers = [a, b, c, d, e];

return numbers.reduce((acc, number) => acc * number, 1);
};

const results = product(a, b, c, d, e);
console.log(results);

//do for both an array and numbers.
const array = ['lets', 'have', 'some', 'fun'];

function unshift(array, a, b, c, d, e) {
    return [a, b, c, d, e].concat(array);
}

const unshiftResults = unshift(array, a, b, c, d, e);
console.log(unshiftResults);*/