// A file to practice using arrays in JS

const colors = ['red', 'green', 'blue']; // length 3, zero-based numbering, prototype Array() object

// can expand the console prototype definition to see all of the properties and methods available

// the upper maximum value for an array is over 4 million

// there are 3 ways in JS to create an array:
// 1. the Array() constructor
// 2. Array literal notation []
// 3. Functions that return arrays (such as split())

const arr1 = new Array();
const arr2 = new Array('January', 'February', 'March');

// array value assigned to a const is immutable, however the values inside it are mutable

const arr3 = ["eggs", "bacon", "toast"]; // literal notation

// split() function makes an array out of a string

let customerData = 'Barb Seibert, 3739 Sheila Lane, Goldfield, NV, 89013'
let customerDataArray = customerData.split(',') // CSV: comma-separated values

console.log(customerDataArray); // [ 'Barb Seibert', ' 3739 Sheila Lane', ' Goldfield', ' NV', ' 89013' ]

// any data that should contain the separator value should be isolated in quotation marks
customerData = "'Barb Seibert, Esq.', '3739 Sheila Lane', 'Goldfield', 'NV', '89013'";
customerDataArray = customerData.split("','") // CSV: comma-separated values

console.log(customerDataArray); // ["'Barb Seibert, Esq.', '3739 Sheila Lane', 'Goldfield', 'NV', '89013'"]

// accessing array elements

const arr4 = [49, 299, 34];
console.log(arr4[1]); // 299

console.log(arr4.length); // 3

const arr5 = [3434, 56, 2];
let sum = 0;
for (let i = 0; i < arr5.length; i++) {
    sum += arr5[i];
}
console.log(`The sum is ${sum}`); // 3492

arr5[1] = 'sandwich';
arr5[3] = 'burrito';

arr5[1000] = 'sushi';

console.log(arr5); // [ 3434, 'sandwich', 2, 'burrito', <996 empty items>, 'sushi' ]
console.log(arr5.length); // 1001

// an array with undefined elements in it is called a sparse array (like arr5)

// changing the length of an array

arr5.length = 501; // deletes the last 500 elements from arr5

// using the delete operator doesn't work because it simply sets the value at that index to undefined, the length of the array remains unchanged
delete arr5[3];
console.log(arr5.length); // 501

// other array methods can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

const ingredients = ['eggs', 'milk', 'cheese', 'garlic', 'onion', 'kale', 'salt', 'pepper'];

// pop & push - happens to the end of the array

ingredients.pop() // removes the last element

console.log(ingredients); // ['eggs', 'milk', 'cheese', 'garlic', 'onion', 'kale', 'salt']

let removedElem = ingredients.pop(); // salt

ingredients.push('chili flakes');

console.log(ingredients); // ['eggs', 'milk', 'cheese', 'garlic', 'onion', 'kale', 'chili flakes']

// shift & unshift - happens to beginning of the array

ingredients.shift(); // ['milk', 'cheese', 'garlic', 'onion', 'kale', 'chili flakes']

ingredients.unshift('eggs'); // ['eggs', 'milk', 'cheese', 'garlic', 'onion', 'kale', 'chili flakes']

// slice - goes from the starting index up to but not including the ending index
// original array isn't modified by slice

console.log(ingredients.slice(3, 6)); // ['garlic', 'onion', 'kale']

// splice - takes a starting index and a number of elements to remove
// unlike slice, splice DOES modify an array and returns the removed elements

console.log(ingredients.splice(3, 3)); // ['garlic', 'onion', 'kale']

// array looping methods
// many of these methods take callback functions as parameters

function squareIt(num) {
    return num * num;
}

let threeSquared = squareIt(3);
console.log(threeSquared); // 9

// function that takes a value and a callback function as parameters
function doMath(value, mathToDo) {
    let result = mathToDo(value);
    return result;
}

const circumference = doMath(4, function (radius) { return 2 * Math.PI * radius });
console.log(circumference);

// reduce
// runs a reducer function on each elem of the array and converts an entire array into a single value

let prices = [4.99, 3.98, 54.99];
let total = 0;

total = prices.reduce(
    function (prevVal, currVal) {
        return prevVal + currVal;
    }
);

console.log(total); // 63.96

// simplify this

let total2 = prices.reduce(
    function (prevVal, currVal) {
        return prevVal + currVal;
    }, 0 // set 0 to be the initial default value
);

console.log(total2); // 63.96

// one last simplification

let total3 = prices.reduce(
    (prevVal, currVal) => prevVal + currVal, 0
);

console.log(total3); // 63.96

// mapping
// takes an array and a callback function and returns a new array with the map function applied to each element

// check out shoppingList.html for an example

// filtering
// applies a test to each element and returns a new array with just the elements that pass the test

const animalNames = [
    'aardvark',
    'aligator',
    'alpaca',
    'bear',
    'beaver',
    'cat',
    'dog',
    'elephant',
];

const animalsStartingWithA =
    animalNames.filter((animal) => animal.startsWith('a')
    );

console.log(animalsStartingWithA); // [ 'aardvark', 'aligator', 'alpaca' ]

// destructuring arrays
// unpacking an array into its individual values

const person = ['Russel C. Guy', '3447 Twin House Lane', 'Neosho', 'MD'];
let personName = person[0];
let address = person[1];
let city = person[2];
let state = person[3];

// there is a better way

[personName, address, city, state] = person; // this works until the array runs out of elems to assign or the variables in the brackets run out

// speading arrays
// spreads an iterable object into its component parts

const firstArr = ['a', 'b', 'c'];
const secondArr = [...firstArr]; // shallow copy but for variables passed by value, this is deep

firstArr[1] = 'q';
console.log(secondArr); // ['a', 'b', 'c']

const fruits = ['apple', 'orange', 'banana'];
const fruitsCopy = fruits;
fruitsCopy.push('watermelon'); // since they share the same ref, they are both updated i.e. shallow copy
console.log(fruits); // [ 'apple', 'orange', 'banana', 'watermelon' ]

const fruitsShallowCopy = [...fruits]; // changes to the og array won't affect this copy and vice versa