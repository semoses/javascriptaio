// A file to practice writing functions in JS
// functions are the objects that make your program ~do things~

// functionName(args)

let stringVal = String(10); // String is the function and 10 is the argument

// defining a function
function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(2, 4)); // calling the function here: returns 6

// function definition:
/*
function functionName(parameters) {
    do stuff here;
    return something;
}
*/

// call the function & pass arguments
// a function inside of an object is called a method

// JS jas 2 types of built-in functions:
// 1. Top-level functions
// 2. Methods of built-in objects

// some examples of 1. include: Boolean(), Number(), String(), isNaN(), parseFloat(), parseInt()

// the JS defined objects (like string, bool, number, etc) come with their own propotype methods that are inheritedwhen instances are created
// these are called instance methods and they are called by specifying the obj name and then the method with parentheses

// Instance Method
let myString = 'hello world';
console.log(myString.charAt(3)); // l

// some built-in JS methods, however, can't be called this way because they operate as utilities provided by the base method,
// not acting on the base method itself. These are claled static methods

// Static Method
myString = '71';
Number.parseInt(myString); // 71

// Passing by Value
// When the parameters and arguments provided to a function are primative data types, they are copied by value

const favoriteFood = 'tacos';

makeDinner(favoriteFood);

function makeDinner(whatToMake) {
    console.log(`I see you want ${whatToMake}`);
    whatToMake = 'mac & cheese';
    console.log(`I've decided to make ${whatToMake} instead.`)
}

console.log(favoriteFood); // 'tacos' (which has remained unaffected by the function call above)
// console.log(whatToMake); // throws an error because whatToMake is block-scoped to the function call

// Passing by Reference 
// ex:

const user = { username: 'funguy37', password: '123456' };

const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
    if (userCredentials.password === '123456') {
        let randomString = Math.random().toString(36).slice(-16);
        userCredentials.password = randomString;
        return `Terrible passowrd. Your password has been reset to a random string.`;
    }
    return 'Logged In';
}

console.log(user.password); // has changed because the userCreds were passed by reference

// function declaration is made up of:
/* 
function funcName(optional parameters) {
    // functionality
}
*/

// functions can be short & sweet like this:
function updatePageTitle(title) {
    document.title = title;
}

// Naming Functions
// good function naming practice is to use lowerCamelCase as well as an a verb (since functions DO things)

// convertToMp3()
// getCurrentDate()
// calculateTotal()
// signOut()
// getFormData()

// Passing Arguments
// Tip: if a function requires too many parameters, that could be a sign to break it up into smaller pieces of functionality

function getLocalWeather(city, state) {
    // do stuff;
}

// Rest Parameters
// rest parameters are for when yo udon't know how many args will be passed to a function call
// rest parameters use the spread syntax notation (...param)
// this places all of the remaining arguments into an array

function sortList(orderBy, ...items) {
    // do stuff;
}

// how to call the function now: everything after the first arg will be placed into an array called items
sortList('alphabetical', 'James', 'Robert', 'John', 'Michael', 'David', 'William');

// this is also a valid function call because the length of items is not stipulated
sortList('alphabetical', 'Apple', 'Banana', 'Pear');

// Arugments Object
// Every function has an automatically created 'arguments' object that contains all of the args passed to a function
// the arguments object resembles an array, however the only accessible array property/method is length
// you can, however, index into the arguments object like an array

function makeNumberedList() {
    let numberedList = '<ol>';
    for (let i = 0; i < arguments.length; i++) {
        numberedList += `<li>${arguments[i]}</li>`
    }
    numberedList += '</ol>';
    return numberedList;
}

console.log(makeNumberedList('peas', 'meatballs', 'mashed potatoes', 'garlic toast', 'gravy', 'jam'));

// FATAL ERROR: Reached heap limit Allocation failed - JavaScript heap out of memory
// Could be a sign of an infinite loop

// when a function is used as an argument to be invoked by another function, that arg is called a callback function
// the function that the callback function is passed to is called an outer function

function greetInSpanish(name) {
    return `Hola ${name}`;
}

function getUserName(callback) {
    let firstName = "Sahara";
    return callback(firstName);
}

console.log(getUserName(greetInSpanish));

// Default Parameters
// technically although a function can specify parameters, it is not necessary to call a function with the corresponding arguments
// those values will simply be left as undefined inside of the function

console.log(greetInSpanish()); // "Hola undefined" didn't throw an error

// values unspecified will remain and undefined unless they are provided with a default value
// i.e. a value the parameter will take if not specified

function greetUser(firstName = 'Valued', lastName = 'Customer') {
    console.log(`Hello, ${firstName} ${lastName}`);
}

greetUser(); // 'Hello, Valued Customer'

function makeUnorderedList(array = []) {
    if (!Array.isArray(array)) {
        return `<ul></ul>`;
    }
    let listItems = array.map(function (element) {
        return `<li>${element}</li>`;
    });
    return `<ul>${listItems.join('')}</ul>`;
}

console.log(makeUnorderedList()); // before default value: TypeError: Cannot read properties of undefined (reading 'map')
console.log(makeUnorderedList()); // after default value: <ul></ul>
console.log(makeUnorderedList({ 1: "a", 2: "b", 3: "c" })); // <ul></ul> & does NOT throw an error
console.log(makeUnorderedList([1, 2, 3])); // <ul><li>1</li><li>2</li><li>3</li></ul>

/*
function functionName(parameters = default) <- function header
{ 
    // function body
}
*/

function getLocalWeather(postalCode) {
    const weather = `I don't know what the weather is like in ${postalCode}. Maybe try looking out the window.`;
    return weather;
}

let weather = getLocalWeather('97103');

displayWeatherForecast(getLocalWeather('97103'));
// but it's less confusing to write:
displayWeatherForecast(weather);

function displayWeatherForecast(forecast) {
    // document.getElementById('forecast').innerHTML = `Here's the current weather forecast: ${forecast}`;
    console.log(`Here's the current weather forecast: ${forecast}`);
}

// Conditional code with return statements
function getLocWeather(postalCode) {
    if (postalCode === undefined) {
        return `I don't know what the weather is where you are.`;
    }
    return `I don't know what the weather is like in ${postalCode}. Maybe try looking out the window.`;
}

// Function Declaration Scope & Hoisting
// Top-level functions can be run anywhere within the code because of JS's function hoisting

// Anonymous Functions
// Function declarations without a name are anonymous

function doSomething(callback) {
    callback();
}

doSomething(function () { console.log('done.') }); // the callback function arg provided is anonymous

// Function Expressions
// creates a function by assinging an anonymous function to a variable or constant

const convertMilesToKM = function (distanceInMiles) {
    const distanceInKM = distanceInMiles * 1.609;
    return distanceInKM;
}

console.log(convertMilesToKM(5));

// note: unlike function declarations, functions expressions are not hoisted
// function expression are useful when functions are being passed as variables
// or when you want to conditionally set the value of a function like below:

function getThere(distance) {
    let estimatedTripDuration;
    if (water === true) {
        const getSwimtime = function () {
            return distance / 2;
        }
        estimatedTripDuration = getSwimtime();
    } else {
        const getWalkTime = function () {
            return distance / 4;
        }
        estimatedTripDuration = getWalkTime();
    }
    return estimatedTripDuration;
}

let water = true;
let distance = 30;

console.log(`It will take ${getThere(distance)} hours to get there.`);

// anonymous functions as arrow functions (doesn't use the function keyword)

const pickAMovie = function (choices) {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick;
}

// arrow function equivalent of above function
const pickAMovie2 = (choices) => {
    let myPick = choices[Math.floor(Math.random() * choices.length)];
    return myPick;
}

// simplifications:
// if an arrow function includes only one parameter, the parentheses are not necessary
// if an arrow function returns only a return statement you can eliminate both the curly braces
// and the return keyword

const pickAMovie3 = choices => choices[Math.floor(Math.random() * choices.length)];

// limits of arrow functions:
// arrow functions don't have access to the "this" keyword
// instead, they take on the context of the obj in which they are created
// arrow functions created as obj methods are said to be auto-bound and cannot be bound using bind() call() or apply()
// arrow functions also don't have the "arguments" object
// in order to write an arrow funcion that can take any number of args, this is the way to go:

const myFunc = (...args) => {
    console.log(`The value of the first argument is ${args[0]}`);
}

myFunc("hello world", 1, 2, 4); // The value of the first argument is hello world

// methods
// functions inside of objects are called methods

const myCar = {
    speed: 0,
    drive: function (speedLimit) {
        this.speed = speedLimit; // "this" refers to the object that the method is part of
        console.log(`Driving at ${this.speed}mph`);
    }
}

// can also use method notation like so

const myCar2 = {
    speed: 0,
    drive(speedLimit) {
        this.speed = speedLimit;
        console.log(`Driving at ${this.speed}mph`);
    }
}

myCar.drive(35); // Driving at 35mph
myCar2.drive(40); //Driving at 40mph

console.log(myCar.speed); // 35
console.log(myCar2.speed); // 40

// Context
// an object that determines the value of "this" is also called a "context"

// say we have two objects that we want to drive

const myCar3 = {
    speed: 0,
};

const myTruck = {
    speed: 0,
}

function drive(speedLimit) {
    this.speed = speedLimit;
    console.log(`Driving at ${this.speed}mph`);
}

// this seems like it should suffice, but how do we know what object we are calling the drive function on?

// try adding the vehicle as a parameter
function drive2(vehicle, speedLimit) {
    vehicle.speed = speedLimit;
    console.log(`Driving at ${vehicle.speed}mph`);
}

drive2(myCar3, 35); // Driving at 35mph
drive2(myTruck, 40); // Driving at 40mph

console.log(myCar3.speed); // 35
console.log(myTruck.speed); // 40

// we can also set the context of the function so it knows how to distinguish "this"
// we can do this with call(), apply(), or bind()

// call() is a function method (because remember that functions are objects) 
// that takes the context obj as its first param

drive.call(myCar3, 65);

// apply() is just like cal but accepts an array of args

drive.apply(myCar3, [35]);

// bind() works just like call() (accepts an object and then any number of individual arguments)
// however, instead of returning a result, it returns a new function that you can assign to a variable to
// continually call

const driveMyCarOnTheFreeway = drive.bind(myCar, 75);

driveMyCarOnTheFreeway();
driveMyCarOnTheFreeway();

// Passing a function from one object to another

const myCar4 = {
    speed: 0,
    operate(speedLimit, callback) {
        callback(speedLimit);
        console.log(`Driving at ${this.speed}mph`);
    },
};

function drive3(speedLimit) {
    this.speed = speedLimit;
    console.log(`Start driving at ${this.speed}mph`);
}

myCar4.operate(55, drive3);
// Start driving at 55mph
// Driving at 0mph <- what's happening here??

// functions are objects, so passing them as methods is NOT the same
// as creating the function in an object and running it

// we can fix this by binding the callback function that is passed to operate()

const myCar5 = {
    speed: 0,
    operate(speedLimit, callback) {
        boundCallback = callback.bind(this);
        boundCallback(speedLimit);
        console.log(`myCar is driving at ${this.speed}`);
    }
}
myCar5.operate(55, drive3);
// Start driving at 55mph
// myCar is driving at 55 <- fixed!!

// Passing a function to a child to change the parent
// this is a common practice in component-based front ends (React, Vue, Svelte)

const bookstore = {
    books: ['Ulysses', 'The Great Gatsby'],
    displayBookstore() {
        const renderTarget = document.getElementById('bookstore');
        const bookList = this.books.map((book) => `<p>${book}</p>`)
        renderTarget.innerHTML = bookList.join('');
    },
    removeBook(title) {
        let newList = this.books.filter((book) => book != title);
        this.books = newList;
    }
}

bookstore.removeBook('The Great Gatsby');
console.log(bookstore.books); // [ 'Ulysses' ]

// see javascriptBookstore.html for a full example

// Chaining Functions
console.log("     my string       ".toUpperCase().trim()); // MY STRING

// function chaining works by passing the same obj to multiple functions sequentially (L -> R)

// to create a chainable function, return 'this' from a method and pass that to the next method
// let's see two different examples, one with function chaining and one without

const robot = {
    currentActivity: undefined,
    walk() {
        this.currentActivity = 'walking';
        return this;
    },
    talk() {
        this.currentActivity = 'talking';
        return this;
    },
    write() {
        this.currentActivity = 'writing';
        return this;
    },
};

let result = robot.walk();
let result2 = robot.talk(result);
let result3 = robot.write(result2);

console.log(robot.currentActivity); // writing

// cleaner approach with chaining:
robot.walk().talk().write();
console.log(robot.currentActivity); // writing

