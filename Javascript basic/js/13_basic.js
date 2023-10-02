/*
배열의 활용

🍐 희소 배열
희소 배열이란 배열에 속한 요소의 위치가 연속적이지 않은 배열을 의미합니다.
따라서 희소 배열의 경우 배열의 length 프로퍼티 값보다 배열 요소의 개수가 언제나 적습니다.
*/
let arr = new Array(); // 빈 배열 객체 생성
arr[9] = "문자열 삽입"; // 배열 arr의 10번째 위치에 문자열을 삽입
console.log(arr); // (10) [empty × 9, '문자열 삽입']
console.log(arr.length); // 10

/*
🍐 다차원 배열
다차원 배열이란 배열 요소가 또 다른 배열인 배열을 의미합니다.
- 지금까지 우리가 살펴본 배열은 1차원 배열입니다.
- 2차원 배열이란 배열 요소가 1차원 배열인 배열을 의미합니다. 
- 3차원 배열이란 배열 요소가 2차원 배열인 배열을 의미합니다.

2차원 배열을 이해하면 그 이상의 배열 또한 같은 방식으로 이해할 수 있습니다.
*/
{
  let arr = new Array(3);      // 3개의 요소를 가지는 배열을 생성함.
  for (let row = 0; row < 3; row++) {
    // // console.log(arr) //3개의 undefined
    // console.log(arr[row]) //3개의 undefined
    arr[row] = new Array(4); // 각각의 요소마다 또 다시 4개의 요소를 가지는 배열을 생성
    // console.log(arr[row]) //(4) [empty × 4] 
    for (let column = 0; column < 4; column++) {
      arr[row][column] = ` ${row}, ${column} `; // 각각의 배열 요소를 생성
      console.log(`각 배열 요소에 접근: ${arr[row][column]}`);// 각 배열 요소에 접근함
      // console.log(`row: ${arr[row]}`);
      // console.log(`column: ${arr[column]}`);
    }
  }
  /*
각 배열 요소에 접근:  0, 0 
각 배열 요소에 접근:  0, 1 
각 배열 요소에 접근:  0, 2 
각 배열 요소에 접근:  0, 3 
각 배열 요소에 접근:  1, 0 
각 배열 요소에 접근:  1, 1 
각 배열 요소에 접근:  1, 2 
각 배열 요소에 접근:  1, 3 
각 배열 요소에 접근:  2, 0 
각 배열 요소에 접근:  2, 1 
각 배열 요소에 접근:  2, 2 
각 배열 요소에 접근:  2, 3 
  */
  // 2차원 배열의 배열 요소는 [] 연산자를 두 번 사용하여 참조할 수 있습니다.
}

/*
🍐 연관 배열(associative array)
자바스크립트에서 배열의 인덱스에는 0을 포함한 양의 정수만을 사용할 수 있습니다.
이렇게 숫자로 된 인덱스 대신에 문자열로 된 키(key)를 사용하는 배열을 연관 배열(associative array)이라고 합니다.

대부분의 프로그래밍 언어가 지원하는 연관 배열을 자바스크립트는 별도로 제공하지는 않습니다.
대신에 인덱스로 문자열을 사용하여 연관 배열처럼 사용할 수 있는 객체(object)를 만들 수 있습니다.

하지만 이렇게 생성된 배열은 자바스크립트 내부적으로 Array 객체에서 기본 객체로 재선언됩니다.
따라서 기존에 사용할 수 있었던 모든 Array 메소드와 프로퍼티가 정확하지 않은 결괏값을 반환하게 될 것입니다.
*/
{
  let arr = []; // 비어있는 배열을 생성
  arr["하나"] = 1; // 숫자 인덱스 대신에 문자열을 인덱스로 배열 요소를 추가함
  arr["참"] = true;
  arr["자바스크립트"] = "Javascript";
  console.log(arr["참"]); // 문자열을 인덱스로 배열 요소에 접근할 수 있습니다. // true
  console.log(arr.length); // 연관 배열은 Array객체가 아니므로 length프로퍼티의 값은 0입니다. // 0
  console.log(arr[0]); // undefined
  /*
  
이처럼 자바스크립트에서 연관 배열은 Array 객체가 아닌 기본 객체이므로, 정확히 말하면 배열이 아닙니다.
ECMAScript 6부터는 이러한 불편함을 해결하기 위해 새로운 데이터 구조인 Map 객체를 별도로 제공하고 있습니다.*/
}

/*
🍐 문자열을 배열처럼 접근하기
자바스크립트에서 문자열은 변하지 않는 값이므로, 읽기 전용 배열로서 다룰 수 있습니다.

따라서 배열처럼 [] 연산자를 사용하여 문자열을 구성하는 각 문자에 바로 접근할 수 있습니다.
또한, Array 객체가 제공하는 모든 범용 메소드도 사용할 수 있습니다.
문자열의 각 문자는 String 객체에서 제공하는 charAt() 메소드를 사용해도 접근할 수 있습니다.
*/
{
  let str1 = "자바스크립트" // 문자열 생성
  console.log(str1.charAt(3)); //크
  console.log(str1[3]); //크
  /*
하지만 이렇게 문자열을 배열처럼 접근하는 방법은 인터넷 익스플로러에서는 동작하지 않습니다.
또한, 문자열을 배열처럼 착각하게 하여, 다음과 같은 실수를 유발할 수도 있습니다.
  */

  let str2 = "자바스크립트" // 문자열 생성
  str2[0] = ""; // 자바스크립트의 문자열은 읽기 전용이므로, 이 문장은 오류를 발생시킵니다. 

  //따라서 문자열을 바로 배열처럼 사용하지 말고, split() 메소드 등을 이용해 먼저 배열로 변환한 후 사용하는 것이 좋습니다.
  // split() 메소드에 대한 더 자세한 사항은 자바스크립트 String 메소드 수업에서 확인할 수 있습니다.
  // https://www.tcpschool.com/javascript/js_standard_stringMethod
}

/*
🍐 자바스크립트에서 배열 여부 확인
자바스크립트에서는 배열이라는 타입(type)을 별도로 제공하지 않습니다.
자바스크립트 배열은 객체(object) 타입이 되며, typeof 연산자를 사용하면 'object'를 반환합니다.
*/
{
  let arr = [1, true, "JavaScript"]; // 배열 생성

  console.log(typeof arr); // object
  /*
  따라서 자바스크립트에서는 해당 변수가 배열인지 여부를 확인할 수 있도록 다음과 같은 방법들을 제공하고 있습니다.
  
  1. Array.isArray() 메소드
  2. instanceof 연산자
  3. constructor 프로퍼티
  
  ECMAScript 5부터는 Array 클래스에 isArray()라는 배열 여부를 확인할 수 있는 메소드를 추가하였습니다.
  */
  // 🍌 Array.isArray() 메소드를 사용하여 배열 여부 확인하기
  console.log(Array.isArray(arr)); // true
  console.log(Array.isArray(arr)); // true
  console.log(Array.isArray("문자열")); // false

  /*
  하지만 구형 버전의 브라우저는 ECMAScript 5를 지원하지 않으므로, Array.isArray() 메소드가 정상적으로 동작하지 않을 수도 있습니다.
  따라서 이때는 instanceof 연산자를 사용하여 해당 변수가 Array 객체인지를 판단하여 배열 여부를 확인할 수 있습니다.
  */
  // 🍌 instanceof 연산자를 사용하여 배열 여부 확인하기
  console.log(arr instanceof Array); //true
  console.log(123 instanceof Array); // false
}
  
  /*
또한, Array 객체의 constructor 프로퍼티를 사용하여 배열 여부를 확인할 수도 있습니다.
자바스크립트 배열에 대해 constructor 프로퍼티는 다음과 같은 값을 반환합니다.
🍌 constructor 프로퍼티를 사용하여 배열 여부 확인하기
문법: function Array() {[native code]}
따라서 다음 예제와 같이 toString() 메소드와 indexOf() 메소드를 함께 사용하면 해당 변수의 배열 여부를 확인할 수 있습니다.
 */
{
  function isArray(a) {
  return a.constructor.toString().indexOf("Array") > -1;
}
let arr = [1, true, "JavaScript"];          // 배열 생성
console.log(arr.constructor); // constructor 프로퍼티의 값 출력
//ƒ Array() { [native code] }

console.log(arr.constructor.toString()); //toString() 메소드를 사용하여 constructor 프로퍼티의 값을 문자열로 변환합니다.
// function Array() {[native code]}

console.log(arr.constructor.toString().indexOf("Array")); // 9
//indexOf() 메소드를 사용하여 해당 문자열에서 "Array"라는 부분 문자열이 시작하는 인덱스를 구하고 있습니다.
// indexOf() 메소드는 인수로 전달받은 문자열을 해당 문자열에서 찾지 못하면, 언제나 -1을 반환합니다.

console.log(isArray(arr)) // true
//따라서 만약 변수 arr가 배열이라면 "Array"라는 부분 문자열을 언제나 포함하고 있을 것이므로, 결과는 언제나 true를 반환하게 됩니다.
}