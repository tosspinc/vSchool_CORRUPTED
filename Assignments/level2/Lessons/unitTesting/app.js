//frameworks used for test are.
//1: https://mochajs.org
//2: http://chaijs.com

//Mocha is a test runner. It's sole job is to look for (or be told where to find) unit tests you've written, and to execute them. It also displays in a nice, easy format to show you how your unit tests faired - how many passed, how many and which ones failed.

function sum(num1, num2){
    return num1 + num2;
};

const actual = sum(10, 10);
const expected = 20;

if (actual !== expected){
    throw new Error('Test Failed: ${expected), but received ${actual}.')
} else {
        console.log('Test Passed: ${expected} === ${actual}')
};
