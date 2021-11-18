// ajax (Asynchronous Javascript And XML) 비동기식 자바스크립트와 xml,
// 자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능
//javascript는 숫자를 쓰면 정수, 실수를 쓰면 실수로 알아서 처리된다.
// 자료형이 정해진 상태에서 만들어지지 않는다.

/*
            ES6의 문법으로써 let과 const가 추가되었다.
            let은 값의 초기화를 바꿔주어도 되는 선언이며 const는 할당을 하면 바꿀 수 없다.
            var는 호이스팅을 실행한다. 호이스팅이란 함수가 실행되기 전 함수안에 있는 변수들을 유효 범위의 
            최 상단에 선언하는 것처럼 인식하는 것을 말한다. 실제로 코드가 끌어올려지는 것이 아니며 자바스크립트 Parser
            내부적으로 끌어올려서 처리하게 되는 것이다. let과 const는 해당되지 않는다. 호이스팅은 코드가 더러워지게 하는
            수도 있기 때문에 let과 const로 깔끔한 코드를 작성해야 한다.
        */
//first-class function 다른 변수에 함수를 할당이 가능하고 함수의 인자, return 으로도 함수를 전달할 수 있는것을 말한다.
//여기서 중요한 점은 함수를 변수처럼 처리하기에 호이스팅이 된다는 점이 그냥 함수를 정의하는 것과 다르다.

console.log(1 == "1"); // true // type is diff // value is same
console.log(1 === "1"); // false // type is diff
// 자바스크립트 내애서는 타입을 지정하지 않는 유연한 변수를 선언하게 해주기 때문에 실 개발을 할 때는 === 사용할것

console.log(undefined === null); // false // 값 자체가 지정되지 않은 것과 값이 없다고 선언하는 것은 다르기 때문
console.log(true === 1); // false > === 연산자는 strict하기 때문  ===연산자는 양 측이 같은 type, data여야한다.

console.log(`or : heavy_thing || light_thing || light_thing`); // 여기서 heavy_thing이 true라면 바로 t를 리턴함 그렇기 때문에
// 가벼운 것을 먼저 앞에 배치해야 리소스를 적게 먹음
// and 연산자도 이와 마찬가지로 제일 처음 것이 f 일 경우 바로 f를 리턴하기 때문에 무거운 것을 뒤로 나둬야 함.

/*
function upgradeUsers(user){
    if (user.point > 10){
        //logic.......
        //Bad
    }
}
function upgradeUsers(user){
    if(user.point <= 10) return;
    //logic......
    //Good
}
early return, early exit > 로직을 깔끔하게 짬에 있어서 트래픽을 줄이기 위해 조건을 이용해 먼저 쳐내고 로직을 실행한느 것이 효율적이다.
*/

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

/*
getter와 setter 설정시 얘네들이 미들웨어처럼 알아서 찾아 동작한다. 인스턴스를 만들며 age에 setter를 건드리게 되는데 
this.age = age 상에서 뒤의 age 부분이 setter로 이동해서 작동한다. 그러다가 this._age 코드에서 만약 _age라고 설정하지 않고
age라고 설정해두었다면 다시 this.age = age 부분의 age로 돌아가게 되고 다시 setter를 진입하게 된다. 그래서 call stack이 꽉 찼다고
나오게 된다.
*/
//runtime > 프로그램이 동작하고 있을 때

const grades = { egoing: 10, k992: 6, soriglgi: 80 }; //객체
/*
            클래스란 설게도로써 변수(field)와 함수(method)를 담고 있다.
            객체는 소프트웨어 세계에 구현할 대상이고, 이를 구현하기 위한 설계도가 클래스이며, 이 설계도에 따라 
            소프트웨어 세계에 구현된 실체가 인스턴스이다
            소프트웨어에서 객체를 구현하기 위해 콘셉 이상으로 많은 것들을 사고하고 구현해야 하므로 이를 위한 
            설계도로써 클래스를 작성한다. 설계도를 바탕으로 객체를 소프트웨어에 실체화하면 그것이 인스턴스가 되고,
            이 과정을 인스턴스화라고 한다. 실체화된 인스턴스는 메모리에 할당된다.

            클래스 생성에 따라 할당된 객체인 인스턴스를 '객체'라고 부르는데 틀린 말이 아니다.
            인스턴스라고 부르면 더 정확하겠지만 개념적으로 인스턴스는 객체에 포함된다고 볼 수 있다.
*/

console.log(grades.egoing);
console.log(grades["egoing"]);

//위 문법을 사용해야할 경우
function printAge(obj, key) {
  console.log(obj[key]);
} // 이 당시에는 받아오는 프로퍼티가 뭔지 모르기 때문
printAge(grades, "egoing");

//정규표현식
