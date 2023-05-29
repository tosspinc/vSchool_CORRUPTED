//allows you to try out some code.
//if an error occurs (if an error is thrown)
//these are native to javascript.
try {    
    if (2 === 2){
       throw new Error("Hey I am an error!")
    }
    console.log("Did I console log?");
    }
    catch(err){
    console.log(err);
}finally {
    console.log('I am running no matter what!');
};

//YIGTIN = Yesterday is Gone, Today is Now
var input = "YiGTiN";

try {
  if(input == "") {
    throw "Input can not be empty";
  } else if(input.length > 6) {
    throw "Input is to big";
  } else {
    console.log("You code runs fine!");
  }
} catch(err) {
  console.log(err);
} finally {
  console.log("Runs no matter what");
  console.log("And the input was " + input);
}