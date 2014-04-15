// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Brennon Williams
//  2. Stu Pearlman



// var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
// shooterMcGavin.constructor === Client;
// shooterMcGavin.age === 47;
// shooterMcGavin.quote === "That's your home! Are you too good for your home?!";

// var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
// shooterMcGavin.constructor === Client;
// shooterMcGavin.age === 33;
// shooterMcGavin.quote === "Do you wanna build a snowman?";

// var jimCarrey = new Client("Kristen Bell", 33, "Do you wanna build a snowman?");
// shooterMcGavin.constructor === Client;
// shooterMcGavin.age === 33;
// shooterMcGavin.quote === "Do you wanna build a snowman?";

var adamSandler = {
 "name": "Adam Sandler",
 age: 47,
 "quote": "That's your home! Are you too good for your home?!"
};

var kristenBell = {
 "name": "Kristen Bell",
 age: 33,
 "quote": "Do you wanna build a snowman?"
};

var jimCarey = {
    "name": "Jim Carrey",
    age: 52,
    "quote": "...So you're telling me there's a chance? YEAH!"
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

console.log(shooterMcGavin);

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var dallas = new sixFlags(["volcano", "fire thing", "vomit", "long line"], ["lose money fast", "get cheated"], ["Fried Crap", "Heart Attacks", "Diabetes"]);
dallas.snackStands == ["Fried Crap", "Heart Attacks", "Diabetes"];

function sixFlags(rides, games, snackStands){
  this.rides = rides;
  this.games = games;
  this.snackStands = snackStands;
}
console.log(dallas);

// An object constructor is merely a regular JavaScript function, so it's just as robust (ie: define parameters, call other functions etc). 
//The difference between the two is that a constructor function is called via the new operator (which you'll see below). By basing our object definition on the function syntax, we get its robustness as well.

// Lets use a real world item "cat" as an example. A property of a cat may be its color or name. A method may be to "meeyow". 
//The important thing to realize, however is that every cat will have a different name or even meeyow noise. To create an object type that accommodates this need for flexibility, we'll use an object constructor:


// function cat(name) {
// 	this.name = name;
// 	this.talk = function() {
// 		alert( this.name + " say meeow!" )
// 	}
// } 

// cat1 = new cat("felix")
// cat1.talk() //alerts "felix says meeow!"

// cat2 = new cat("ginger")
// cat2.talk() //alerts "ginger says meeow!"

// Object literals provide a very convenient notation for creating new object values. An object literal is a pair of
// curly braces surrounding zero or more name/value pairs. An object literal can appear anywhere an expression
// can appear:
// var empty_object = {};
// var stooge = {
//  "first-name": "Jerome",
//  "last-name": "Howard"
// };
// A property's name can be any string, including the empty string. The quotes around a property's name in an
// object literal are optional if the name would be a legal JavaScript name and not a reserved word. So quotes are
// required around "first-name", but are optional around first_name. Commas are used to separate the
// pairs.
// A property's value can be obtained from any expression, including another object literal. Objects can nest:
// var flight = {
//  airline: "Oceanic",
//  number: 815,
//  departure: {
//  IATA: "SYD",
//  time: "2004-09-22 14:55",
//  city: "Sydney"
//  },
//  arrival: {
//  IATA: "LAX",
//  time: "2004-09-23 10:42",
//  city: "Los Angeles"
//  }
// 1
// 1};
