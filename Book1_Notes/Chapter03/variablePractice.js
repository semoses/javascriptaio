// A file to practice using variable types and naming convention in JS as well as scope and initalizaion / declaration rules

// let

let phoneNumber; // wariable has been declared, but is empty (undefined)

phoneNumber = '444-444-4444'; // variable intialzation

let favoriteColor = 'lavendar'; // variable is declared and initialized on the same line

// tiny example of a JS program

let seven = 7;
let eight = 8;
let sum = seven + eight;

// variables are like boxes that can hold exactly one item
// the more descriptive the box label, the better for us, the people that have to use the boxes

let firstNumber = prompt("Pick a number");
let secondNumber = prompt("Pick another number");
let sum2 = firstNumber + secondNumber;
alert(sum2);

// var is no longer considered to be good practice among JS devs

// consts - variables that will never change value

// const likesTacos; is an error because consts MUST be declared & initialized at the same time

const likesTacos = true;

// technically consts are read-only references to values
// what this means in practice is that for arrays and objects, the const value would be the ref address, 
// but the underlying array or object stored at that address is subject to change
// for values like bools, stings, and ints that are passed by value, however, they can never change their underlying value

// consts are useful for program configuration variables that are references several times throughout a program but do not change
//          ex: url paths, theme colors, error messages

// consts are usually named using UPPER_SNAKE_CASE