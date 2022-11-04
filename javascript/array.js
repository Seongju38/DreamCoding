"use strict"

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

/******************************************************************************************************************************/

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 맨 마지막 원소 출력

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
// forEach는 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력함

/******************************************************************************************************************************/

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍉', '🍓');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift('🍉', '🍓');
console.log(fruits);

// shift : remove an item from the benigging
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// !!note!! shift, unshift are slower than pop, push
// 되도록이면 pop, push 사용

// splice : remove an item by index position
fruits.push('🍓', '🍆', '🍋');
console.log(fruits);
// fruits.splice(1); // 지정한 인덱스부터 끝까지 지움
fruits.splice(1, 1); // 지정한 인덱스에서 몇 개 지움
console.log(fruits);
fruits.splice(1, 1, '🥝', '🍇'); // 지정한 인덱스에서 몇 개 지우고 그 자리에 넣어줌
console.log(fruits);

// combine two arrays
const fruit2 = ['🍒', '🍅'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

/******************************************************************************************************************************/

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexof
console.log(fruits.indexOf('🍎')); // 몇 번째 있는지
console.log(fruits.indexOf('🍋'));
console.log(fruits.indexOf('🍉')); // 없는 것은 -1

// includes
console.log(fruits.includes('🍉')); // 포함되어 있는지
console.log(fruits.includes('🍆'));

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits.indexOf('🍎')); // 제일 첫 번째에 있는 인덱스
console.log(fruits.lastIndexOf('🍎')); // 제일 마지막에 있는 인덱스
