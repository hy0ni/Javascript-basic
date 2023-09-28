/*
🍐 조건문
제어문(control flow statements)
프로그램의 순차적인 흐름을 제어해야 할 때 사용하는 실행문을 제어문이라고 합니다.
이러한 제어문에는 조건문, 반복문 등이 포함됩니다.

조건문(conditional statements)
조건문이란 프로그램 내에서 주어진 표현식의 결과에 따라 별도의 명령을 수행하도록 제어하는 실행문입니다.

조건문 중에서 가장 기본이 되는 실행문은 if 문입니다.

자바스크립트에서 사용할 수 있는 조건문의 종류

1. if 문
2. if / else 문
3. if / else if / else 문
4. switch 문
*/

/*
🍌 if 문
if 문은 표현식의 결과가 참(true)이면 주어진 실행문을 실행하며,
거짓(false)이면 아무것도 실행하지 않습니다.

if (표현식) {
    표현식의 결과가 참일 때 실행하고자 하는 실행문;
}
*/
{ // if문 예제)
  let x = 10, y = 20;
  if (x == y) {
    console.log('x와 y는 같습니다.');
  }
  // if문에서 실행될 실행문이 한 줄 뿐이라면 중괄호({})를 생략할 수 있습니다.
  if (x == y) console.log('x와 y는 같습니다.');
  // **참고:  if 문과 같은 제어문의 표현식에서 대입문(=)을 사용하는 것은 바람직하지 못합니다.
}
/* 
🍌 else 문
if 문과 같이 사용할 수 있는 else 문은 
if 문의 표현식 결과가 거짓(false)일 때 주어진 실행문을 실행합니다.
if (표현식) {
    표현식의 결과가 참일 때 실행하고자 하는 실행문;
} else {
    표현식의 결과가 거짓일 때 실행하고자 하는 실행문;
}
*/
{//elas문 예제)
  let x = 10, y = 20;
  if (x == y) {
    console.log('x와 y는 같습니다.');
  } else {
    if (x < y)
      console.log("x가 y보다 작습니다.");
    else // 실행될 실행문이 한 줄뿐이라면 중괄호({})를 생략할 수 있음.
      console.log("x가 y보다 큽니다.");
  }
  //result => x가 y보다 작습니다.
  //else 문에서도 실행될 실행문이 한 줄뿐이라면 중괄호({})를 생략할 수 있습니다.
}
/*
🍌 else if 문
else if 문은 if 문처럼 표현식을 설정할 수 있으므로, 
중첩된 if 문을 좀 더 간결하게 표현할 수 있습니다.
하나의 조건문 안에서 if 문과 else 문은 단 한 번만 사용될 수 있습니다.
하지만 else if 문은 여러 번 사용되어 다양한 조건을 설정할 수 있습니다.
if (표현식1) {
    표현식1의 결과가 참일 때 실행하고자 하는 실행문;
} else if (표현식2) {
    표현식2의 결과가 참일 때 실행하고자 하는 실행문;
} else {
    표현식1의 결과도 거짓이고, 표현식2의 결과도 거짓일 때 실행하고자 하는 실행문;
}
*/
{
  let x = 10, y = 20;
  if (x == y) {
    console.log("x와 y는 같습니다.");

  } else if (x < y) {
    console.log("x가 y보다 작습니다.");
  } else { // x > y인 경우
    console.log("x가 y보다 큽니다.");
  }
  //result => x가 y보다 작습니다.
  //else if 문에서도 실행될 실행문이 한 줄뿐이라면 중괄호({})를 생략할 수 있습니다.
}

/*
🍐 switch 문
switch 문은 if / else 문과 마찬가지로 주어진 조건 값에 따라 프로그램이 다른 명령을 수행하도록 하는 조건문입니다.
switch 문은 if / else 문보다 가독성 측면에서 더 좋습니다.
switch (조건 값) {
    case 값1:
        조건 값이 값1일 때 실행하고자 하는 실행문;
        break;
    case 값2:
        조건 값이 값2일 때 실행하고자 하는 실행문;
        break;

    default:
        조건 값이 어떠한 case 절에도 해당하지 않을 때 실행하고자 하는 실행문;
        break;

default 절은 조건 값이 위에 나열된 어떠한 case 절에도 해당하지 않을 때 실행됩니다.
이 구문은 반드시 존재해야 하는 것은 아니며, 필요할 때만 선언할 수 있습니다.
각 case 절 및 default 절은 반드시 break 키워드를 포함하고 있어야 합니다.
break 키워드는 조건 값에 해당하는 case 절이나 default 절이 실행된 뒤에 즉시 switch 문을 종료합니다.
참고: default 절의 위치가 반드시 switch 문의 맨 마지막일 필요는 없습니다.
루프의 제어: https://www.tcpschool.com/javascript/js_control_etc
}
*/
{//case 절과 default 절에 break 키워드가 있을 경우
  let x = 10;

  switch (typeof x) {
    case "number":
      console.log("변수 x의 타입은 숫자입니다.");
      break;
    case "string":
      console.log("변수 x의 타입은 문자열입니다.");
      break;
    case "object":
      console.log("변수 x의 타입은 객체입니다.");
      break;
    default:
      console.log("변수 x의 타입을 잘 모르겠습니다.");
      break;
  }
  //result => 변수 x의 타입은 숫자입니다.
}

{ //case 절과 default 절에 break 키워드가 없을 경우
  let x = "문자열";

  switch (typeof x) {
    case "number":
      console.log("변수 x의 타입은 숫자입니다.");
    case "string":
      console.log("변수 x의 타입은 문자열입니다.");
    case "object":
      console.log("변수 x의 타입은 객체입니다.");
    default:
      console.log("변수 x의 타입을 잘 모르겠습니다");
  }
  //result => 변수 x의 타입은 문자열입니다.
  //          변수 x의 타입을 잘 모르겠습니다
  //          변수 x의 타입을 잘 모르겠습니다
  /*위의 예제에서 변수 x는 string 타입이므로, 
  두 번째 case 절의 console.log("변수 x의 타입은 문자열입니다."); 메소드가 제일 먼저 실행됩니다.
  하지만 break 키워드가 없으므로, 두 번째 case 절 이후에 나오는 모든 case 절이 실행됩니다.
  따라서 case 절과 default 절은 반드시 break 키워드를 포함하고 있어야 정확하게 동작할 수 있습니다.
   */
}
/*
다음 예제와 같이 여러 개의 case 절을 사용하여 여러 개의 조건을 한 번에 표현할 수도 있습니다.
*/
{
  let day = new Date().getDay(); // 오늘의 요일을 반환함. (일요일: 0 ~ 토요일: 6)

  switch (day) {
    case 1: // 월요일인 경우
    case 2: // 화요일인 경우
    case 3: // 수요일인 경우
    case 4: // 목요일인 경우
    default: // 0부터 6까지의 값이 아닌 경우
      console.log(`오늘은 ${day} 입니다.`);
      break;
    case 5: // 금요일인 경우
      console.log("오늘은 불금!");
      break;
    case 6: // 토요일인 경우
    case 0: // 일요일인 경우
      console.log("즐거운 주말!");
      break;
  }
}