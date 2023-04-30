stringMethodsExercise();

function stringMethodsExercise() {
    
    let wordHello = "Hello";                                                    //creates variable called wordHello and assigns the word "Hello".
    let wordHelloWorld = "Hello World";                                         //creates variable called wordHelloWorld and assigns the string "Hello World".
    let wordString = "hey friends! practice practice practice";                 //creates variable called wordString and assigns string in "".
    
    let changingHello = wordHello.toUpperCase() + wordHello.toLowerCase();      //creates variable called changingHello and prints word "Hello" in caps and lowercase.
    
    let divideWord = Math.floor(wordHello.length / 2);                          //creates variable divideWord and assigns wordHello to it and divides it by 2 using math.floor.
    let sliceWord = wordHello.slice(0, wordHello.length / 2);                   //slices the word Hello in half.
        
    if (wordHelloWorld.length % 2 !== 0) {                                      //using modulus to verify if wordHelloWorld is odd or even in length;
        wordHelloWorld = wordHelloWorld.slice(0, Math.floor(wordHelloWorld.length / 2)).toUpperCase() + wordHelloWorld.slice(Math.floor(wordHelloWorld.length / 2)).toLowerCase();                                                          //if the length is odd then this line will be executed if even it is ignored.
      } else {
        wordHelloWorld = wordHelloWorld.slice(0, wordHelloWorld.length / 2).toUpperCase() + wordHelloWorld.slice(wordHelloWorld.length / 2).toLowerCase(); //if length of wordHelloWorld is even then this line is executed.
      };

    let newWordString = wordString.split(" ");                                  //splits wordString into individual words and assigns it to newWordString.
    
    for(let i = 0; i < newWordString.length; i++){                              //for loop that goes through each individual word in newWordString.
        newWordString[i] = newWordString[i][0].toUpperCase() + newWordString[i].substring(1);  // capitalizes first letter of each word and then puts word back together.
    };
    let newestString = newWordString.join(" ");                                 //joins the string back into one sentence.


    console.log(changingHello);                                                 //displays HELLOhello in terminal. 
    console.log(divideWord);                                                    //displays the number 2.
    console.log(sliceWord);                                                     //displays the first half of the word Hello - "He" in the terminal.
    console.log(wordHelloWorld);                                                //displays the string in wordHelloWorld is displayed in the terminal as "HELLO world".
    console.log(newestString);
}; 

