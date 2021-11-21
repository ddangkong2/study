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

/*
// ajax
AJAX란 JS의 라이브러리중 하나이며 Asynchronous Javascript And Xml(비동기식 자바스크립트와 xml)이다. 브라우저가 가지고 있는
XMLHttpRequest 객체를 이용해 전체 페이지를 새로 고치지 않고 페이지의 일부만을 위한 데이터를 로드하는 기법이며 JS를 사용한
비동기 통신, 클라이언트와 서버간에 Json이나 XML, HTML, 텍스트파일등의 데이터를 주고받는 기술이다.
즉 쉽게 말해 자바스크립트를 통해 서버에 데이터를 요청하는 것을 말한다.


// XML (eXtensible Markup Language)
HTML같은 경우는 약속된 태그만이 사용가능하다면 xml은 사용자 임의로 태그를 만들 수 있다. 


// JIT (Just In Time)
JIT 컴파일러는 인터프리터 방식의 단점을 보완하기 위해 도입되었다. 실행 시점에 인터프리터 방식으로 기계어 코드를 생성하면서 필요한
데이터를 따로 캐싱해둔다. 나중에 동일한 부분이 호출되면 캐싱해둔 코드를 불러다 쓴다. 그래서 성능을 개선한 방식이다.
속도는 인터프리터보다 빠르며 처음 실행했을 때엔 데이터를 변환하는 작업이 필요하기에 시간이 오래 걸린다.
크롬의 V8엔진에서, JVM에서 JIT을 지원한다.

// SPA (Single Page Application)
단일 페이지 어플리케이션으로써 Ajax를 통해 일부분의 페이지만을 다시 로드하는 방식이다.
예전이였으면 HTML을 주고받아 페이지가 새로고침 되었다면 Ajax를 통해 비동기적으로 페이지의 일부분만을 재로딩한다.
단점
>앱의 규모가 커짐에 따라 자바스크립트 파일이 커진다. (페이지를 로딩 시 사용자가 방문하지 않을 수도 있는 페이지도 로딩하기 떄문)
 코드 스플리팅으로 해결가능하다.
> SEO에 잡히기 쉽지 않다. 자바스크립트가 로딩되기 전엔 DOM이 비어있기 떄문이다.




// different Arrow func with func
// 바인딩
함수 호출과 실제 함수를 연결하는 방법
함수를 호출하는 부분에서 실제 함수가 위치한 메모리를 연결하는 것도 바인딩이다.
바인딩은 정적 바인딩(static binding)과 동적 바인딩(dynamic binding)으로 구분할 수 있다.
정적 - 실행 시간 전에 일어남. 실행 시간에는 변하지 않는 상태로 유지.
동적 - 실행 시간에 이루어지거나 실행 시간에 변경됨.

// this 연산자
// 클로져
// (Lexical) 렉시컬 스코프, 렉시컬 환경
// 쿠버네티스, 도커, AWS, 




// DOM, BOM, Virtual DOM in React Library, CSSOM, 렌더 트리
> DOM (Document Object Model)로써 웹 프라우저가 HTML 파일을 파싱하며 만드는 렌더 트리를 의미한다. 
> DOM과 HTML은 같지 않다. 
 1. 작성된 HTML 문서가 유효하지 않으면 DOM은 스스로 교정을 한다.
 2. JS로 DOM에 새로운 노드를 추가할 수 있다. 따라서 DOM을 업데이트 할 수 있는데 HTML문서의 내용을 바꾸는 것은 아니다.
> DOM은 브라우저에서 보이는 것이 아니다. 브라우저 뷰 포트에 보이는 것은 렌더트리이다. 렌더트리는 DOM과 CSSOM의 조합이다. 렌더트리는 스타일 속성을 가지고 있는 요소를 포함하지 않는다. 하지만 DOM은 스타일 속성을 가지고 있는 요소도 보여준다. 
// 어디서는 DOM이 스타일 요소도 포함한다카고 어디는 포함 안한다카고

> DOM은 개발도구에서 보이는 것이 아니다. 
 1. 개발도구의 요소 검사기는 DOM과 가까운 근사치를 보여주는데 개발 도구는 DOM에 없는 추가적인 정보를 포함한다.

*/
