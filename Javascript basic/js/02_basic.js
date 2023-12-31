/*
타입(data type)이란 프로그램에서 다룰 수 있는 값의 종류를 의미합니다.
자바스크립트에서는 여러 가지 형태의 타입을 미리 정의하여 제공하고 있으며, 이것을 기본 타입이라고 합니다.
자바스크립트의 기본 타입은 크게 원시 타입과 객체 타입으로 구분할 수 있습니다.

원시 타입(primitive type)은 다음과 같습니다.

1. 숫자(number)
2. 문자열(string)
3. 불리언(boolean)
4. 심볼(symbol) : ECMAScript 6부터 제공됨
5. undefined

객체 타입(object type)은 다음과 같습니다.

6. 객체(object)
*/
let num = 10;          // 숫자
let myName = "Hyoni"; // 문자열
let str;               // undefined

// 1. 숫자(number)
/*
자바스크립트는 다른 언어와는 달리 정수와 실수를 따로 구분하지 않고, 모든 수를 실수 하나로만 표현합니다.
또한, 매우 큰 수나 매우 작은 수를 표현할 경우에는 e 표기법을 사용할 수 있습니다.
*/
let firstNum = 10;     // 소수점을 사용하지 않은 표현
let secondNum = 10.00; // 소수점을 사용한 표현
let thirdNum = 10e6;   // 10000000
let fourthNum = 10e-6; // 0.00001

// 문자열(string)
/*
자바스크립트에서 문자열은 큰따옴표("")나 작은따옴표('')로 둘러싸인 문자의 집합을 의미합니다.

큰따옴표는 작은따옴표로 둘러싸인 문자열에만 포함될 수 있으며, 작은따옴표는 큰따옴표로 둘러싸인 문자열에만 포함될 수 있습니다.
*/
let str1 = "큰따옴표를 사용한 문자열";
let str2 = '작은따옴표를 사용한 문자열';
let str3 = "작은따옴표는 큰따옴표로 둘러싸인 '문자열'에만 포함될 수 있습니다."
let str4 = '큰따옴표는 작은 따옴표로 둘러싸인 "문자열"에만 포함될 수 있습니다.'

// 자바스크립트에서는 숫자와 문자열을 더할 수도 있습니다.
// 이 경우 자바스크립트는 숫자를 문자열로 자동 변환하여, 두 문자열을 연결하는 연산을 수행합니다.
console.log(10 + "문자열"); //10문자열


// 불리언(boolean)
/*
불리언 값은 참(true)과 거짓(false)을 표현합니다.
자바스크립트에서 불리언 값은 예약어인 true와 false를 사용하여 나타낼 수 있습니다.
*/
let num1 = 10;
let num2 = 20;
console.log(num1 < num2); // true 10이 20보다 작다
console.log(num1 > num2); // flase 10이 20보다 크다

// 심볼(symbol)
/*
심볼 타입은 ECMAScript 6부터 새롭게 추가된 타입입니다.
심볼은 유일하고 변경할 수 없는 타입으로, 객체의 프로퍼티를 위한 식별자로 사용할 수 있습니다.
*/
let sym = Symbol("javascript");  // symbol 타입
let symObj = Object(sym);        // object 타입
// *심볼 타입은 익스플로러에서 지원하지 않습니다.


// typeof 연산자
// typeof 연산자는 피연산자의 타입을 반환하는 피연산자가 단 하나뿐인 연산자입니다.
console.log(typeof 10);        // number 타입
console.log(typeof "문자열");  // string 타입
console.log(typeof true);      // boolean 타입
console.log(typeof undefined); // undefined 타입
console.log(typeof null);      // object 타입


// null과 undefined
/*
자바스크립트에서 null이란 object 타입이며, 아직 '값'이 정해지지 않은 것을 의미합니다.(빈 값 '')
또한, undefined란 null과는 달리 '타입'이 정해지지 않은 것을 의미합니다. (값이 x)
따라서 자바스크립트에서 undefined는 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환됩니다.
*/
{
  let num;
  let str = null;
  console.log(num); //undefined 
  // 초기화하지 않았으므로 undefined 값을 반환함.

  console.log(str); // null
  // object 타입의 null 값

  console.log(typeof a); //undefined
  // 정의되지 않은 변수에 접근하면 undefined 값을 반환함.
}

/*
null과 undefined는 동등 연산자(==)와 일치 연산자(===)로 비교할 때 그 결괏값이 다르므로 주의해야 합니다.
null과 undefined는 타입을 제외하면 같은 의미지만, 타입이 다르므로 일치하지는 않습니다.
*/
console.log(null ==  undefined); //true
console.log(null === undefined); //false


//객체(object)
/*
자바스크립트의 기본 타입은 객체(object)입니다.
객체(object)란 실생활에서 우리가 인식할 수 있는 사물로 이해할 수 있습니다.
객체는 여러 프로퍼티(property)나 메소드(method)를 같은 이름으로 묶어놓은 일종의 집합체입니다.
*/
let dog = { name: "나나", age: 17 }; // 객체의 생성

// 객체의 프로퍼티 참조 
// https://www.tcpschool.com/javascript/js_object_concept
document.querySelector(".result").innerHTML =
    "강아지의 이름은 " + dog.name + "이고, 나이는 " + dog.age + "살 입니다.";