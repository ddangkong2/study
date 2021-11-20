// js is synchronous
/*
JS is syncronous!

자바는 동기적인 아이다. 호이스팅이 실행된 이후 
위에서부터 아래로 하나하나 동기적으로 파일을 실행시킨다는 이야기
호이스팅 > var, function이 스코프 내의 제일 위로 옮겨 파일을 이해하는 것
*/

/* 
콜백함수란 코드를 통해 명시적으로 호출되는 함수가 아니라, 개발자는 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나
특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.
즉 콜백함수는 유니크한 문법적 특징을 가지고 있는 것이 아니라 호출 방식에 의한 구분을 의미한다.
버튼을 누른다던가 클릭해서 alert를 발생시키는 함수들이 모두 콜백함수라고 부를 수 있다.
콜백함수란 특정 함수에 전달되어 특정함수가 어떤 조건에 의해 호출되는 함수라고 후려서 부른다고 생각하자
콜백함수란 
1. 다른 함수의 인자로써 이용되는 함수
2. 어떤 이벤트에 의해 호출되어지는 함수
*/

// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 1000);
// console.log("3");

//setTimeout의 파라미터로 함수를 전달해주는데 위의 기본 포맷으로 보면 이해하기 힘들게 되어 있는 구조다.
//기본 포맷은 안에 화살표 함수를 넣어줘서 바로 함수를 표기해주었지만 파라미터로 함수가 들어간다는것을 쉽게 보기위해선
//함수를 정의하고 함수를 적어두는 것으로 같은 실행이 가능하다
function func() {
  console.log("2");
}

console.log("1");
setTimeout(func, 1000);
console.log("3");

// 동기적인 콜백
function printImmediately(print) {
  print();
}

//printImmediately(() => console.log("hello"));
printImmediately(func);
//애로우 펑션을 써서 복잡해 보이는 것이지 사실상 전달하는 것이 함수라는 점이다.
// 위에서 서술하듯 콜백함수는 그냥 인자로 전달하는 함수이거나 어떤 이벤트에 의해 호출되는 함수들을 콜백이라고 부르는 것뿐이다.

/*
여기서 살펴봐야할 콜백은 printImmediately에서 print라는 인자를 받아와서 이를 함수처럼 실행시킨다는 것이다.
받아올 때의 값은 print라는 프로퍼티로 함수 내에서 사용하게 되는데 함수내에 이 print라는 인자를 함수로 사용하고 있는 것으로 보아
우리는 인자로써 함수를 전달해야하고 동작시켜야한다는 것을 알수있다.

*/

// 비동기적인 콜백
function printWithDelay(fun, time) {
  setTimeout(fun, time);
}
printWithDelay(() => console.log("I get it!"), 2000);
/* 
이제 이해했다. 우리는 전달할때 인자 이름을 적고 함수 내에서 표기를 해주는 거다. 이게 함수로 이용될 걸 알기때문에
우리는 나중에 함수를 호출할 때 함수를 넣어 실행시켜주는것이다.
*/

//callback hell example
class UserStorage {
  loginUser(id, password, onSuccese, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccese(id); // 위에 onSuccese에 함수를 집어넣고 그 함수의 모양대로 구동하게 될것이다.
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccese, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccese({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  // 이부분부터 onSucceses 함수에 들어가게 될 함수 구조
  (user) => {
    userStorage.getRoles(
      user,
      // 여기부터 getRoles 클래스 내의 onSuccese 함수 정의
      (userWithRole) => {
        alert(`hello ${userWithRole.name}, you have a ${userWithRole.role}`);
      },
      //여기부터 getRoles 클래스 내의 onError 함수 정의
      (error) => {
        console.log(error);
      }
    );
  },
  // 이부분부터 onError 함수에 들어가게 될 구조
  (error) => {
    console.log(error);
  }
);

//완벽하게 이해해 버렸다. 이제 스스로 코드를 짤 수 있도록 스킬을 늘려야 할듯하다
