// 1. Function
// - 프로그램을 구성하는 굉장히 기본적인 building block
// - sub program으로도 불리며, 여러 번 재사용이 가능하다는 장점이 있음
// - 한 가지의 task나 어떠한 값을 계산하기 위해 사용됨


// 함수 선언
// function name (param1, param2) {body... return;}
// 하나의 함수는 한 가지 일만 하도록 만들어야 함
// 함수 이름을 작성할 때는 함수는 무언가를 동작하는 것이기 때문에 동사 형태로 지정해야함
// 자바스크립트에서 함수는 object로 간주됨 : 변수에 할당 가능 / 파라미터로 전달 가능 / 함수 리턴 가능

function printHello() { // 쓸모가 별로 없는 함수 : Hello만 출력하게 되는 함수이기 때문
  console.log('Hello');
}
printHello();


function log(message) { // param을 줘서 사용자가 줬을 때마다 다르게 나올 수 있도록 하기
  console.log(message);
}
log('Hello@');
log(1234);
// 자바스크립트는 type이 없기 때문에 typescript도 공부하는 것이 좋음

/******************************************************************************************************************************/

// 2. Parameters
// premive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie); 
console.log(ellie);

/******************************************************************************************************************************/

// 3. Default parameters (added in ES6)
function showMessage (message, from = 'unknown') {  // from이 정의되지 않았을 때는 undefined으로 되어 있음
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

/******************************************************************************************************************************/

// 4. Rest Parameters (added in ES6)
function printAll(...args) { // ...는 배열 형태로 전달됨
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

/******************************************************************************************************************************/

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message); // 자식은 부모에서 정의된 메시지들을 확인 할 수 있음
    let childMessage = 'hello';
  }
  //console.log(childMessage); // error : 자식에서 정의된 메시지들을 부모에서 확인 할 수 없음
}
printMessage();

// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다! (블록 기준)

/******************************************************************************************************************************/

// 6. Retutn a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum:${sum(1, 2)}`);

/******************************************************************************************************************************/

// 7. Early return, early exit

// bad
function upgradeUser(user) {
  if (user.point > 10) { // 조건이 맞을 때 실행
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) { // 조건이 맞지 않을 때는 일찍이 return 함
    return;
  }
  // long upgrade logic...
}

/******************************************************************************************************************************/

// First-class function
// 다른 변수와 마찬가지로 변수에 할당 가능
// function의 파라미터로 전달이 됨
// function의 return값으로도 return이 됨

// 8. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) : 함수를 선언하기도 전에 호출해도 가능
// a function expression is created when the execution reaches it.

const print = function () { // annonymous function : 함수의 이름이 없이 필요한 부분만 작성
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

/******************************************************************************************************************************/

// 9. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // printYes, printNo가 콜백함수
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function() {
  console.log('yes!');
}

const printNo = function print() { // named function : 디버깅을 위하여 사용 / 함수 안에서 자기 자신을 호출할 때
  console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo)

/******************************************************************************************************************************/

// 10. Arrow function : function 선언을 간편하게 해줌
// always anonymous

const simplePrint = function () {
  console.log('simplePrint!');
}

const simplePrint1 = () => console.log('simplePrint!');


const add1 = (a, b) => a + b;

const add = function (a, b) {
  return a + b;
}


const simpleMultipy = (a, b) => {
  // do someting more
  return a * b;
}



// IIFE : Immediately Invoked Function Expression 
// 함수를 선언하게 되면 호출해야 하는데, 함수를 선언함과 동시에 호출하게 할 수 있음
(function hello() {
  console.log('IIFE');
})();

/******************************************************************************************************************************/

// Q. function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
function calculate(command, a, b) {
  switch (command) {
    case 'add' :
      return a + b;
    case 'substract' :
      return a - b;
    case 'divide' :
      return a / b;
    case 'multiply' :
      return a * b;
    case 'remainder' :
      return a % b;
    default :
      throw Error('unknown command');
  }
}

console.log(calculate('add', 2, 3));