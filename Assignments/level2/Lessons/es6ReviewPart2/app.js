//updated code so user can just hit enter. the commented out code at the bottom works when the user clicks on the submit button.

const button = document.getElementById('button');
const output = document.getElementById('output');
const input = document.getElementById('input');

button.addEventListener('click', submitForm);
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    submitForm();
  }
});

function submitForm() {
  const inputValue = input.value;

  // Display the user-entered value
  output.innerText = "You've submitted: " + inputValue;

  // Call other functions and update the output accordingly
  const originalArray = [1, 2, 3];
  const newArray = unshift(originalArray, 4, 5, 6);

  // Display the original array and the modification
  output.innerText += "\nThe Original Array was: " + originalArray.join(", ");
  output.innerText += "\nYou have added 4, 5, 6 to the array and after shifting it around it displays as: " +
    newArray.join(", ");

  // Display the location and duration line
  const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  const sentence = parseSentence(vacation);
  output.innerText += "\n" + sentence;

  // Display the "hello Emily" message
  const name = 'Emily';
  const greeting = greet(name);
  output.innerText += "\n" + greeting;

  // Clear the text box
  input.value = '';
}

function collectAnimals(...animals) {  
  return animals;
}

function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

function unshift(array, ...items) {
  return [...items, ...array];
}

function greet(name, greeting = "hello") {
  return greeting + ", " + name;
}

/*
const button = document.getElementById('button');
const output = document.getElementById('output');
const input = document.getElementById('input');

button.addEventListener('click', () => {
  const inputValue = input.value;

  // Display the user-entered value
  output.innerText = "You've submitted: " + inputValue;

  // Call other functions and update the output accordingly
  const originalArray = [1, 2, 3];
  const newArray = unshift(originalArray, 4, 5, 6);

  // Display the original array and the modification
  output.innerText += "\nThe Original Array was: " + originalArray.join(", ");
  output.innerText += "\nYou have added 4, 5, 6 to the array and after shifting it around it displays as: " +
    newArray.join(", ");

  // Display the location and duration line
  const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
  };
  const sentence = parseSentence(vacation);
  output.innerText += "\n" + sentence;

  // Display the "hello Emily" message
  const name = 'Emily';
  const greeting = greet(name);
  output.innerText += "\n" + greeting;
});

function collectAnimals(...animals) {  
  return animals;
}

function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

function unshift(array, ...items) {
  return [...items, ...array];
}

function greet(name, greeting = "hello") {
  return greeting + ", " + name;
}*/
