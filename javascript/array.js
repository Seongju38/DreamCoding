"use strict"

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

/******************************************************************************************************************************/

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // λ°°μ΄μ λ§¨ λ§μ§λ§ μμ μΆλ ₯

console.clear();

/******************************************************************************************************************************/

// 3. Looping over an array
// print all fruits

// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit));
// forEachλ λ°°μ΄ μμ λ€μ΄μλ valueλ€λ§λ€ λ΄κ° μ λ¬ν ν¨μλ₯Ό μΆλ ₯ν¨

/******************************************************************************************************************************/

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift('π', 'π');
console.log(fruits);

// shift : remove an item from the benigging
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// !!note!! shift, unshift are slower than pop, push
// λλλ‘μ΄λ©΄ pop, push μ¬μ©

// splice : remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits);
// fruits.splice(1); // μ§μ ν μΈλ±μ€λΆν° λκΉμ§ μ§μ
fruits.splice(1, 1); // μ§μ ν μΈλ±μ€μμ λͺ κ° μ§μ
console.log(fruits);
fruits.splice(1, 1, 'π₯', 'π'); // μ§μ ν μΈλ±μ€μμ λͺ κ° μ§μ°κ³  κ·Έ μλ¦¬μ λ£μ΄μ€
console.log(fruits);

// combine two arrays
const fruit2 = ['π', 'π'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

/******************************************************************************************************************************/

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexof
console.log(fruits.indexOf('π')); // λͺ λ²μ§Έ μλμ§
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π')); // μλ κ²μ -1

// includes
console.log(fruits.includes('π')); // ν¬ν¨λμ΄ μλμ§
console.log(fruits.includes('π'));

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits.indexOf('π')); // μ μΌ μ²« λ²μ§Έμ μλ μΈλ±μ€
console.log(fruits.lastIndexOf('π')); // μ μΌ λ§μ§λ§μ μλ μΈλ±μ€
