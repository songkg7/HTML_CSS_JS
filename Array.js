"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let value of fruits) {
  console.log(value);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("strawberry", "peach");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift("strawberry", "lemon");
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("strawberry", "peach");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "watermelon", "pineapple");
console.log(fruits);

// combine two arrays
const fruits2 = ["coconut", "mango"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("lemon"));

// includes
console.log(fruits.includes("watermelon"));
console.log(fruits.includes("coconut"));

// lastIndexOf
console.clear();
fruits.push("lemon");
console.log(fruits);
console.log(fruits.indexOf("lemon"));
console.log(fruits.lastIndexOf("lemon"));
