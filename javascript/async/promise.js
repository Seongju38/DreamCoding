'use strict';

// Promise is a JavaScript object for asynchronous operation.

// Promise의 핵심
// - State
// Promise가 무거운 operation을 수행하고 있는 중인지, 아니면 완료가 되어 성공이 되었는지? 실패가 되었는지?
// operation 수행 중 : pending -> 성공적으로 끝냄 : fulfilled or 실패로 끝냄 : rejected
// - Producer(정보 제공) vs Consumer(정보 소비)

/******************************************************************************************************************************/

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files) : 비동기적으로 처리하는 것이 좋음
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie'); // 성공
    // reject(new Error('no network')); // 실패
  }, 2000);
});

// Promise 함수가 만들어지는 순간 executor 함수가 바로 실행되기 때문에
// 만약 사용자가 요청할 때만 네트워크 통신을 해야한다면 불필요한 네트워크 통신을 하게 됨

/******************************************************************************************************************************/

// 2. Cosumers : then, catch, finally를 이용하여 값을 받아옴
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })

// then : Promise가 성공적으로 수행이 되면 resolve에 있는 값이 value로 들어옴
// catch : Promise가 실패한다면 reject가 불림
// finally : Promise의 성공 여부와 상관없이 수행됨

/******************************************************************************************************************************/

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then (num => console.log(num));

// then에서는 값을 바로 전달해도 되고, 또 다른 비동기인 Promise를 전달해도 됨

/******************************************************************************************************************************/

// 4. Error Handling
const getHen = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
  // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
  // .then(hen => getEgg(hen))
  // .then(egg => cook(egg))
  // .then(meal => console.log(meal));
  
  .then(getEgg)
  // .catch(error => {
  //   return '🍔';
  // })
  .then(cook)
  .then(console.log)
  .catch(console.log);