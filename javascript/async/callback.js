'use strict';

// JavaScript is synchronous. 자바스크립트는 동기적인 언어임
// Execute the code block in order after hoisting. 호이스팅이 된 이후부터 코드가 작성된 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 뜻
// hoisting : var, function declaration. 선언들이 자동적으로 제일 위로 올라가는 것

console.log('1');

// setTimeout(function() { // async
//   console.log('2');
// }, 1000); // setTimeout() : 웹브라우저에서 제공되는 api로 지정한 시간이 지나면 전달한 콜백 함수를 호출
setTimeout(() => console.log('2'), 1000);

// console.log('2');

console.log('3');


// synchronous는 정해진 순서에 맞게 코드가 실행되는 것
// asynchronous는 비동기적으로 언제 코드가 실행될지 예측할 수 없는 것

// callback 함수는 전달해준 함수를 나중에 불러달라는 함수

// Synchronous callback
function printImmediately(print) {
  print();
} // JavaScript는 hoisting이 되기 때문에 실행될 때는 제일 먼저 위로 올라감
// 그 이후 코드 순서대로 진행되기 때문에 1 3 hello 2 가 출력됨
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // 위와 마찬가지로 JavaScript는 모든 함수 선언은 hoisting이 되기 때문에 제일 위로 올라감
// 1 동기
// 2 비동기 - 브라우저에 요청 (1초 후)
// 3 동기
// hello 동기
// async callback 비동기 - 브라우저에 요청 (2초 후)
printWithDelay(() => console.log('async callback'), 2000);

/******************************************************************************************************************************/

// Callback Hell example
class UserStrage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000)
  }
}

// 1. 사용자로부터 id, password 입력 받기
// 2. 입력 받은 id, password를 이용하여 서버에게 로그인 요청
// 3. 로그인 성공 시 그 사용자의 id를 받아서 역할 요청
// 4. 사용자 역할 요청이 성공 시 사용자의 역할을 출력하도록 함

const userStorage = new UserStrage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
  userStorage.getRoles(
    user,
    userWithRole => {
    alert(
      `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
    );
  },
  error => {
    console.log(error);
  })
},
error => {
  console.log(error);
})

// 콜백 체인의 문제점
// 1. 가독성이 너무 떨어짐
// 2. 로직 파악 어려움
// 3. 디버깅 어려움
// 4. 유지, 보수 어려움