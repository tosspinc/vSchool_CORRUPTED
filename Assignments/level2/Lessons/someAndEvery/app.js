const names = ['Jack', 'John', 'Jill', 'Joseph', 'Jackie', 'Steve'];

//.some()   //returns true if at least one item in the array matches criteria.

//const result = names.some(function(name){
//    if(name[0] === 'S'){
//        return true;
//    };
//});

const result = names.some(name => name[0] === 'S');
console.log(result);

//.every()

//const results = names.every(function(name){
//    if(name[0] === 'J'){
//        return true;
//    };
//});

const results = names.every(name => name[0] === 'J');
console.log(results);