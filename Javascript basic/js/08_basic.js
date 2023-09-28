/*
🍐 문자열 결합 연산자
자바스크립트에서 덧셈(+) 연산자는 피연산자의 타입에 따라 두 가지 다른 연산을 수행합니다.

1. 피연산자가 둘 다 숫자이면, 산술 연산인 덧셈을 수행합니다.
2. 피연산자가 하나라도 문자열이면, 문자열 결합을 수행합니다.
*/
{
  let x = 3 + 4; // 피연산자가 둘 다 숫자이면 덧셈 연산을 수행함.
  let y = "좋은 " + "하루 되세요!" // 피연산자가 둘 다 문자열이면 문자열 결합 연산을 수행함.
}
// 피연산자가 하나는 문자열이고 다른 하나는 문자열이 아닐 때, 자바스크립트는 문자열이 아닌 피연산자를 자동으로 문자열로 변환한 후 문자열 결합을 수행합니다.

/*
🍐 삼항 연산자(ternary operator)
삼항 연산자는 유일하게 피연산자를 세 개나 가지는 조건 연산자입니다.

표현식 ? 반환값1 : 반환값2

물음표(?) 앞의 표현식에 따라 결괏값이 참이면 반환값1을 반환하고, 결괏값이 거짓이면 반환값2를 반환합니다.

삼항 연산자는 짧은 if / else 문 대신 사용할 수 있으며, 코드를 간결하게 만들어 줍니다.
*/
{
  let x = 3, y = 5;
  let result = (x > y) ? x : y;
  console.log(`둘 중 더 큰 수는 ${result} 입니다.`)
  //둘 중 더 큰 수는 5 입니다.
}

/*
🍐 쉼표 연산자
쉼표 연산자를 for 문에서 사용하면, 루프마다 여러 변수를 동시에 갱신할 수 있습니다.
*/
// 루프마다 i의 값은 1씩 증가하고, 동시에 j의 값은 1씩 감소함.
for (var i = 0, j = 9; i <= j; i++, j--) {
  console.log(`i의 값은 ${i}이고, j의 값은  ${j}입니다.`);
}

/*
🍐 delete 연산자
delete 연산자는 피연산자인 객체, 객체의 프로퍼티(property) 또는 배열의 요소(element) 등을 삭제해 줍니다.

피연산자가 성공적으로 삭제되었을 경우에는 참(true)을 반환하고, 삭제하지 못했을 경우에는 거짓(false)을 반환합니다.

이 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽입니다.
*/
let arr = [1, 2, 3];// 배열 생성
delete arr[2];// 배열의 원소 중 인덱스가 2인 요소를 삭제함.
console.log(arr); // [1, 2, ]
// 배열에 빈자리가 생긴 것으로 undefined 값으로 직접 설정된 것은 아님.
console.log(arr[2]);
// 배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.
console.log(arr.length);

/*
🍐 typeof 연산자
typeof 연산자는 피연산자의 타입을 반환합니다.
이 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽입니다.

자바스크립트에서 많이 사용하는 값과 그 값에 대한 typeof 연산자의 결괏값은 다음과 같습니다.

값	          typeof 연산자의 결괏값
숫자, NaN	            "number"
문자열	              "string"
true, false	          "boolean"
null	                "object"
undefined	            "undefined"
함수	                "function"
함수가 아닌 객체	     "object"
*/
console.log(typeof "문자열");   // string
console.log(typeof 10);     // number
console.log(typeof NaN);     // number
console.log(typeof false);     // boolean
console.log(typeof undefined);  // undefined
console.log(typeof new Date()); // object
console.log(typeof null);     // object

/*
🍐 instanceof 연산자
instanceof 연산자는 피연산자인 객체가 특정 객체의 인스턴스인지 아닌지를 확인해 줍니다.

피연산자가 특정 객체의 인스턴스이면 참(true)을 반환하고, 특정 객체의 인스턴스가 아니면 거짓(false)을 반환합니다.
이 연산자는 두 개의 피연산자를 가지는 이항 연산자이며, 피연산자들의 결합 방향은 왼쪽에서 오른쪽입니다.
*/
let str = new String("이것은 문자열입니다.");

console.log(str instanceof Object);  // true
console.log(str instanceof String);  // true
console.log(str instanceof Array);   // false
console.log(str instanceof Number);  // false
console.log(str instanceof Boolean); // false
// 인스턴스와 객체에 대한 더 자세한 사항은 자바스크립트 객체의 개념 수업에서 확인할 수 있습니다.
// https://www.tcpschool.com/javascript/js_object_concept

/*
🍐 void 연산자
void 연산자는 피연산자로 어떤 타입의 값이 오던지 상관없이 언제나 undefined 값만을 반환합니다.

이 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽입니다.

아래 예제처럼 void 연산자는 정의되지 않은 원시 타입의 값을 얻기 위해 void(0)과 같은 형태로 종종 사용됩니다. 
<a href="javascript:void(0)">이 링크는 동작하지 않습니다.</a>
<a href="javascript:void(document.body.style.backgroundColor='yellow')">
  이 링크도 동작하지 않지만, HTML 문서의 배경색을 바꿔줍니다.
</a>
*/
