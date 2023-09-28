// 타입 변환
/*
자바스크립트는 타입 검사가 매우 유연한 언어입니다.
자바스크립트의 변수는 타입이 정해져 있지 않으며, 같은 변수에 다른 타입의 값을 다시 대입할 수도 있습니다.
*/
let num = 20; // Number 타입의 20
num = "이십"; // String 타입의 "이십"
// let num;      // 한 변수에 여러 번 대입할 수는 있지만, 변수의 재선언은 할 수 없습니다. 재선언문은 error를 유발할 수 있습니다.
// Uncaught SyntaxError: Identifier 'num' has already been declared (at //포착되지 않은 구문 오류: 'num' 식별자가 이미 선언되었습니다
// 라는 에러가 출력됨을 확인할 수 있음.



// 묵시적 타입 변환(implicit type conversion)
/*
자바스크립트는 특정 타입의 값을 기대하는 곳에 다른 타입의 값이 오면, 자동으로 타입을 변환하여 사용합니다.
즉, 문자열 값이 오길 기대하는 곳에 숫자가 오더라도 자바스크립트는 알아서 숫자를 문자열로 변환하여 사용합니다.
*/
console.log(10 + "문자열"); // 10문자열 문자열 연결을 위해 숫자 10이 문자열로 변환됨.
console.log("3" * "5"); // 15 곱셈 연산을 위해 두 문자열이 모두 숫자로 변환됨.
console.log(1 - "문자열"); // NaN
/*
위의 세 번째 예제에서 뺄셈 연산을 위해 문자열이 숫자로 변환되어야 하나, 해당 문자열은 두 번째 예제의 문자열과는 달리 숫자로 변환될 수 없는 문자열입니다.
따라서 의미에 맞게 자동으로 타입을 변환할 수 없으므로, 자바스크립트는 NaN 값을 반환합니다.

**NaN은 Not a Number의 축약형으로, 정의되지 않은 값이나 표현할 수 없는 값이라는 의미를 가집니다.
이러한 NaN은 Number 타입의 값으로 0을 0으로 나누거나, 숫자로 변환할 수 없는 피연산자로 산술 연산을 시도하는 경우에 반환되는 읽기 전용 값입니다.
*/


/*
명시적 타입 변환(explicit type conversion)
자바스크립트에서는 묵시적 타입 변환을 많이 사용하지만, 명시적으로 타입을 변환할 방법도 제공합니다.
명시적 타입 변환을 위해 자바스크립트가 제공하는 전역 함수는 다음과 같습니다.

1. Number()
2. String()
3. Boolean()
4. Object()
5. parseInt()
6. parseFloat()
*/

console.log(Number("10")); // 숫자 10
console.log(String(true)); // 문자열 "true"
console.log(Boolean(0));   // 불리언 false
console.log(Object(3));    // new Number(3)와 동일한 결과로 숫자 3


/*
숫자를 문자열로 변환
숫자를 문자열로 변환하는 가장 간단한 방법은 String() 함수를 사용하는 것입니다.
또한, null과 undefined를 제외한 모든 타입의 값이 가지고 있는 toString() 메소드를 사용할 수도 있습니다.

숫자(Number) 객체는 숫자를 문자열로 변환하는 다음과 같은 메소드를 별도로 제공합니다.

1. toExponential()
2. toFixed()
3. toPrecision()


메소드	         |                  설명
toExponential()	  정수 부분은 1자리, 소수 부분은 입력받은    
                  수만큼 e 표기법을 사용하여 숫자를 문자열로 변환함.
toFixed()	        소수 부분을 입력받은 수만큼 사용하여 숫자를 
                  문자열로 변환함.
toPrecision()     입력받은 수만큼 유효 자릿수를 사용하여 숫자를 
                  문자열로 변환함.

메소드(method)란 객체의 프로퍼티 값으로 함수를 갖는 프로퍼티를 의미합니다.
메소드에 대한 더 자세한 사항은 자바스크립트 객체의 개념 수업에서 확인할 수 있습니다.
https://www.tcpschool.com/javascript/js_object_concept

숫자 객체의 메소드에 대한 더 자세한 사항은 자바스크립트 Number 메소드 수업에서 확인할 수 있습니다.
https://www.tcpschool.com/javascript/js_standard_numberMethod
*/

//불리언 값을 문자열로 변환
// 불리언 값을 문자열로 변환하는 방법에는 String() 함수와 toString() 메소드를 사용하는 방법이 있습니다.
console.log(String(true));     // 문자열 "true"
console.log(false.toString()); // 문자열 "false"

/*
날짜를 문자열이나 숫자로 변환
날짜를 문자열로 변환하는 방법에는 String() 함수와 toString() 메소드를 사용하는 방법이 있습니다.

자바스크립트에서 날짜(Date) 객체는 문자열과 숫자로 모두 변환할 수 있는 유일한 타입입니다.
날짜(Date) 객체는 날짜를 숫자로 변환하는 다음과 같은 메소드를 별도로 제공합니다.

1. getDate()
2. getDay()
3. getFullYear()
4. getMonth()
5. getTime()
6. getHours()
7. getMinutes()
8. getSeconds()
9. getMilliseconds()

메소드	                          설명
getDate()	        날짜 중 일자를 숫자로 반환함. (1 ~ 31)
getDay()	        날짜 중 요일을 숫자로 반환함.
                   (일요일 : 0 ~ 토요일 : 6)
getFullYear()	    날짜 중 연도를 4자리 숫자로 반환함. (yyyy년)
getMonth()	      날짜 중 월을 숫자로 반환함. 
                  (1월 : 0 ~ 12월 : 11)
getTime()	        1970년 1월 1일부터 현재까지의 시간을 밀리초
                  (millisecond) 단위의 숫자로 반환함.
getHours()	      시간 중 시를 숫자로 반환함. (0 ~ 23)
getMinutes()	    시간 중 분을 숫자로 반환함. (0 ~ 59)
getSeconds()	    시간 중 초를 숫자로 반환함. (0 ~ 59)
getMilliseconds()	시간 중 초를 밀리초(millisecond) 단위의 숫자로 반환함. (0 ~ 999)
*/
console.log(String(Date()));        // Mon May 16 2016 19:35:25 GMT+0900

console.log(Date().toString());     // Mon May 16 2016 19:35:25 GMT+0900

let date = new Date(); // Date 객체 생성
console.log(date.getFullYear()); // 2016
console.log(date.getTime()); // 1463394925632 -> 1970년 1월 1일부터 현재까지의 시간을 밀리초 단위의 숫자로 반환함.

// 날짜 객체의 메소드에 대한 더 자세한 사항은 자바스크립트 Date 메소드 수업에서 확인할 수 있습니다.
// https://www.tcpschool.com/javascript/js_standard_dateMethod

// 문자열을 숫자로 변환
/*
문자열을 숫자로 변환하는 가장 간단한 방법은 Number() 함수를 사용하는 것입니다.
자바스크립트는 문자열을 숫자로 변환해 주는 두 개의 전역 함수를 별도로 제공합니다.

1. parseInt()
2. parseFloat()

함수	                          설명
parseInt()	  문자열을 파싱하여 특정 진법의 정수를 반환함.
parseFloat()	문자열을 파싱하여 부동 소수점 수를 반환함.

두 전역 함수에 대한 더 자세한 사항은 자바스크립트 Number 메소드 수업에서 확인할 수 있습니다.
https://www.tcpschool.com/javascript/js_standard_numberMethod
*/


// 불리언 값을 숫자로 변환
// 불리언 값을 숫자로 변환하는 방법에는 Number() 함수를 사용하는 방법이 있습니다.
console.log(Number(true));  // 숫자 1
console.log(Number(false)); // 숫자 0