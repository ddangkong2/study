// Promise is a JS object for asynchronous operation
/*
1. state
    state pending(on progress) > fulfilled of rejected
2. producer & consumer
*/

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work
  // because 파일을 불러오거나 네트워크와 관련된 무거운 일을 동기적으로 처리하면 그 동안 프로그램이 동작하지 않기 때문
  // 조심해야 하는 것이 promise를 만들어서 프로그램이 코드 내로 진입하면 바로 promise가 실행됨
  // 만약 사용자가 네트워크 요청을 필요로 하지 않더라도 executer 내부로 들어오면 promise가 실행되기 때문에 조심해야 한다.
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch, finally
//then 으로는 프로미스의 resolve 함수가 여기로 들어오게 된다는 것을 알 수 있다.
// 만약 resolve를 다른 이름으로 바꾸면 안된다.
//then 뒤에 catch를 붙일 수 있는 이유는 then을 실행하면 다시 promise를 호출하기 때문에 체이닝이 가능하다.
//성공, 실패와 상관없이 finally는 실행된다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000); // resolve에 "hen" 이 들어간다.
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => eggfry`), 1000); // resolve에 "hen => egg" 가 들어간다.
  });

getHen()
  .then((hen) => getEgg(hen))
  // .then(getEgg) 로 줄여서 표현이 가능함. (파라미터로 전달하는 게 하나뿐이라 가능)
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
