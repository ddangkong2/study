//clear style of using promise

// 1. async
// async를 함수 앞에 붙이면 promise를 쓴 것처럼 해준다. return은 resolve를 던져준 것처럼 작동한다

async function fetchUser() {
  return "ellie";
}
const user = fetchUser();
user.then(console.log); //이 코드는 비동기적으로 처리된 값을 받아왔기 떄문에 2번째로 출력된다.
console.log(user); //코드를 읽고 지나가는 사이 동기적으로 처리 되었기에 object가 먼저 출력된다.

// 2. await

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

/*
위와 같은 코드이다.
function getBanana(){
  return delay(3000)
  .then(()=>'banana');
}
*/

// getApple, getBanana에 await를 붙여주지 않으면 위에서 delay에 걸렸는지 object promise를 출력한다.
//
async function pickFruits() {
  /*
  이 코드로 실행시키면 1초를 기다리고 1초를 더 기다려서 작동한다. 
  병렬적으로 처리하기 위해 프로미스를 바로 실행시켜야 할 필요가 있다.
  const apple = await getApple();
  const banana = await getBanana();
  */

  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  try {
  } catch {
    console.log(error);
  }
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs

function pickAllFruits() {
  // promise.all 뒤에 붙는 promise들은 바로 병렬적으로 실행된다.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// 먼저 값이 나오는 애만 출력하기
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
