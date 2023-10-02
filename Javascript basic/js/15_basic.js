/*
🍐 변수의 유효 범위(variable scope)
자바스크립트에서 객체나 함수는 모두 변수(variable)입니다.
변수의 유효 범위(scope)란 해당 변수가 접근할 수 있는 변수, 객체 그리고 함수의 집합을 의미합니다.
자바스크립트에서 변수는 유효 범위에 따라 다음과 같이 구분됩니다.
1. 지역 변수(local variable)
2. 전역 변수(global variable)
*/

/*
🍌 지역 변수(local variable)
지역 변수(local variable)란 함수 내에서 선언된 변수를 가리킵니다.
이러한 지역 변수는 변수가 선언된 함수 내에서만 유효하며, 함수가 종료되면 메모리에서 사라집니다.
함수의 매개변수 또한 함수 내에서 정의되는 지역 변수처럼 동작합니다.
*/
function localNum() {
  let num = 10; // 지역 변수 num에 숫자 10을 대입합니다.
  console.log(`함수 내부에서 변수 num의 타입은 ${typeof num} 입니다.`); //number
}
localNum(); // localNum() 함수 호출
console.log(`함수 호출이 종료 된 후 변수 num의 타입은 ${typeof num} 입니다.`); // undefined 
/*
자바스크립트에서는 선언되지 않은 변수를 사용하려고 하거나 접근하려고 하면 오류를 발생시킵니다.
또한 선언되지 않은 변수에 대한 typeof 연산자의 결괏값은 undefined 값을 반환합니다.
*/

/*
🍌 전역 변수(global variable)
전역 변수(global variable)란 함수의 외부에서 선언된 변수를 가리킵니다.
이러한 전역 변수는 프로그램의 어느 영역에서나 접근할 수 있으며, 웹 페이지가 닫혀야만 메모리에서 사라집니다.
*/
let num1 = 10;
function globalNum() {
  console.log(`함수 내부에서 변수 num의 값은 ${num1} 입니다.`); //10
  num1 = 20; // 전역 변수 num의 값을 함수 내부에서 변경
}

globalNum(); // 함수 globalNum() 호출
console.log(`함수 호출이 종료된 후 변수 num의 값은 ${num1} 입니다.`); //20
/*
전역 변수는 함수 외부뿐만 아니라 내부에서도 접근하여 변경할 수 있습니다. 
자바스크립트에서 지역 변수를 선언할 때에는 반드시 let 키워드를 사용하여 선언해야 합니다.
함수 내부에서 let 키워드를 사용하지 않고 변수를 선언할 경우, 해당 변수는 지역 변수가 아닌 전역 변수로 선언됩니다.
*/
function globalNum1() {
  num2 = 20; // let키워드를 사용하지 않고 변수 num2를 선언
  console.log(num2); // 20
}
globalNum1();
console.log(num2); // 20 // 함수 호출이 종료된 후 변수 num2값은 20입니다.

//또한, 전역 변수와 같은 이름의 지역 변수를 선언하면, 해당 블록에서는 해당 이름으로 지역 변수만을 호출할 수 있습니다.

let num3 = 10; // 전역 변수 num3을 선언함.
function globalNum2() {
  let num3 = 20; // 같은 이름의 지역 변수 num3을 선언함.
  console.log(`함수 내부에서 변수 num의 값은 ${num3}입니다.`); // 20
}
globalNum2(); // 함수 globalNum2() 호출
console.log(`함수의 호출이 끝난 뒤 변수 num의 값은 ${num3}입니다.`); // 10

//위의 예제와 같은 경우 해당 블록에서 전역 변수를 호출하려면, 전역 변수가 window 객체의 프로퍼티임을 명시하면 됩니다.
let num4 = 10; // 전역 변수 num을 선언함.

function globalNum3() {
  let num4 = 20; // 같은 이름의 지역 변수 num을 선언함.
  console.log(`함수 내부에서 지역 변수 num의 값은 ${num4}입니다.`); //20
  console.log(`함수 내부에서 전역 변수 num의 값은 ${window.num4}입니다.`); // undefined
}
globalNum3(); // 함수 globalNum()을 호출함.
//Window 객체: https://www.tcpschool.com/javascript/js_bom_window
