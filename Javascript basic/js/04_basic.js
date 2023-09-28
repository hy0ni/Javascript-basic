//변수
/*
변수의 선언과 초기화
변수(variable)란 데이터(data)를 저장할 수 있는 메모리 공간을 의미하며, 
포함된 값이 변경될 수 있습니다.(mutable data type).

자바스크립트에서는 let 키워드를 사용하여 변수를 선언합니다.
자바스크립트에서는 선언되지 않은 변수를 사용하려고 하거나 접근하려고 하면 오류가 발생합니다.
단, 선언되지 않은 변수를 초기화할 경우에는 자동으로 선언을 먼저 한 후 초기화를 진행합니다.
*/

let num1; // 변수 선언 //값을 포함하고 있지 않은 빈 컨테이너
// 변수 이름만 입력한 경우 undefined값을 반환하며 변수는 이 값(undefined)을 포함하게 됩니다.

num1 = 10; // 변수 초기화 //변수 이름 다음에 등호(=)와 그 뒤에 부여할 값을 입력합니다.

let num2 = 20; // 변수 선언과 동시에 초기화
// let 키워드를 이용해 num2 변수를 선언하고 숫자20 값을 num2변수에 할당하였습니다.

num1 = 30; //변수에 값이 할당되어 있어도 다른 값을 지정하여 해당 값을 업데이트할 수 있습니다. //변수의 재지정


// 쉼표(,) 연산자를 이용하여 여러 변수를 동시에 선언하거나 초기화할 수도 있습니다.
{
  let num1, num2; // 여러 변수 동시 선언
}
{
  let num1 = 1, num2 = 2; // 여러 변수 동시에 선언과 초기화 
  num1 = 10, num2 = 20; // 여러 변수 동시에 초기화
}

/*
// 변수의 타입과 초깃값
자바스크립트의 변수는 타입이 정해져 있지 않으며, 같은 변수에 다른 타입의 값을 다시 대입할 수도 있습니다.
이렇게 한 변수에 다른 타입의 값을 여러 번 대입할 수는 있지만, 한 번 선언된 변수를 재선언할 수는 없습니다.
*/
{
  let num = 10; // 변수의 선언과 함께 초기화
  num = [10, 20, 30]; // 배열 대입
  // let num; // 재선언문은 무시됩니다.
  // Uncaught SyntaxError: Identifier 'num' has already been declared (at 에러 발생

  //배열(array)이란 여러 값들로 이루어진 하나의 집합을 의미합니다.
  // 배열에 대한 더 자세한 사항은 자바스크립트 배열 수업에서 확인할 수 있습니다.
  // https://www.tcpschool.com/javascript/js_array_basic
}

// 자바스크립트에서 선언만 되고 초기화하지 않은 변수는 undefined 값을 갖습니다.
{
  let num;  // undefined
  num = 10; // 10
}


/*
자바스크립트에서 변수나 함수의 이름, 예약어 등을 작성하거나 사용할 때에는 대소문자를 정확히 구분해서 사용해야 합니다.

**변수의 이름 (변수 이름에 대한 규칙)
자바스크립트에서 변수는 이름을 가지고 식별하므로, 변수의 이름은 식별자(identifier)입니다.
자바스크립트는 대소문자를 구분합니다.


(JavaScript 구문에서 밑줄로 시작하는 것은 다른 의미가 있습니다.)
또한, 숫자와의 구분을 빠르게 하려고 숫자로는 시작할 수 없습니다.
이러한 변수의 이름은 대소문자를 구분하며, 자바스크립트 언어에서 예약된 키워드는 이름으로 사용할 수 없습니다.

1. 포함된 데이터를 쉽게 이해할 수 있게 변수 이름을 직관적으로 부여합니다.

2. 변수의 이름은 영문자(대소문자), 숫자, 언더스코어(_) 또는 달러($)로만 구성됩니다. 보통 변수의 이름은 영소문자로 시작합니다. (한글 X, 특수문자 X, 숫자로 시작 X)

3. 변수 이름의 시작 부분 언더바(_)를 사용하지 않습니다.
(JavaScript 구문에서 밑줄로 시작하는 것은 다른 의미가 있습니다.)


4. 안전한 명명법은 소위 "lower camel case"(소문자 낙타 문법)입니다.
여러 단어를 하나로 묶고 첫 단어의 시작은 소문자를 사용하며
그다음 단어의 시작은 대문자로 사용합니다.

5. 변수는 대소문자를 구분합니다. (myage와 myAge는 다른 변수입니다.)

6. JavaScript 예약어를 변수 이름으로 사용하면 안 됩니다.
(예약어란? var, function, let, for 등 JavaScript의 실제 구문을 구성하는 단어를 의미합니다.)

자바스크립트 문법
프로그램(program)이란?
프로그램은 컴퓨터가 실행할 수 있는 명령(instruction)으로 이루어집니다.
컴퓨터 프로그래밍에서 컴퓨터가 실행할 수 있는 명령들을 실행문(statement)이라고 합니다.
즉, 프로그램이란 특정 결과를 얻기 위해서 컴퓨터에 의해 실행되는 실행문의 집합이라고 할 수 있습니다.


자바스크립트의 실행문은 세미콜론(;)으로 구분됩니다.
**참고: JavaScript에서는 모든 코드 명령어가 세미콜론 (;)으로 끝나는 습관을 들이는 것이 좋습니다.
코드를 한 줄로 작성해도 올바르게 작동할지라도,
여러 줄의 코드를 함께 작성하는 경우에는 error의 위험이 있습니다.
*/


/*
리터럴(literal)
리터럴은 직접 표현되는 값 그 자체를 의미합니다.
*/
12            // 숫자 리터럴
"JavaScript"  // 문자열 리터럴
'안녕하세요'  // 문자열 리터럴
true          // 불리언 리터럴

/*
식별자(identifier)
식별자는 변수나 함수의 이름을 작성할 때 사용하는 이름을 의미합니다.

자바스크립트에서 식별자는 영문자(대소문자), 숫자, 언더스코어(_) 또는 달러($)만을 사용할 수 있습니다.
(자바스크립트에서 식별자는 숫자와 식별자의 구별을 빠르게 할 수 있도록 숫자로는 시작할 수 없습니다.)
(자바스크립트는 유니코드(unicode) 문자셋을 사용합니다.)
*/

/*
식별자 작성 방식
자바스크립트에서는 식별자를 작성할 때 다음과 같은 작성 방식을 사용할 수 있습니다.
** 자바스크립트에서는 식별자를 작성할 때 관행적으로 Camel Case 방식을 많이 사용합니다.
** 자바스크립트에서 하이픈(-)은 뺄셈을 위해 예약된 키워드이므로, 식별자를 작성할 때는 사용할 수 없습니다.

1. Camel Case (카멜 케이스 표기번)
카멜 케이스란 낙타의 쌍봉과 같은 변수 식별자 장석 방식으로, 
여러 단어를 하나로 묶고 첫 단어의 시작은 소문자를 사용하며
그다음 단어의 시작은 대문자로 사용합니다.
ex) myAddressNumber

2.Snake Case (스네이크 케이스) or Underscore Case (언더스코어 케이스)
이 표기법은 식별자를 이루는 단어들을 소문자로만 작성하고, 그 단어들은 언더스코어(_)로 연결하는 방식입니다.

식별자를 이루는 단어들을 소문자로도 작성하지만, 모든 문자를 대문자로 나타내는 방식도 자주 사용되며 주로 상수 표현 시에 사용된다는 특징이 있습니다.
ex) 
const my_address_number= 1234;  
const MY_ADDRESS_NUMBER = 1234; 


3. Pascal Case (파스칼 케이스 표기법)
카멜 케이스와 유사한 식별자 선언 방식이지만, 변수명을 선언하고자 하는 단어의 첫 문자들을 대문자로 표현해야 합니다.
ex) MyAddressNumber

4. Kebab Case (케밥 케이스 표기법)
밥 케이스는 단어 사이를 대시(-)를 이용하여 구분합니다.
주로 스프링의 yml파일, url 주소 등에 사용이 됩니다.
ex) let my-address-number = "url 주소";
*/


/*
키워드(keyword)
자바스크립트에서는 몇몇 단어들을 특별한 용도로 사용하기 위해 미리 예약하고 있습니다.

이렇게 미리 예약된 단어들을 키워드(keyword) 또는 예약어(reserved word)라고 합니다.

이러한 키워드들은 프로그램 내에서 식별자로 사용할 수 없습니다.
*/
let firstVar = 10; // let은 변수의 정의를 위해 예약된 키워드입니다.
function myFirstFunc() {  // function은 함수의 정의를 위해 예약된 키워드입니다.
    let secondVar = 20; // let은 변수의 정의를 위해 예약된 키워드입니다.
}

/*
주석(comment)
주석(comment)이란 코드 내에 삽입된 일종의 설명문입니다.

주석은 작성자나 다른 개발자가 나중에 코드를 수정할 때 참고할 수 있으며, 웹 페이지 개발 시 디버깅에도 사용됩니다.

이러한 주석은 자바스크립트 코드의 어느 부분에라도 작성할 수 있으며, 웹 브라우저의 동작에는 전혀 영향을 미치지 않습니다.

자바스크립트 주석은 두 가지 형식을 지원합니다.
1. 한 줄 주석
2. 여러 줄 주석
여러 줄 주석은 절대로 중첩해서 사용해서는 안 됩니다.
*/

// 한줄 주석
/* 여러 줄 주석 */