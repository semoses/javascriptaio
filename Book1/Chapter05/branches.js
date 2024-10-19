// A file to practice branching statements in JS

// if ... else statements
let country = "France";
let temperature = 72;

// two paths
if (country == "United States" || country == "Liberia") {
    temperature = temperature + "F";
} else {
    temperature = (temperature - 32) * 5 / 9 + "C"
}

// one path or not
let coffeeMakerIsOff;
if (coffeeMakerIsOff) {
    turnOnCoffeeMaker();
}

// multiple paths

let pet = 'raccoon';
let greeting;
if (pet === 'cat') {
    greeting = 'Good Kitty';
} else if (pet === 'dog') {
    greeting = 'Who\'s a good boy or girl?';
} else if (pet === 'parrot') {
    greeting = 'Wanna cracker?';
} else {
    greeting = "Hi";
}

// ternary operator: condition ? true case : false case
// useful for conditional rendering with ReactJS, Vue.js, or Svelte
// only can be used between two choices

const dt = new Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? ('Good Morning') : ('Welcome');
console.log(msg);

// switch statements
/*
swtich(expression) {
    case x:
        // code to run when expression === x
        break;
    case y:
        // code to run when expression === y
        break;
    default:
        // code to run when expression is neither x nor y
        // break statement not required here because there are no more cases to skip over, we've reached the end
    }
*/

// without the breaks, the case statements will run until the end of the block