// A file to practice using different JS data types

// variables all have two things in common: a value and a type

// JS is both loosely-typed (don't have to declare variable type) 
// and dynamically-typed (a variable can hold different data types once declared)

console.log(typeof 'helloWorld') // => string

console.log(typeof a) // => undefined

console.log(typeof 0) // => number

// JS's 7 Primative Data Types: string, number, bigint, bool, symbol, undefined, null
// Primative data types are passed by value, not reference

let firstName = 'Sahara';
let lastName = 'Moses';
let fullName = firstName + ' ' + lastName; // 'Sahara Moses'

// if we change the value of firstName and lastName, the value of fullName does not change 
// because it was created by value, not reference

// strings

let catName = 'Mr. Furley';

// quotes within string must be inside of quotes of the opposite quote type or escaped:
// ""The best thing one can do when it is raining is to let it rain""

let quote = "'The best thing one can do when it is raining is to let it rain'";
quote = '"The best thing one can do when it is raining is to let it rain"';
quote = "\"The best thing one can do when it is raining is to let it rain\"";

// template literal notation

let raining = 'raining'
quote = `"The best thing one can do when it is ${raining} is to let it rain"`

let escapeChars = "\' \" \\ \n \r \t \b \f";

let orderTotal = 39.99;
let itemPurchased = 'JavaScript All-in-One For Dummies';
let customer = 'Joe Q. Developer';

let thankYou = `${customer}, thank you for your order of ${itemPurchased}. Your payment of ${orderTotal} was successful.`;

// String Methods:

// charAt

let randomLetters = 'pdfsdj';
console.log(randomLetters.charAt(4)); // 'd'

let houseNumber = '555';
let streetName = 'Shady Lane';
console.log(houseNumber.concat(' ', streetName)); // '555 Shady Lane'

let typeOfTree = 'Pine';
console.log(typeOfTree.indexOf('e')); // 3

let vowelsList = 'a,e,i,o,u';
console.log(vowelsList.split(',')); // ['a', 'e', 'i', 'o', 'u']

// Note: If start is greater than end, arguments are swapped: (4, 1) = (1, 4)
let phoneNumber = '313-555-1234';
console.log(phoneNumber.substring(12, 4)); // 555-1234

console.log(phoneNumber.slice(4, 12)); // 555-1234

let message = 'Learn FORTRAN';
console.log(message.replace('FORTRAN', 'JavaScript')); // Learn JavaScript

let username = 'semoses';
console.log(username.toUpperCase()); // SEMOSES

let state = 'PA';
console.log(state.toLowerCase()); // pa

// Numbers
// JS has 64-bit floating point numbers which means values between (2^-1074 and 2^1024)
// MAXIMUM_SAFE_NUMBER: -(2^53) - 1
// MINIMUM_SAFE_NUMBER: 2^53 - 1

// JS ends up rounding off numbers larger than these which makes the number type not useful
// for precise calculations of large numbers
// Outside of this range, it is safer to use the bigint data type

// Number Functions

console.log(parseInt(5.343235)); // 5
console.log(parseFloat(10.00)); // 10

// these above functions can be used to coerse strings into numbers
let tip = "8.50";
let total = 40;
let tax = 0;

let ordTotal = tip + tax + total;
console.log(ordTotal); // '8.50040'

ordTotal = parseFloat(tip) + tax + total;
console.log(ordTotal); // 48.5

// bigint
let kilometersToAndromedaGalazy = 23651826000000000000n; // bigint

// boolean
console.log(3 < 10) // true
console.log(90 < 10) // false
console.log(true === false) // false
console.log(0 !== "0") // true
console.log("apples" === "oranges") // false

// converting to boolean

console.log(!!"JavaScript is awesome"); // true
console.log(!!"I am the best JavaScript programmer"); // true
console.log(!!0); // false
console.log(!!""); // false
console.log(!!99); // true
console.log(!!null); // false

// ! or "bang" is the logical "NOT" operator
// !! is a double negative so it would be the opposite bool value of the logical NOT
// or the equivalent bool (truthy or falsy) value

// falsy values include: false, 0, -0, 0n, "", null, undefined, NaN

// everything else is truthy

if (state === "") {
    alert('City is a required field.');
}

// can rewrite using truthy / falsy as:

if (!state) {
    alert('City is a required field.');
}

// NaN (Not a Number)
// This is what you get when you try to perform an invalid mathematical operation

console.log(Math.sqrt(-1)); // NaN
console.log("yarn" / "cats") // NaN
console.log(parseInt('sandwich')) // NaN

// undefined
// default data type of a variable that has been declared but not initialized
// it is also the default value returned by a function with no return statement

// Symbol
// used to create unique identifiers

let symbol1 = Symbol("mysymbol");
let symbol2 = Symbol("mysymbol");
console.log(symbol1 === symbol2) // false

// Object Data Type
// Complex data type and containers for related data

const user = {
    name: 'Laura Wigfall',
    address: '3427 Crummit Lane',
    city: 'Providence',
    state: 'RI',
    zipcode: '02905',
    customerId: 4,
    isInLoyaltyClub: true,
}

// objects have name:value pairs separated by commas
// the names are actually called object properties, and they can be of any data type, including object type
// this object was declared using a const, however its underlying value can change. The only thing that isn't
// allowed to change is the ~reference~ to the object.

user.name = "Larry Pinto"; // no error here

// Array Data Type
// Not primative, but not quite objects
// Used to store a list of items using a single name

const favoriteCities = [
    'Rome',
    'Berlin',
    'New York',
    'Paris',
    'Beirut',
];

console.log(favoriteCities[1]); // 'Berlin'

// Scope
// depends on where the variable is declared - variable scope

// Global-scoped: can be used anywhere in a program

// Function-scoped: can be used anywhere within the function in which it was declared

// Block-scoped: variables created using let or const and initialized inside a block
// Blocks are created inside curly brackets {}
// block-scoped variables can be used anywhere within the block in which it was declared