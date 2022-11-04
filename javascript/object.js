// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// Object = { key : value };

// 1. Literals and Properties
const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

// Object를 이용하여 name과 age를 관리하면 더 편하고 유용하게 사용 가능
const ellie = {name: 'ellie', age: 4}; // JavaScript에서는 class 없이도 괄호를 통해 Object를 생성할 수 있음
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
print(ellie);

// Object를 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// JavaScript에서 가능한 문법 : 사용 X -> 유지, 보수 힘듦
// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

/******************************************************************************************************************************/

// 2. Computed properties
// key should be always string

// object 안에 있는 데이터를 .과 []를 이용하여 접근 가능
console.log(ellie.name); // 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때 사용 -> 보통은 이렇게 사용
console.log(ellie['name']); // Computed properties : 정확하게 어떤 key가 필요할지 모를 때 사용, 런타임 때 데이터가 결정될 때 사용 -> 실시간으로 원하는 key값을 받아오고 싶을 때 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  // console.log(obj.key); // undefined
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

/******************************************************************************************************************************/

// 3. Property value shorthand
const preson1 = { name: 'bob', age: 2};
const preson2 = { name: 'steve', age: 3};
const preson3 = { name: 'dave', age: 4};
// const person4 = { name: ''};
const person4 = makePerson('ellie', 30);
// object를 필요할 때 일일히 만들게 될 때 불가피하게 동일한 것을 반복해서 작성해야하는 문제점이 생길 수 있음 : 값 전달만 하면 object를 만드는 함수를 만듦
console.log(person4);

function makePerson(name, age) {
  return {
    // name: name, // key와 value의 이름이 동일하면 생략 가능
    // age: age,
    name,
    age,
  };
}

// 4. Constructor function
// object를 생성하는 함수를 만들 때는 대문자로 작성, this 사용
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

/******************************************************************************************************************************/

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); // undefined

/******************************************************************************************************************************/

// 6. for..in vs for..of

console.clear(); // 이전 console 삭제

// for (key in obj)
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

/******************************************************************************************************************************/

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue : 뒤에 있는 property가 나옴
console.log(mixed.size); // big
