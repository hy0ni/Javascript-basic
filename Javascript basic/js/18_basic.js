/*
🍐 미리 정의된 전역 함수(predefined functions)
자바스크립트는 사용자의 편의를 위해 다양한 기능의 여러 전역 함수를 미리 정의하여 제공합니다.
이러한 전역 함수는 자바스크립트의 어떤 타입의 객체에서도 바로 사용할 수 있습니다.
1. eval()
2. isFinite()
3. isNaN()
4. parseFloat()
5. parseInt()
6. decodeURI()
7. decodeURIComponent()
8. encodeURI()
9. encodeURIComponent()
10. Number()
11. String()
*/

/*
🍌 eval()
eval() 함수는 문자열로 표현된 자바스크립트 코드를 실행하는 함수입니다.
문법: eval("문자열");
*/
{
  let x = 10, y = 20;
  let a = eval("x + y"); // 30
  let b = eval("y * 3"); // 60

  console.log(`${a}, ${b}`);
}
// -----------------------------------------------------------

/*
🍌 isFinite()
isFinite() 함수는 전달된 값이 유한한 수인지를 검사하여 그 결과를 반환합니다.
만약 인수로 전달된 값이 숫자가 아니라면, 숫자로 변환하여 검사합니다.
문법: isFinite(검사할값);
*/
{
  console.log(isFinite(123));       // true
  console.log(isFinite(123e100));   // true
  console.log(isFinite(0));         // true
  console.log(isFinite(true));      // true
  console.log(isFinite(false));     // true
  console.log(isFinite(null));      // true
  console.log(isFinite("123"));     // true
  console.log(isFinite(""));        // true

  console.log(isFinite("문자열"));  // false
  console.log(isFinite(undefined)); // false
  console.log(isFinite(NaN));       // false
}
// -----------------------------------------------------------

/*
🍌 isNaN()
isNaN() 함수는 전달된 값이 NaN인지를 검사하여 그 결과를 반환합니다.
만약 인수로 전달된 값이 숫자가 아니라면, 숫자로 강제 변환하여 검사합니다.
전달된 값이 숫자인지 아닌지를 확인하기 위하여 typeof 연산자를 대신 사용할 수도 있습니다.
문법: isNaN(검사할값);
*/
{
  console.log(isNaN(123));       // false
  console.log(isNaN(123e100));   // false
  console.log(isNaN(0));         // false
  console.log(isNaN(true));      // false
  console.log(isNaN(false));     // false
  console.log(isNaN(null));      // false
  console.log(isNaN("123"));     // false
  console.log(isNaN(""));        // false

  console.log(isNaN("문자열"));  // true
  console.log(isNaN(undefined)); // true
  console.log(isNaN(NaN));       // true
  //이 함수는 숫자로의 강제 변환에 따라 예상치 못한 결과를 얻을 수 있으므로 ECMAScript 6부터는 Number.isNaN() 메소드의 사용을 권장하고 있습니다.
}
// -----------------------------------------------------------

/*
🍌 parseFloat()
parseFloat() 함수는 문자열을 파싱하여 부동 소수점 수(floating point number)로 반환합니다.
문법: parseFloat("문자열");
*/
{
  console.log(parseFloat("123"));        // 123
  console.log(parseFloat("123.000"));    // 123
  console.log(parseFloat("123.456"));    // 123.456
  console.log(parseFloat("12 34 56"));   // 12
  console.log(parseFloat(" 123 "));      // 123
  console.log(parseFloat("123 초콜릿")); // 123
  console.log(parseFloat("초콜릿 123")); // NaN
}
// -----------------------------------------------------------

/*
🍌 parseInt()
parseInt() 함수는 문자열을 파싱하여 정수로 반환합니다.
문법: parseInt("문자열");
*/
console.log(parseInt("123"));        // 123
console.log(parseInt("123.000"));    // 123
console.log(parseInt("123.456"));    // 123
console.log(parseInt("12 34 56"));   // 12
console.log(parseInt(" 123 "));      // 123
console.log(parseInt("123 초콜릿")); // 123
console.log(parseInt("초콜릿 123")); // NaN

console.log(parseInt("10", 10));     // 10
console.log(parseInt("10", 8));      // 8
console.log(parseInt("10", 16));     // 16
console.log(parseInt("0x10"));       // 16
/*
위의 예제처럼 parseInt() 함수에 두 번째 인수로 특정 진법을 전달하면, 해당 진법에 맞는 정수로 반환합니다.
또한, 전달받은 문자열의 시작이 "0x"로 시작하면, parseInt() 함수는 해당 문자열을 16진수로 인식합니다.
*/
// -----------------------------------------------------------

/*
🍌 encodeURI()와 encodeURIComponent()
encodeURI() 함수는 URl에서 주소를 표시하는 특수문자를 제외하고, 모든 문자를 이스케이프 시퀀스(escape sequences) 처리하여 부호화합니다.
하지만 encodeURIComponent() 함수는 URI에서 encodeURI() 함수에서 부호화하지 않은 모든 문자까지 포함하여 이스케이프 시퀀스 처리합니다.
문법: encodeURI(부호화할URI);
      encodeURIComponent(부호화할URI);
*/
{
  let uri = "http://google.com/search.php?name=효니&city=경기";

  let enc1 = encodeURI(uri);
  let enc2 = encodeURIComponent(uri);
  console.log(`enc1: ${enc1} 
enc2: ${enc2}`);
}
// -----------------------------------------------------------

/*
🍌 decodeURI()와 decodeURIComponent()
decodeURI() 함수는 encodeURI() 함수나 다른 방법으로 만들어진 URI(Uniform Resource Identifier)를 해독합니다.
decodeURIComponent() 함수는 encodeURIComponent() 함수나 다른 방법으로 만들어진 URI 컴포넌트를 해독합니다.
문법:decodeURI(해독할URI);
    decodeURIComponent(해독할URI);
*/
{
  let uri = "http://google.com/search.php?name=홍길동&city=서울";

  let enc1 = encodeURI(uri);
  let enc2 = encodeURIComponent(uri);

  console.log(`enc1: ${enc1} 
  enc2: ${enc2}`);

  let dec1 = decodeURI(enc1);
  let dec2 = decodeURIComponent(enc2);

  console.log(`enc1: ${dec1} 
  enc2: ${dec2}`);
}
// -----------------------------------------------------------

// -----------------------------------------------------------
/*
🍌 Number()
Number() 함수는 전달받은 객체의 값을 숫자로 반환합니다.
문법: Number(객체);
*/
{
  console.log(Number("123"));        // 123
  console.log(Number("123.000"));    // 123
  console.log(Number("123.456"));    // 123.456
  console.log(Number("12 34 56"));   // NaN
  console.log(Number("123 초콜릿")); // NaN

  console.log(Number(true));         // 1
  console.log(Number(false));        // 0
  console.log(Number(new Date()));   // 현재 날짜에 해당하는 숫자를 반환함.
  console.log(Number(null));         // 0
}
// -----------------------------------------------------------
// console.clear();

/*
🍌 String()
String() 함수는 전달받은 객체의 값을 문자열로 반환합니다.
문법: String(객체);
*/
{
  console.log(String(123));        // 123
  console.log(String(123.456));    // 123.456
  console.log(String("123"));      // 123
  console.log(String(new Date())); // 현재 날짜에 해당하는 문자열을 반환함.
  console.log(String(null));       // null

  console.log(String(true));       // true
  console.log(String(false));      // false
  console.log(String(Boolean(1))); // true
  console.log(String(Boolean(0))); // false
}
// -----------------------------------------------------------