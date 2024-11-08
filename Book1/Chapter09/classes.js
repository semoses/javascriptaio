// A file to practice working with classes in JS
// in simplest terms, classes are templates for objects

// Encapsulation, Abstraction, Inheritance, Polymorphism

// Encapsulation
// Each obj in a program has its own private data called state 
// which can only be modified or accessed by the obj
// an obj can also have private functions that only it can invoke

// Abstraction
// each obj exposes only high-level methods for other objects to use

// Inhertiance
// 


// Polymorphism
// Polymorphism makes code more flexible and reusable by allowing multiple classes to implement the same method in different ways. 
// ex:

class Animal {
    talk() {
        console.log("Generic Animal Noise!");
    }
}

class Cat extends Animal {
    talk() {
        console.log("Meow!")
    }
}

class Dog extends Animal {
    talk() {
        console.log("Bark!");
    }
}

const cat1 = new Cat();
const dog1 = new Dog();

cat1.talk(); // Meow!
dog1.talk(); // Bark!


// as demonstrated above, classes are created using the class keyword followed by a class name

class MyClass { }; // this is a base class because it doesn't inherit any class properties from other classes

// both classes interpret the .talk() method differently!

// NOTE: classes in JS are not hoisted like functions

// class expressions

const MyClass2 = class MyClass2 { };

const myObj = new MyClass();
// if no constructor function is specified, a default one is run constructor(){}

// derived class: one that has a parent class it inherits from
// uses the extends keyword

class Beverage {
    constructor(temp, size) {
        this.temp = temp;
        this.size = size;
    }
}

// Beverage inherits from the Coffee class
// i.e. Coffee is a Beverage
class Coffee extends Beverage { };

// if no constructor function is specified for a derived class this is called:

// function constructor(...args) {
//     super(...args);
// }

// super() calls the constructor function of the parent class being inherited from

// Constructors
// these methods are always names constructor()
// runs whenever a class is invoked with the new keyword
// constructor functions are not neccessary when created a class

class Tea extends Beverage {
    constructor(size, temp, hasCaffeine, howYouTakeIt) {
        super(temp, size); // must be called before any other statements
        this.hasCaffeine = hasCaffeine;
        this.howYouTakeIt = howYouTakeIt;
    }
}

const morningTea = new Tea('64oz', 'hot', true, 'two creams, one sugar');

// Properties and Methods
// come after the constructor

class Beverage2 {
    constructor(temp, size) {
        this.temp = temp;
        this.size = size;
    }
    drink() {
        if (this.temp !== 'scalding') {
            console.log('now drinking');
        }
    }
}

// overriding a dervied class
class Coffee2 extends Beverage2 {
    constructor(size, temp, hasCaffeine, howYouTakeIt) {
        super(temp, size);
        this.hasCaffeine = hasCaffeine;
        this.howYouTakeIt = howYouTakeIt;
    }
    drink() {
        if (this.temp !== 'scalding') {
            console.log('now drinking coffee');
        }
    }
}

const bev2 = new Beverage2;
const cof2 = new Coffee2;

bev2.drink(); // now drinking
cof2.drink(); // now drinking coffee

// drink was inherited into the Coffee2 class from the Beverage2 class
// however we can see that we have successfully overrided the method in our derived class

// Properties, Methods, and Fields
// Class properties are called fields
// Fields and Methods are both called Features or Members of a class


// this is called class fields syntax
class MyClass3 {
    publicField = 'this is a public field';
}

// it's best to define class fields in the class BEFORE the constructor function like so:
class Cat2 {
    paws = 4;
    sound = 'meow';
    constructor(name, faveToy) {
        this.name = name;
        this.faveToy = faveToy;
    }
}

// when defining methods or fields outside of the constructor function, 
// they're added to the instance before it runs which means they are accessible within the constructor function

// Public Members (fields and methods)
// class members by default are public

// Private Members (fields and methods)
// can only be accessed from within the class
// prefacing the name of a member with a # makes it private

class Cat3 {
    #isSleeping;
    paws = 4;
    sound = 'meow';

    constructor(name, faveToy) {
        this.name = name;
        this.faveToy = faveToy;
    }
    #takeNap() {
        this.#isSleeping = true;
    }
}

// just like public members of a class, private methods are added when a class is constructed or super() is called

const cat3 = new Cat3;
// cat3.#takeNap(); can't do this because #takeNap is private

// Static Members
// These are methods or properties that cannot be called on instances of the class, only on the class itself

class Cat4 {
    static species = 'Felis catus'; // static as in, it cannot change on an instance-to-instance basis (only at the class level)
    #isSleeping;
    paws = 4;
    sound = 'meow';

    constructor(name, faveToy) {
        this.name = name;
        this.faveToy = faveToy;
    }

    static herd() {
        throw new Error(`You can't do that`);
    }
    #takeNap() {
        this.#isSleeping = true;
    }
}

// Cat4.herd(); // throws an error as expected

const cat4 = new Cat4;
console.log(cat4.species); // undef
console.log(Cat4.species); // Felis catus

Cat4.species = "catto";
console.log(Cat4.species); // catto

class Cat5 {
    static species = 'Felis catus';
    #isSleeping;
    paws = 4;
    sound = 'meow';

    constructor(name, faveToy) {
        this.name = name;
        this.faveToy = faveToy;
    }
    static herd() {
        throw new Error(`You can't do that.`);
    }
    play() {
        console.log(`Playing with ${this.faveToy}`);
        this.#takeNap();
    }
    #takeNap() {
        this.#isSleeping = true;
    }
}

class Shorthair extends Cat5 {
    fur = 'shorthair';

    constructor(name, faveToy) {
        super(name, faveToy);
    }
}