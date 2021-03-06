/* 
// 전처리기란
C언어의 #include든가 #define과 같이 코드를 컴파일 하기 전에 그에 관한 사전 준비를 하는 컴파일러의 일종이다. 보통은 컴파일러에 포함되어 있고, 자동으로 실행되며, 컴파일러의 한 요소로 취급한다. 전처리기는 소스 파일을 한번 읽고 수정된 소스 파일을 컴파일러에 전달한다. 컴파일러는 수정된 소스파일을 받아서 .obj을 생성한다. #define이라면 매크로를 정의하고 #include는 파일을 포함하는 등의 행동을 한다. 컴파일러가 #define MAX_SIZE 100 이라고 된 코드르 보면 MAX_SIZE 코드들을 모두 100으로 치환해버린다. CSS내의 전처리기로는 특정한 모듈을 이용해 소스코드를 만들고 전처리를 통해 CSS 파일로 바뀐 뒤 컴파일 되는 것을 의미한다.


// CSS pre-processer (CSS 전처리기)
> Sass, Less, Stylus등의 여러 모듈들이 있다.
> 전처리기의 자신만의 특별한 syntax를 가지고 CSS를 생성하도록 하는 프로그램이다. 프로그래밍과 같은 변수, 함수, 상속, 중첩등의 개념을 이용가능하다. 따라서 방대한 CSS 파일을 효율적으로 처리할 수 있도록 해준다.
> 이런 전처리기를 사용함에 있어 장점은
    1. 재사용성이 좋다. 변수, 함수로 대체 가능하기에
    2. 임의 함수, 내장 함수로 인한 개발 시간을 절약가능하다
    3. 유지 관리에 용이하다. 
    단점으로는
    1. 전처리기를 위한 도구가 필요하다.
    2. CSS 개발에 대한 역할과 요소 접목으로 개발적인 요소를 알아야 한다.
    당연한 소리들이다. 
    여러 모듈들 중 SASS도 좋지만 SCSS가 더 낫다. 더 넓은 범용성과 CSS와의 호환성에서 SCSS가 나은 편이다.


// CSS Architecture
> CSS 소스코드가 방대해짐에 따라 중첩되는 성질, 복잡한 코드로 인해 기대했던 결과가 나오지 않고 디버깅에 시간을 많이 투자해야하는 경우가 생기기도 한다. 그렇기에 견고하고 확장성있는 CSS 구조를 만들어야 할 필요가 있다.
    1. 컴포넌트 지향 : 컴포넌트 기반의 UI에 맞춘 CSS 만들기
    2. 샌드박스 : 로컬 컴포넌트의 스타일을 외부 스타일로부터 보호
    3. 편리함 : 사용하는데 어려움이 없어야 함
    4. 안전한 경우 오류 허용 : 로컬 컴포넌트 스타일 기반이지만 전역 스타일은 예외적으로 허용 가능

> 항상 클래스 이름 셀렉터를 우선한다. CSS에 아이디, 태그를 사용하지 않는 편이 좋다. 아이디는 하나의 요소에만 적용되기에 피하는 것이 좋고 태그는 오류 발생 가능성을 키운다. 
> 컴포넌트 코드들은 같은 폴더에 둔다. 마크업, 스크립트, 스타일 시트, 테스트코드(html, js, scss, spec.js)등과 같은 파일들을 한 곳에 모아두는 것이다.
> 클래스 이름을 일관적으로 작성한다. 이름을 대충 지어서 만들어버리면 언젠가 디버깅을 해야 할 떄 이해하기 힘들 뿐더러 협업을 하는 순간이라면 남들이 내 코드를 이해못할 수도 있기 때문이다. 이와 같은 문제를 방지하고 공동 작업의 효율을 위해 제안된 것이 SMACSS, BEM, SUIT와 같은 방법론들이다. 다들 조금씩 다르지만 기본적으로 bolck(컴포넌트), entity(컴포넌트 하위 요소), modifier(하위 요소 중에서 일부만 변경된 경우), utility(버튼 같은 공유 스타일), state(hover)등으로 클래스를 구분해서 마크업과 스타일 시트를 작성하자는 것이다. 

// Module Bundler, Webpack
> 웹팩이란 프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러이다. 
> 모듈 번들러란 웹 애플리케이션을 구성하는 자원들(HTML, CSS, JS)을 모듈로 보고 이를 조합해서 병합된 하나의 결과물로 만드는 도구를 의미한다.
> 모듈이란 특정 기능을 갖는 작은 코드 단위를 이야기한다. math.js는 sum(), pi 상수, substract()를 갖는 모듈이다. 이처럼 성격이 비슷한 기능들을 하나의 의미있는 파일로 관리하면 모듈이 된다.
> 모듈 번들링이란 웹 애플리케이션들을 구성한느 많은 자원들을 하나의 파일로 병합 및 압축 해주는 동작을 모듈 번들링이라고 한다. 빌드, 번들링, 변환 모두 같은 의미의 단어이다.
> 웹팩이 필요한 이유
    1. 여러 파일들이 한 파일로 묶일 때 전역 스코프에서 선언된 변수와 함수들이 뒤엉켜 혼란을 초래할 수 있다. 

설명이 잘 되어있는 사이트
    https://ingg.dev/webpack/



*/
