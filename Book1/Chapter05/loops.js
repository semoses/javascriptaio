// A file to practice looping statements in JS

// side note: for incrementing values of x, one should use prefix notation: ++x
// there is postfix notation, but that would increment the value of x after the fact

// ex:

let x = 3;
console.log(x); // 3
console.log(++x); // which means, x = x + 1, THEN console.log(x) => 4
console.log(x++); // which means console.log(x), THEN x = x + 1 => 4
console.log(x); // 5

// back to loops!

// "for" loops
// for loops contain three parts: initialization, condition, and the final expression

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// i is block-scoped and therefore only available inside the loop

// in practice, for loops are a bit antiquated to modern day JS devs
// instead there are better, simpler methods for looping through things (like arrays)

// "for ... in" loops
// for ... in iterates over the properties of an object (this includes array which are a type of object)

const house = { sqft: 800, bdRooms: 2, bthRooms: 1 };

// note: just like for loops, for ... in loops are not often used in the wild
// instead, they are helpful for debugging your code (which is often necessary)

// "for ... of" loops
// these loops are created by iterating over iteratable objects (like arrays and strings)

const pets = ['cat', 'dog', 'chicken'];
for (let pet of pets) {
    console.log(pet);
}

// now for strings

let text = "spell me.";
for (let char of text) {
    console.log(char);
}

// "while" loops

// checkout randomNum.html for an example

// "do ... while" loops
// a do while loop is just like a while loop, however the condition is checked ~after~ the condition
// is checked which means that the block is guaranteed to run at least one time.

// check out randomNum2.html

// break and continue statements

// break statements cause teh current loop or control statement to exit
// the continue statement, however, halts the execution of only the current iteration of the loop and moves to the next one

// loop to only log digits in a phone number, not dashes
let phoneNumber = "555-757-1212";
for (let digit of phoneNumber) {
    if (digit === "-") {
        continue;
    }
    console.log(digit);
}