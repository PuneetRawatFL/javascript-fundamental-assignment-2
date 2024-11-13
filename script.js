//1
"use strict";
console.log("Q1.");
console.log("Activating Strict mode");

//2
console.log("Q2.");
// a = 7 allowed in non-strict mode
//variable defination is required in strict mode
console.log(`a = 7`);

//3
console.log("Q3.");
// console.log((aaaaa = 7));
//4
console.log("Q4.");
function greet(name) {
    console.log(`Hello, ${name}`);
}
function calculateSquare(num) {
    return num * num;
}
greet("Puneet");
var res = calculateSquare(5);
console.log("Result: " + res);

//5
console.log("Q5.");
function multiply(a, b) {
    return a * b;
}
console.log("Result: " + multiply(4, 5));

//6
console.log("Q6.");
const mul = function (a, b) {
    return a * b;
};
console.log("Result: " + mul(2, 3));

//7
console.log("Q7.");
console.log("Result: " + multiply(2, 5));
console.log("Result: " + mul(2, 5));

//8
console.log("Q8.");
const mult = (a, b) => {
    return a * b;
};
console.log("Result: " + mult(5, 6));

//9
console.log("Q9.");
const add = (a, b) => {
    return a + b;
};
console.log("Result: " + add(2, 3));

//10
//Arrow functions provide a more concise syntax, especially for one line functions.

//11
console.log("Q11.");
function calculateArea(l, w) {
    return l * w;
}
console.log("Area: " + calculateArea(2, 3));

//12
console.log("Q12.");
function calculateVolume(l, w, h) {
    console.log("Area: " + calculateArea(l, w));
    return l * w * h;
}

//13
console.log("Q13.");
console.log("Volume: " + calculateVolume(2, 3, 4));

//14
console.log("Q14.");
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
function printResult(num) {
    if (isEven(num)) {
        console.log("Even number");
    } else {
        console.log("Odd number");
    }
}
printResult(2);
printResult(3);
printResult(50);
printResult(73);

//15
console.log("Q15.");
var fruits = ["apple", "banana", "mango", "orange"];
fruits.push("peach"); //add element to the end
console.log(fruits);
fruits.shift(); //remove first element
console.log(fruits);
console.log("Index of mango is " + fruits.indexOf("mango")); //find index

//16
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
        console.log(fruits);
    }
}
console.log("After: " + fruits);

//17
console.log("Q17.");
const person = {
    firstName: "Puneet",
    lastName: "Rawat",
    age: 23,
    city: "Jaipur",
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.city);

//18
console.log("Q18.");
person.country = "India";
console.log(person);

//19
console.log("Q19.");
console.log("Dot notation");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.city);
console.log(person.country);

console.log("Bracket notation");
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["city"]);
console.log(person["country"]);

//20
console.log("Q20.");
var a = "pinCode";
person[a] = "300200";
console.log(person);

//21
//dot notation - uses (.) symbol to access properties and is more readable but cannot handle dynamic property access using variables
//bracket notation - use ("") symbol to access properties and supports dynamic property access using variables

//22
person.name = function () {
    return `${this.firstName} ${this.lastName}`;
};

//23
console.log("Q23.");
console.log(person.name());

//24
console.log("Q24.");
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

//25
console.log("Q25.");
for (let i = 1; i < 11; i++) {
    console.log(i);
}

//26
console.log("Q26.");
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
for (let i = 1; i < colors.length; i++) {
    console.log(colors[i]);
}

//28
console.log("Q28.");
for (let i = 1; i < colors.length; i++) {
    if (colors[i] == "blue") {
        continue;
    }
    console.log(colors[i]);
}

//29
console.log("Q29.");
for (let i = 1; i < colors.length; i++) {
    if (colors[i] == "red") {
        break;
    }
    console.log(colors[i]);
}

//30
console.log("Q30.");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//31
console.log("Q31.");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix);

//32
console.log("Q32");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(matrix[i][j]);
    }
}

//33
console.log("Q33");
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
}

//34
console.log("Q34");
var i = 1;
while (i < 6) {
    if (i > 3) {
        break;
    }
    console.log(i);
    i++;
}

//35
console.log("Q35");
while (rand != 7) {
    var rand = Math.floor(Math.random() * 10);
    console.log(rand);
}
