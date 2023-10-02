/*
🍐 매개변수와 인수

🍌 매개변수(parameter)
자바스크립트에서는 함수를 정의할 때는 매개변수의 타입을 따로 명시하지 않습니다.

함수를 호출할 때에도 인수(argument)로 전달된 값에 대해 어떠한 타입 검사도 하지 않습니다.

함수를 호출할 때 함수의 정의보다 적은 수의 인수가 전달되더라도, 다른 언어와는 달리 오류를 발생시키지 않습니다.

이 같은 경우 자바스크립트는 전달되지 않은 나머지 매개변수에 자동으로 undefined 값을 설정합니다.

🥨 매개변수(parameter)란 함수의 정의에서 전달받은 인수를 함수 내부로 전달하기 위해 사용하는 변수를 의미합니다.

🥨 인수(argument)란 함수가 호출될 때 함수로 값을 전달해주는 값을 말합니다.
*/

//3개의 매개변수를 가지는 함수에 각각 다른 수의 인수를 전달하는 예제입니다.
function addNum(x, y, z) { // x, y, z라는 3개의 매개변수를 가지는 함수 addNum()을 정의함.
  return x + y + z;
}
console.log(addNum(1, 2, 3)); // 인수로 1, 2, 3을 전달하여 함수를 호출함. -> 6
console.log(addNum(1, 2));    // 인수로 1, 2을 전달하여 함수를 호출함. -> NaN
console.log(addNum(1));       // 인수로 1을 전달하여 함수를 호출함. -> NaN
console.log(addNum());        // 인수로 아무것도 전달하지 않고 함수를 호출함. -> NaN
/*
addNum() 함수를 호출할 때 인수가 세 개보다 적게 전달되면, 
계산할 수 없다는 의미인 NaN을 반환합니다.
그 이유는 전달되지 않은 나머지 값이 자동으로 undefined 값으로 설정되어, 산술 연산을 수행할 수 없기 때문입니다.

다음 예제처럼 하면 NaN을 반환하지 않고 전달된 인수만을 가지고 정상적으로 계산하는 함수를 작성할 수 있습니다.
*/
function addNum(x, y, z) {
  if (x === undefined) // 함수 호출시 x에 해당하는 인수가 전달되지 않은 경우
    x = 0;          // 변수 x의 값을 undefined에서 0으로 변경함.

  if (y === undefined) // 함수 호출시 y에 해당하는 인수가 전달되지 않은 경우
    y = 0;          // 변수 y의 값을 undefined에서 0으로 변경함.

  if (z === undefined) // 함수 호출시 z에 해당하는 인수가 전달되지 않은 경우
    z = 0;          // 변수 z의 값을 undefined에서 0으로 변경함.

  return x + y + z;

}
console.log(addNum(1, 2, 3)); // 6
console.log(addNum(1, 2));    // 3
console.log(addNum(1));       // 1
console.log(addNum());        // 0


/*
🍌 arguments 객체
만약 함수의 정의보다 더 많은 수의 인수가 전달되면, 매개변수에 대입되지 못한 인수들은 참조할 방법이 없게 됩니다.
하지만 arguments 객체를 이용하면, 함수로 전달된 인수의 총 개수를 확인하거나, 각각의 인수에도 바로 접근할 수 있습니다.

arguments 객체는 함수가 호출될 때 전달된 인수를 배열의 형태로 저장하고 있습니다.

첫 번째 인수는 arguments[0]에 저장되며, 다음 인수는 arguments[1]에 저장됩니다.
또한, 인수의 총 개수는 arguments 객체의 length 프로퍼티에 저장됩니다.

다음 예제의 addNum() 함수는 전달받는 인수의 개수에 상관없이 언제나 정상적인 계산을 수행합니다.
*/
function addNum() {
  let sum = 0; // 합을 저장할 변수 sum을 선언함.
  for(let i = 0; i < arguments.length; i++) { // 전달받은 인수의 총 수만큼 반복함.
      sum += arguments[i]; // 전달받은 각각의 인수를 sum에 더함.
  }
  return sum;
}

console.log(addNum(1, 2, 3)); // 6
console.log(addNum(1, 2));    // 3
console.log(addNum(1));       // 1
console.log(addNum());        // 0
console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

//*arguments 객체는 배열과 비슷할 뿐, 실제로 Array 객체는 아닙니다.
// 숫자로 된 인덱스와 length 프로퍼티만을 가지고 있을 뿐, 모든 것을 배열처럼 다룰 수는 없습니다.

/*
🍌 디폴트 매개변수와 나머지 매개변수
ECMAScript 6부터 새롭게 정의된 매개변수는 다음과 같습니다.
1. 디폴트 매개변수(default parameter)
2. 나머지 매개변수(rest parameter)
*/


/*
🍍 디폴트 매개변수(default parameter)
디폴트 매개변수란 함수를 호출할 때 명시된 인수를 전달하지 않았을 경우에 사용하게 될 기본값을 의미합니다.

자바스크립트에서 매개변수의 기본값은 undefined 값으로 설정되어 있습니다.
하지만 디폴트 매개변수를 이용하면 이러한 매개변수의 기본값을 바꿀 수 있습니다.
 */
function mul(a, b) {
  // 인수가 한 개만 전달되었을 때 나머지 매개변수의 값을 undefined 값이 아닌 1로 설정함.
  b = (typeof b !== 'undefined')  ? b : 1;
  return a * b;
}
console.log(mul(3, 4)); // 12
console.log(mul(3));    // 3



/*
🍍나머지 매개변수(rest parameter)
나머지 매개변수는 생략 접두사(...)를 사용하여 특정 위치의 인수부터 마지막 인수까지를 한 번에 지정할 수 있습니다.

다음 예제는 첫 번째 인수에서 두 번째 인수부터 마지막 인수까지를 뺀 후 그 결과를 반환하는 예제입니다.
 */

function sub() {
  let firstNum = arguments[0];                  // 첫 번째 인수에서
  for(let i = 0; i < arguments.length-1; i++) { // 두 번째부터 마지막 인수까지를
      firstNum -= arguments[i+1];               // 뺌.
  }

  return firstNum;

}

console.log(sub(10, 2, 3));    // 10 - 2 - 3 = 5
console.log(sub(10, 1, 5, 8)); // 10 - 1 - 5 - 8 = -4

// 나머지 매개변수를 이용하면 sub() 함수를 좀 더 직관적으로 정의할 수 있습니다.
// 첫 번째 인수를 변수 firstNum에 저장하고 나머지 인수들은 배열 restArgs에 저장함.

function sub(firstNum, ...restArgs) {
  for(let i = 0; i < restArgs.length; i++) {
      firstNum -= restArgs[i];
  }

  return firstNum;

}

console.log(sub(10, 2, 3));  // 10 - 2 - 3 = 5

console.log(sub(10, 1, 5, 8)); // 10 - 1 - 5 - 8 = -4

//*디폴트 매개변수와 나머지 매개변수는 익스플로러, 사파리, 오페라에서 지원하지 않습니다.