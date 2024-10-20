// file to demonstrate prototyping in JS

function Vehicle(speed) {
    this.speed = speed;
    this.moveForward = function () {
        return `Moving forward at ${this.speed}`;
    };
}

const Automobile = new Vehicle(55);

Automobile.wheels = 4;
Automobile.engine = 'electric';

const Truck = Object.create(Automobile);

Automobile.doors = 4;

console.log(Truck.hasOwnProperty('doors')); // false

Truck.doors = 2;

console.log(Truck.hasOwnProperty('doors')); // true
// it now has that property
// child objects can access the properties of their parents (but can have their own properties in the prototype chain)
// which take precedence over (or overrides) the parent's values

Truck.maxHaul = '1 ton';
console.log(Truck.hasOwnProperty('maxHaul')); // true

// objects creaeted from other objects inherit the properties from their parents

// delete a property from an object using the delete operator
// note: you can only delete a property from an object if it's an ~own~ property of an object
delete Truck.doors;