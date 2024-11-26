//1 - Activate strict mode by adding `"use strict";` at the top.
"use strict";
console.log("Q1.");
console.log("Activating Strict mode");

//2 - Try to write some code that would normally be allowed in non-strict mode but causes an error in strict mode (e.g., using an undeclared variable).
console.log("Q2.");
// a = 7 allowed in non-strict mode
//variable defination is required in strict mode
console.log(`a = 7`);

//3 - Log the error message to understand the difference strict mode makes.
console.log("Q3.");
try {
    abc = 7;
} catch (error) {
    console.log(error);
}

//4 - Write a function named `greet` that takes one parameter `name` and logs `"Hello, [name]!"`.
console.log("Q4.");
function greet(name) {
    console.log(`Hello, ${name}`);
}
//4.a - Write a function `calculateSquare` that takes a number as an argument and returns its square.
function calculateSquare(num) {
    return num * num;
}
//4.b - Test both functions with different inputs.
greet("Puneet");
var res = calculateSquare(5);
console.log("Result: " + res);

//5 - Write a function declaration `multiply` that takes two numbers and returns their product.
console.log("Q5.");
function multiply(a, b) {
    return a * b;
}
console.log("Result: " + multiply(4, 5));

//6 - Write the same function as a function expression.
console.log("Q6.");
const mul = function (a, b) {
    return a * b;
};
console.log("Result: " + mul(2, 3));

//7 - Call both functions with the same arguments and compare the results.
console.log("Q7.");
console.log("Result: " + multiply(2, 5));
console.log("Result: " + mul(2, 5));

//8 - Convert the `multiply` function from the previous task into an arrow function.
console.log("Q8.");
const mult = (a, b) => {
    return a * b;
};
console.log("Result: " + mult(5, 6));

//9 - Write an arrow function `add` that takes two numbers and returns their sum.
console.log("Q9.");
const add = (a, b) => {
    return a + b;
};
console.log("Result: " + add(2, 3));

//10 - Compare the syntax and behavior of arrow functions with traditional function expressions.
//Arrow functions provide a more concise syntax, especially for one line functions.

//11 - Write a function `calculateArea` that takes the length and width of a rectangle and returns the area.
console.log("Q11.");
function calculateArea(l, w) {
    return l * w;
}
console.log("Area: " + calculateArea(2, 3));

//12 - Write a function `calculateVolume` that takes the length, width, and height of a box, and uses `calculateArea` to calculate the base area before calculating the volume.
function calculateVolume(l, w, h) {
    //calling area function
    var area = calculateArea(l, w);
    return area * h;
}

//13 - Log the results to demonstrate functions calling other functions.
console.log("Q13.");
console.log("Volume: " + calculateVolume(2, 3, 4));

//14 - Write a function `isEven` that takes a number and returns `true` if it's even, and `false` if it's odd.
console.log("Q14.");
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
//14.a - Write a function `printResult` that takes a number and logs whether it's even or odd using the `isEven` function.
function printResult(num) {
    if (isEven(num)) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}
//14.b - Test your functions with different inputs
printResult(2);
printResult(3);
printResult(50);
printResult(73);

//15 - Create an array `fruits` containing `["apple", "banana", "mango", "orange"]`.
console.log("Q15.");
var fruits = ["apple", "banana", "mango", "orange"];

//15.a - Use array methods to:
//15.a.i - Add a fruit to the end of the array.
fruits.push("peach");
console.log(fruits);

//15.a.ii - Remove the first fruit.
fruits.shift();
console.log(fruits);

//15.a.iii - Find the index of `"mango"`
console.log("Index of mango is " + fruits.indexOf("mango"));

//16 - Sort the array alphabetically.
console.log("Q16.");
var fruits = ["banana", "kiwi", "apple", "fig", "grape", "cherry", "date"];
console.log("Before: " + fruits);
for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < fruits.length - 1 - i; j++) {
        if (fruits[j] > fruits[j + 1]) {
            var temp = fruits[j];
            fruits[j] = fruits[j + 1];
            fruits[j + 1] = temp;
        }
        // 16.a - Log the modified array after each operation.
        console.log(fruits);
    }
}
console.log("After: " + fruits);

//17 - Create an object `person` with properties `firstName`, `lastName`, `age`, and `city`.
console.log("Q17.");
const person = {
    firstName: "Puneet",
    lastName: "Rawat",
    age: 23,
    city: "Jaipur",
};
//17.a - Log the entire object and each property individually.
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.city);

//18 - Add a new property `country` to the object and log the updated object.
console.log("Q18.");
person.country = "India"; //adding new property
console.log(person); //logging updated object

//19 - Using the `person` object from the previous task, access the `firstName` and `city` properties using both dot notation and bracket notation.
console.log("Q19.");
//using dot notation
console.log("Dot notation");
console.log(person.firstName);
console.log(person.city);

//using bracket notation
console.log("Bracket notation");
console.log(person["firstName"]);
console.log(person["city"]);

//20 - Add a new property using bracket notation with a variable as the key, and log the updated object.
console.log("Q20.");
var a = "pinCode";
person[a] = "300200"; //adding property
console.log(person); //logging updated object

//21 - Explain the difference between dot and bracket notation in a comment.
//dot notation - uses (.) symbol to access properties and is more readable but cannot handle dynamic property access using variables
//bracket notation - use ("") symbol to access properties and supports dynamic property access using variables

//22 - Add a method `getFullName` to the `person` object that returns the full name by combining `firstName` and `lastName`.
person.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

//23 - Call this method and log the result.
console.log("Q23.");
console.log(person.getFullName());

//24 - Add another method `isAdult` that returns `true` if the person's age is 18 or more, and `false` otherwise. Test this method.
console.log("Q24.");
//adding method
person.isAdult = function () {
    if (this.age >= 18) {
        return true;
    } else {
        return false;
    }
};
if (person.isAdult()) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//25 - Write a `for` loop that logs numbers from 1 to 10.
console.log("Q25.");
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//26 - Create an array of `colors` containing some color names. Use a `for` loop to log each color in the array.
console.log("Q26.");
//creating array
const colors = [
    "red",
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "orange",
    "pink",
];
//for loop to display elements
for (let i = 1; i < colors.length; i++) {
    console.log(colors[i]);
}

//27 - Use the `colors` array from the previous task.
//28 - Write a loop that logs each color, but if the color is `"blue"`, it should skip the iteration and continue with the next one.
console.log("Q28.");
for (let i = 1; i < colors.length; i++) {
    //adding condition to skip iteration
    if (colors[i] == "blue") {
        continue;
    }
    console.log(colors[i]);
}

//29 - Write another loop that breaks out of the loop entirely if the color `"red"` is encountered.
console.log("Q29.");
for (let i = 1; i < colors.length; i++) {
    //adding condition to break loop
    if (colors[i] == "red") {
        break;
    }
    console.log(colors[i]);
}

//30 - Write a loop that logs numbers from 10 to 1 in reverse order.
console.log("Q30.");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//31 - Create an array `matrix` that contains three arrays (rows) with three numbers each.
console.log("Q31.");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);

//32 - Write a nested loop that logs each element in the `matrix` array.
console.log("Q32");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix[i][j]);
    }
}

//33 - Write a `while` loop that logs numbers from 1 to 5
console.log("Q33");
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

//34 - Modify the loop so that it stops when the number is greater than 3.
console.log("Q34");
var i = 1;
while (i < 6) {
    if (i > 3) {
        break;
    }
    console.log(i);
    i++;
}

//35 - Create another `while` loop that generates a random number between 1 and 10 until it generates a `7`. Log each number generated.
console.log("Q35");
while (rand != 7) {
    var rand = Math.floor(Math.random() * 10);
    console.log(rand);
}
