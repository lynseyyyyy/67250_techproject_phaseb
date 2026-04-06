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

// Active Navigation Bar
function ActiveNav() {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (window.location.href === link.href) {
      link.classList.add("active");
    }
  });
}

ActiveNav();

// Read More / Less Toggle
$("#readMore").click(function() {
  $("#longIntro").show();
  $("#readLess").show();
  $("#readMore").hide();
});

$("#readLess").click(function() {
  $("#longIntro").hide();
  $("#readMore").show();
  $("#readLess").hide();
});

// Purchase Form
function showForm() {
  var selectedDate = document.getElementById("visitDate").value;

  if (selectedDate === "") {
    alert("Please select a visit date first!");
    return;
  }

  document.getElementById("purchaseForm").style.display = "block";
  document.getElementById("buyDate").value = selectedDate;
}

// Hamburger Menu
function hamburgerMenu() {
  var x = document.getElementById("navbar");
  if (x.className === "nav_bar") {
    x.className += " responsive";
  } else {
    x.className = "nav_bar";
  }
}

// Leaflet Map
if (document.getElementById("map")) {
  var map = L.map('map').setView([40.4406, -79.9959], 15);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // MonoMuse location
  L.marker([40.4406, -79.9959]).addTo(map)
    .bindPopup('MonoMuse Museum — Pittsburgh, PA')
    .openPopup();
}

// Weather API 
function getWeather() {
  if (document.getElementById("weather")) {
    // Pittsburgh coordinates
    var url = "https://api.open-meteo.com/v1/forecast?latitude=40.4406&longitude=-79.9959&current=temperature_2m,weathercode&temperature_unit=fahrenheit";

    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var temp = Math.round(data.current.temperature_2m);
        document.getElementById("weather").innerHTML =
          "📍 Pittsburgh: " + temp + "°F";
      })
      .catch(function(error) {
        console.log("Weather error: " + error);
      });
  }
}

getWeather();
