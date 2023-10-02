/*
🍐 함수의 유효 범위(function scope)
대부분의 프로그래밍 언어에서는 블록 내에서 정의된 변수를 블록 외부에서는 접근할 수 없습니다.
블록(block)이란 코드 내에서 중괄호({})로 둘러싸인 부분을 가리킵니다.
이러한 블록을 기준으로 하는 유효 범위를 블록 단위의 유효 범위라고 합니다.
하지만 자바스크립트는 다른 언어와는 달리 함수를 블록 대신 사용합니다.

자바스크립트에서 함수는 자신이 정의된 범위 안에서 정의된 모든 변수 및 함수에 접근할 수 있습니다.
'전역 함수'는 모든 전역 변수와 전역 함수에 접근할 수 있습니다.
반면, 다른 함수 내에 정의된 '내부 함수'는 그 함수의 부모 함수(parent function)에서 정의된 모든 변수 및 부모 함수가 접근할 수 있는 모든 다른 변수까지도 접근할 수 있습니다.
*/
let x = 10, y = 20; // x,y를 전역 변수로 선언

// sub()을 전역 함수로 선언
function sub() {
  return x - y; // 전역 변수인 x, y에 접근
}
console.log(sub()); // -10

function parentFunc() {
  let x = 2, y = 3; //전역 변수와 같은 이름을 선언하여 전역 변수의 범위를 제한함

  function add() { // add()함수는 내부 함수로 선언됨
    return x + y; // 전역 변수가 아닌 지역 변수 x, y에 접근
  }
  return add();
}
console.log(parentFunc()); //5

/*
🍌 함수 호이스팅(hoisting)
자바스크립트에서 함수의 유효 범위라는 것은 함수 안에서 선언된 모든 변수는 함수 전체에 걸쳐 유효하다는 의미입니다.
그런데 이 유효 범위의 적용이 변수가 선언되기 전에도 똑같이 적용됩니다.
이러한 자바스크립트의 특징을 함수 호이스팅(hoisting)이라고 합니다.
즉, 자바스크립트 함수 안에 있는 모든 변수의 선언은 함수의 맨 처음으로 이동된 것처럼 동작합니다.
*/
var globalNum = 10;     // globalNum을 전역 변수로 선언함.
function printNum() {
  console.log(`지역 변수 globalNum 선언 전의 globalNum의 값은 ${globalNum} 입니다.`); // ① // undefined 
  var globalNum = 20; // globalNum을 지역 변수로 선언함. // ②
  console.log(`지역 변수 globalNum 선언 후의 globalNum의 값은 ${globalNum} 입니다.`); // 20
}
printNum();
// 위의 예제 ①의 시점에서는 globalNum변수가 전역 변수를 가리킨다고 생각하기 쉽습니다.
// 하지만 자바스크립트 내부에서는 함수 호이스팅에 의해 다음과 같이 코드가 변경되어 처리됩니다.

var globalNum = 10;
function printNum() {
  var globalNum; // 함수 호이스팅에 의해 변수의 선언 부분이 함수의 맨 처음 부분으로 이동됨.
  console.log(`지역 변수 globalNum 선언 전의 globalNum의 값은 ${globalNum} 입니다.`);;
  globalNum = 20;
  console.log(`지역 변수 globalNum 선언 후의 globalNum의 값은 ${globalNum} 입니다.`);;
}
printNum();
/*
위의 예제 ①의 시점에서는 globalNum라는 지역 변수가 선언만 되어 있고, 아직 초기화만 안 된 상태입니다.
따라서 이때 globalNum 변수에 접근하면 아직 초기화되지 않은 변수에 접근했으므로, undefined 값을 반환하게 됩니다.
실제로 변수가 초기화되는 시점은 원래 코드에서 변수가 선언된 ②의 시점입니다.
*자바스크립트에서는 함수 호이스팅이 자동으로 수행되지만, 항상 함수 블록의 첫 부분에 변수를 선언하는 것이 좋습니다.

var는 함수 스코프 입니다.
*/

/*
자바스크립트에서 변수를 선언할 수 있는 키워드는 let입니다.(ES6에 추가된 문법)
let이전에는 var을 사용했지만 var 사용을 권장하지 않습니다.

🍋 변수 선언 후 중복 가능
var를 사용하면 이미 선언된 변수를 중복해서 선언할 수 있습니다.
중복 선언해도 오류X
*/

var name = "Hyoni";
console.log(name);

var name = "Hyoni";
console.log(name);

// 🍋 선언되지 않은 변수 참조 가능
console.log(age); // 출력: undefined
age = 4; // 값 할당
var age; // 변수 선언
/*
정상적인 코드라면 변수를 선언하고 값을 할당한 뒤 출력해야 합니다.
위 코드는
출력했을 때 변수가 선언되어 있지만 값은 undefined라고 나옵니다.
대부분의 프로그래밍 언어에서는 변수를 선언하고 나서 값을 할당하는 것이 정상적입니다.
하지만 Javascript에서의 var는 선언도 하기 전에 값을 할당하는 것이 허용됩니다.
심지어 값을 할당하기 전에도 출력이 가능합니다.

이 코드를 let을 이용해 동일하게 한다면 "초기화 전에 'age'에 액세스 할 수 없다"라는 error가 발생합니다.
*/
{
  // console.log(age);
  // age = 4;
  // let age;
  /* !Uncaught ReferenceError: Cannot access 'age' before initialization
  보통은 이렇게 error가 발생하는 것이 정상적입니다.
  하지만 var를 사용하면 값을 선언하기도 전에 사용할 수 있습니다. 
  이것을 var hoistiong이라고 합니다.
  */
}

/*
var 호이스팅(hoistiong)
변수 선언들은 어느 코드가 실행되기 전에 처리하기 때문에
코드 안에서 어디에 선언했는지에 상관없이 최상위에 선언한 것과 동등합니다.
이것은 변수가 선언되기 전에 사용될 수 있다는 것을 의미합니다.
변수를 어디에 선언했는지에 상관없이 항상 제일 위로 선언을 끌어올려 주는 것을
"호이스팅(hoistiong)"이라고 합니다.
var를 사용하지 않는 또 다른 이유는 var는 함수 코드 블록({})만 scope로 인정합니다.
이는 함수 외부에서 선언된 모든 변수는 전역 변수인 것을 의미합니다.
 */
var hello = 'global hello!'
function sayHello() {
  var hello = 'function hello!';
  console.log(hello);
}

sayHello(); // function hello!
console.log(hello); // global hello!
/* 
var는 블록({}) 단위의 scope이 아닌 함수(function) 단위의 scope를 가집니다.
위 코드를 보면
hello라는 변수의 유효범위가 함수 블록 안이라는 것을 알 수 있습니다.
*/

var hello = 'hello';
if (true) {
  var hello = 'hello hello hello';
}
console.log(hello); // hello hello hello
/*
위 코드는
var로 hello라는 전역변수를 선언하고
if 내부에 hello변수를 새로 선언하였습니다.

콘솔로 출력을 해보면 if 내부에서 선언한 'hello hello hello'가 출력된 것을 볼 수 있습니다.
hello의 값이 변경된 이유는
var로 선언한 변수의 scope은 블록({}) scope이 아닌 함수(function) 블록 scope이기 때문에
hello변수가 블록({}) 바깥에서도 변경된 것입니다.

변수를 선언할 때는 var를 지양하고 let과 const 사용을 권장합니다.
*/
