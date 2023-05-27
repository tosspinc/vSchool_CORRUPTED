//1. turn an array of numbers into a total of all numbers.
const digits = [1, 2, 3];

const total = digits.reduce(function(final, digit){
    final += digit;
    return final;
});

console.log(total);

