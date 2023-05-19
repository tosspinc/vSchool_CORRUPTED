//Higher Order functions.

//methods are sniipets of code that are functions that are part of a bigger object. they can only be used when attached to an array, string, object, etc.
    //item.function(function(){});
        //.map();       runs a new array with a change made to every item from the original array.

            //var arr = [1, 2, 3, 4];
            //arr.map(function(item){
            //   return item + 1; 
            //});       //this will display => [2, 3, 4, 5]

            //compare this to a normal for loop.
            //var arr = [1, 2, 3, 4];
            //
            //for (var i = 0; i < arr.lenght; i++) {
            //    arr[i] += 1;
            //};  //displays => [2, 3, 4, 5]

            //var dogs = ['lab', 'poodle', 'shih-tzu'];
            //
            //dogs.map(function(dog){
            //   return dog + 's are quite fancy';
            //});      //displays => ['lab's are quite fancy', 'poodle's are quite fancy', 'shih-tzu's are quite fancy']


        //.filter();    returns a new array that only includes some of the items from the original array.
            //.filter runs a loop and returns a new array with only the items that meet that condition.
            // var numbers = [12, 4, 56, 27];
            //
            //numbers.filter(function(number){
            //  return number >= 25;
            //});       //=> displays [56, 27] as those are the only numbers in the array that met the requirements.

            //old way of writing an array for loop.
            //var numbers = [12,4,56,27];
            //var newArr = [];
            //
            //for (var i = 0; i < numbers.length; i++){
            //if (numbers[i] >= 25){
            //  newArr.push(numbers[i]);
            //};
            //};        //displays new array => [56, 27]

        //.reduce();    returns any kind of value you want (number, string boolean, array, etc.).
            //.reduce returns the sum of the array of numbers.
            //var numbers = [1,2,3,4,5];
            //
            //numbers.reduce(function(a,b){
            //  return a + b
            //});       //=> 15

        //.sort();      modifies or mutates the original array be re-ordering the items therein.
            //sort modifys by sorting it alphabetically or number (low - high) or (high - low).
            //var scores = [12,98,34,85];
            //scores.sort(function(a,b){
            //  return a - b
            //});   
            // => [12,34,85,98]

            //sorting high to low.
            //var scores = [12,98,34,85];
            //scores.sort(function(a,b){
            //  return b - a
            //});
            // displays => [98,85,34,12]
            //
            //or sorting words alphabetically.
            //var words = ['bat', 'pineapple', 'drugs', 'zebra', 'ghost'];
            //  words.sort()
            // displays => ['bat', 'drugs', 'ghost', 'pineapple', 'zebra']
            //a function is needed only if you are ordering numbers.

        //.forEach;     returns undefined 
            //run a loop on an array but does not create a new array. does the same as .map without creating a new array.
            //var numbers = [1,2,3,4]
            //numbers.forEach(function(number){
            //  return number * 2
            //});
            // displays => [1,2,3,4]    //no changes occured. 
            //to view with the changes occuring or math being performed.
            //var number = [1, 2, 3, 4];
            //numbers.forEach(function(number){
            //return numbers[i] = number * 2;    
            //});
            //displays => [2, 4, 6, 8]
            // i was added as the second parameter [i]. Anytime a second parameter is given to .map, .filter or .forEach it //becomes the indext of that array. most of the time we will use .map over .forEach. 
        
        //.find;        finds one of the arrays from the array.
            //returns the value of the first item in the array that meets the given condition.
            //var numbers = [12, 30, 5, 62, 18, 53]
            //numbers.find(function(number){
            //  return number > 50;
            //});
            // displays => [62] as this is the first number over 50 in the array.

        //.findIndex(); same as .find but instead of returning the item in the array, it returns the index where it found the  mathching item.
            //returns the index of the first item in the array that meets the given condition. (gets index instead of actual number)
            //var number = [12, 30, 5, 62, 18, 53];
            //numbers.findIndex(function(number){
            //  return number > 50;    
            //});
            //displays => 3  as the number 62 in the array is in the 3 index position of the array.

        //.some         returns either true or false.
            //checks if ANY items in an array meet a given condition and returns True or False.
            //var number = [12, 30, 5, 62, 18, 53];
            //numbers.findIndex(function(number){
            //  return number > 50;    
            //});
            //displays => true  as there are numbers greater than 50 in the array.
            //
            //var number = [1, 5, 19, 49, 23];
            //numbers.findIndex(function(number){
            //  return number > 50;    
            //});
            //displays => False as there are no numbers greater than 50 in the array.

        //.every        returns true or false.
            //checks if all items in the array meet a given condition and returns True or False.
            //var number = [12, 30, 5, 62, 18, 53];
            //numbers.every(function(number){
            //  return number > 50;    
            //});
            //displays => False all of the numbers in the array are not greater than 50.
            //
            //var number = [1, 5, 19, 49, 23];
            //numbers.every(function(number){
            //  return number < 50;    
            //});
            //displays => True as all of the numbers in the array are less than 50.

//functions are snippets of code that written to perform specific tasks but can be called whenever, they do not need to be attached to anything.
    //function(function(){});   this is a regular function.
        //setInterval();
        //getInterval();
        //setTimeout();
        //clearInterval();
        //