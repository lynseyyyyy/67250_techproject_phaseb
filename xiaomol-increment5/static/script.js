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
      document.getElementById("greeting").innerHTML = "Good night!";
    } else if (h < 12) {
      document.getElementById("greeting").innerHTML = "Good morning!";
    } else if (h < 18) {
      document.getElementById("greeting").innerHTML = "Good afternoon!";
    } else {
      document.getElementById("greeting").innerHTML = "Good evening!";
    }
  }
}

// Dynamic Footer Year
function addYear() {
  if (document.getElementById("copyYear")) {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
  }
}

// Active Navigation Bar
function ActiveNav() {
  var navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(function(link) {
    if (window.location.href === link.href) {
      link.classList.add("active");
    }
  });
}

// Read More / Less Toggle
if (typeof window.jQuery !== "undefined") {
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
}

// Purchase Form
function showForm() {
  var selectedDate = document.getElementById("visitDate").value;

  if (selectedDate === "") {
    alert("Please select a visit date first!");
    return;
  }

  document.getElementById("purchaseForm").style.display = "block";

  if (document.getElementById("buyDate")) {
    document.getElementById("buyDate").value = selectedDate;
  }
}

// Hamburger Menu
function hamburgerMenu() {
  var x = document.getElementById("navbar");

  if (x) {
    if (x.className === "nav_bar") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar";
    }
  }
}

// Leaflet Map
document.addEventListener("DOMContentLoaded", function() {
  var mapEl = document.getElementById("map");

  if (mapEl && typeof L !== "undefined") {
    var map = L.map("map").setView([40.4406, -79.9959], 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.4406, -79.9959]).addTo(map)
      .bindPopup("MonoMuse Museum — Pittsburgh, PA")
      .openPopup();
  }
});

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
        document.getElementById("weather").innerHTML = "📍 Pittsburgh: " + temp + "°F";
      })
      .catch(function(error) {
        console.log("Weather error: " + error);
      });
  }
}

// Add To Cart
function addToCart() {
  var selectedDate = document.getElementById("selectedDateLabel").textContent;
  var selectedTime = document.getElementById("selectedTimeLabel").textContent;
  var total = document.getElementById("orderTotal").textContent;

  var adult = parseInt(document.getElementById("qty-adult").value);
  var senior = parseInt(document.getElementById("qty-senior").value);
  var student = parseInt(document.getElementById("qty-student").value);
  var child = parseInt(document.getElementById("qty-child").value);
  var infant = parseInt(document.getElementById("qty-infant").value);
  var member = parseInt(document.getElementById("qty-member").value);

  var totalQty = adult + senior + student + child + infant + member;

  if (!selectedDate || selectedDate === "" || totalQty === 0) {
    alert("Please select a date and at least one ticket.");
    return;
  }

  var cart = {
    date: selectedDate,
    time: selectedTime,
    adult: adult,
    senior: senior,
    student: student,
    child: child,
    infant: infant,
    member: member,
    totalQty: totalQty,
    total: total
  };

  sessionStorage.setItem("monoMuseCart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

// Load Cart Into Checkout
function loadCartIntoCheckout() {
  var cartData = sessionStorage.getItem("monoMuseCart");

  if (!cartData) {
    return;
  }

  var cart = JSON.parse(cartData);

  if (document.getElementById("cartDate")) {
    document.getElementById("cartDate").innerHTML = cart.date || "—";
  }

  if (document.getElementById("cartTime")) {
    document.getElementById("cartTime").innerHTML = cart.time || "—";
  }

  if (document.getElementById("cartQty")) {
    document.getElementById("cartQty").innerHTML = cart.totalQty || "0";
  }

  if (document.getElementById("cartTotal")) {
    document.getElementById("cartTotal").innerHTML = cart.total || "$0.00";
  }

  if (document.getElementById("visitDate") && cart.date) {
    document.getElementById("visitDate").value = cart.date;
  }

  if (document.getElementById("quantity") && cart.totalQty) {
    document.getElementById("quantity").value = cart.totalQty;
  }

  if (document.getElementById("summaryDate")) {
    document.getElementById("summaryDate").innerHTML = cart.date || "—";
  }

  if (document.getElementById("summaryQty")) {
    document.getElementById("summaryQty").innerHTML = cart.totalQty || "—";
  }

  if (document.getElementById("summaryTotal")) {
    document.getElementById("summaryTotal").innerHTML = cart.total || "$0.00";
  }

  if (document.getElementById("totalAmount")) {
    document.getElementById("totalAmount").innerHTML = cart.total || "$0.00";
  }
}

// Run Functions
greeting(hour);
ActiveNav();
getWeather();
loadCartIntoCheckout();