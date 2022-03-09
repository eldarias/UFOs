
// 11.3.3 - Simple Functions to Arrow Functions:
// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }

// Converted to an arrow function
addition = (a, b) => a + b;


// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }



let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// To iterate through each name in JavaScript, we can create a for loop. First, type the following in your console:
function listloop(userList) {
    for (var i = 0; i < usersList.lenght; i++) {
        console.log(userList[i]);
    }
}


// 11.4.2 - Practice Using for Loops in JavaScript
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// This time we'll loop through numbers without using an array.
for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}

// 11.5.1 - Introduction to Dynamic Tables