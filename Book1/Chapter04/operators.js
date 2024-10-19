// A file to practice using operators and expressions in JS

// expression: piece of code that resolves to a value

let chapter = 4; // expression that affects something else

console.log(99 - 1); // also an expression

let x = 3;
x = x + 1;
console.log(x);

console.log(x += 1);
console.log(++x);
console.log(-(~x)); // bitwise NOT operator ~ inverts a binary representation: 0010 => 1101

// operators

x = 5 - 1 / 2; // operator precedence: PEMDAS but there are more operators to consider

// first divide 1 by 2
// then subtract it from 5
// then set x equal to that value

console.log(x); // 4.5

// Full Operator Table: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

// For absolute clarity, use the grouping operator (or parentheses) that rank with the highest precedence score of 18!

x = y = z = 0; // z = 0; y = 0; x = 0; because associativity runs from right-to-left for assignment operators

// Comparison Operators: ==, !=, ===, !==, >, >=, <, <=

// Strict (In)equality (===, !==) vs. Regular (In)equality (==, !=)
// Best practice to use the strict definitions and not to rely on type coersion done by JS

console.log(0 == "0"); // true
console.log(0 == ""); // also true
console.log(0 === ""); // false

// if relying on user input from a field (for say a number) that is returned as a string, as it often is,
// it's best practice to convert it to an int and use a strict check i.e.

let a = parseInt("3");
let b = parseInt("5");
console.log(a === b); // false

// Arithmatic Operators: +, -, *, /, %, ++, --, **

// Concatenation Operator used on strings

let yourName = "Marcellus L. Benfield";
let welcomeMessage = "Welcome, " + yourName;

let numberOfHats = 10;
console.log('Harriet has ' + numberOfHats + ' hats'); // <- number coerced into a string here

// Warning:
let sum = 1 + "1";
console.log(sum); // "11" which is definitely not right 

// what we should do:
sum = 1 + parseInt("1");
console.log(sum); // 2 which is more like it

// Logical Operators &&, ||, !

// short-circuit operators && and || (they stop evaluating when they  find a specific value)

// && returns the first falsy operand or, if all values are truthy, the last operand
console.log("a" && "" && "peanut butter"); // ""
console.log(1 && 7 && 19); // 19

// || return the first truthy operand or, if all values are falsy, the last operand
console.log("" || 0 || "popcorn" || null); // "popcorn"
console.log("" || 0 || NaN || null || 0n); // 0n

// ! only takes one operand and returns the opposite of it's truthy / falsy value
// reminder that the falsy values are: 0, -0, 0n, "", null, NaN, undefined
// in practice, the not operator is often used to test whether a variable has been initialized or not

var isReg = function (isRegistered) {
    if (!isRegistered) { alert("Register now!") };
};

// one can also use two NOT operators !! to convert any value into its boolean expression

console.log(!!"I like cheese"); // true