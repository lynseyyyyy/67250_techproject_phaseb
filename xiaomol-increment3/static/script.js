// Numeric addition
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

// String concatenation
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// Function
function sumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

// Call the function twice
sumnPrint(x, y);
sumnPrint(A, B);

// Conditional Statement
if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}

/*
// Arrays and Loops
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Banana") {
      alert("Banana found!");
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

// Rewritten using forEach
function findTheBananaForEach(array) {
  array.forEach(function(element) {
    if (element === "Banana") {
      alert("Banana found!");
    }
  });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);
*/

// Time based greeting
var now = new Date();
var hour = now.getHours();

function greeting(h) {
  if (document.getElementById("greeting")) {
    if (h < 5 || h >= 20) {
      document.getElementById("greeting").innerHTML = "Good night! Welcome to MonoMuse";
    } else if (h < 12) {
      document.getElementById("greeting").innerHTML = "Good morning! Welcome to MonoMuse";
    } else if (h < 18) {
      document.getElementById("greeting").innerHTML = "Good afternoon! Welcome to MonoMuse";
    } else {
      document.getElementById("greeting").innerHTML = "Good evening! Welcome to MonoMuse";
    }
  }
}

greeting(hour);

// Dynamic Footer Year
function addYear() {
  var currentYear = new Date().getFullYear();
  document.getElementById("copyYear").innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
}
