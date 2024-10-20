// A file to practice using objects in JS
// object: reusable components that contain data and functionality called properties or methods (functionality)

const pencil = {
    length: "7.5 inches",
    shape: "hexagonal",
    diameter: '1/4 inch',
    write: function () {/*do writing*/ },
    erase: function () {/*do erasing*/ },
    sharpen: function () {/*do sharpening*/ },
}

pencil.sharpen();
pencil.length = "7 inches";
pencil.sharpness = "sharp";

const newPencil = { ...pencil };  // shallow copy

console.log(newPencil);

// four ways in JS to create an object
// 1. Object literal notation
const person = { eyes: 2, feet: 2, eyeColor: 'brown' };

const person2 = {};
person2.hair = 'black';
person2.hands = 2;
person2.fullName = { firstName: 'Lamont', lastName: 'Rudnick' };

// 2. New keyword (constructor function)
function Cat(name, type) {
    this.name = name; // refers to the object being created
    this.type = type;
}
const ourCat = new Cat('Murray', 'domestic short hair');

/* What is happening:
const ourCat = {};
ourCat.name = 'Murray';
ourCat.type = 'domestic short hair';
*/

// 3. Object.create() - create is a method of the Object class (requires a similar object to mirror)
const computer = { memory: '16GB', HD: '8TB' };

const laptop = Object.create(computer);
console.log(laptop); // doesn't have anything filled in though

// 4. Define a class (template for objects)
class Cat2 {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const ourDog = new Pet('Chauncey', 'AmStaff');

const myLocation = {
    city: {
        id: 2643743,
        name: 'London',
        coord: {
            lon: -0.1258,
            lat: 51.5085,
        },
        country: 'GB',
        population: 9820000,
        timezone: 3600,
    },
};

const lat = myLocation.city.coord.lat;
console.log(lat); // 51.5085

const city = myLocation['city'];
console.log(city); // city obj above

const cityName = myLocation['city']['name'];
console.log(cityName); // London

// printing an objects properties
for (const property in city) {
    console.log(`${property}: ${city[property]}`);
}

// objects are copied by reference, not value
// this means that for object equality, === checks that the ~reference~ is the same, not the values stored in the object

const firstObject = { prop1: 'test', prop2: 'test' };
const secondObject = { prop1: 'test', prop2: 'test' };

console.log(firstObject === secondObject); // false, because they are two distinct objects in memory

console.log(firstObject.prop1 === secondObject.prop1) // true, since they are primative types and equal in value

const thirdObject = secondObject;
thirdObject.prop1 = 'orange';

console.log(secondObject.prop1 === thirdObject.prop2); // true, since thirdObject references secondObject

thirdObject.prop3 = 'claw hammer';
console.log(secondObject.prop3); // claw hammer

console.log(secondObject === thirdObject); // true

const fourthObject = { ...secondObject };
console.log(fourthObject === secondObject); // false, since fourthObject is now independent of secondObject

// prototypes
// every object in JS inherits properties and methods from a prototype like the Array.prototype or the Object.prototype

