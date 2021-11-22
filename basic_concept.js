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


// Module Bundler, Webpack

*/
