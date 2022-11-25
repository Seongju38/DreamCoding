// async & await
// clear style of using promise

// 상황에 따라 promise와 async&await 골라서 사용해야함

/******************************************************************************************************************************/

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs... (가정)
  return 'ellie'; // 동기적으로 실행되고 아래에 페이지 UI 코드가 있다면 사용자는 10초동안 기다려야함
  
  // 비동기 필요
  // return new Promise((resolve, reject) => {
  //   // do network reqeust in 10 secs... (가정)
  //   resolve('ellie');
  // });

  // 함수 앞에 async 키워드를 쓴다면 코드 블록이 자동적으로 Promise로 됨
}

const user = fetchUser(); 
user.then(console.log);
console.log(user);

/******************************************************************************************************************************/

// 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return '🍎';
}

async function getBanana() {
  await delay(3000);
  // await delay(1000);
  return '🍌';
}
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌');
// }

// await 키워드는 async가 붙은 함수 안에서만 사용 가능

// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

// pickFruits().then(console.log);
// 으아아아.. callback 지옥이닷

async function pickFruits() {
  // const apple = await getApple();
  // const banana = await getBanana();
  // 위의 코드는 3초 후 사과 얻고, 3초 후 바나나 얻기 떄문에 비효율적임

  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  // 병렬적으로 처리되기 때문에 3초만에 실행됨 -> 이런 더러운 코드는 사용하지 않음, API 사용

  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

/******************************************************************************************************************************/

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);


function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
  // 가장 먼저 수행되는 하나만 선택됨
}

pickOnlyOne().then(console.log);
