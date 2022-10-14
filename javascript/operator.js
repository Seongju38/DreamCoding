// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

/******************************************************************************************************************************/

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

/******************************************************************************************************************************/

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter = counter + 1;
                                // preIncremnet = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; // postIncrement = counter; 
                                 // counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

/******************************************************************************************************************************/

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

/******************************************************************************************************************************/

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

/******************************************************************************************************************************/

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or) : finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); // value1이나 value2가 둘 다 false일 경우에 마지못해 실행이 될 수 있도록
                                                   // expression이나 function 호출하는 것들을 맨 뒤에 배치하는 것이 효율적임

// && (and) : finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`); // value1이 false이면 어차피 false이기 때문에 뒷부분은 아예 실행이 안 됨
                                                    // 그래서 마찬가지로 heavy한 operation일수록 맨 뒤로 가는 것이 효율적임


// &&는 간단하게 null 체크할 때도 많이 사용됨
// often used to compress long if-statement
// nullableObject && nullableObject.something -> 코드로 바꾸면 아래와 같음
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('😁');
  }
  return true;
}

// ! (not)
console.log(!value1);

/******************************************************************************************************************************/

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion : type 상관없음
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion : type 상관있음
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = {name : 'ellie'};
const ellie2 = {name : 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// 0과 null, undefined, empty string은 모두 false로 간주됨
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

/******************************************************************************************************************************/

// 8. Conditional operators : if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

/******************************************************************************************************************************/

// 9. Teranry operator : ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

/******************************************************************************************************************************/

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'Firefox';
switch (browser) {
  case 'IE' :
    console.log('go away!');
    break;
  case 'Chrome' :
    // console.log('love you!');
    // break;
  case 'Firefox' :
    console.log('love you!');
    break;
  default :
    console.log('same all!');
    break;
}

/******************************************************************************************************************************/

// 11. Loops

// While loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 블록을 먼저 실행하고 싶을 때는 do while을 사용해야하고, 조건이 맞을 때만 실행하고 싶으면 while을 사용해야함

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops : 시간복잡도가 O(n^2)이기 때문에 cpu에 좋지 않음 -> 되도록이면 피하는 것이 좋음
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break(loop를 완전히 끝내는 것), continue(continue 단계만 skip하고 다음 단계로 넘어가는 것)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i%2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
} // 연습용

for (let i = 0; i < 11; i++) {
  if (i%2 === 0) {
    console.log(`q1. ${i}`);
  }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8){
    break;
  }
  console.log(`q2. ${i}`);
}