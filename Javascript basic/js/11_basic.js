/*
루프의 제어
일반적으로 표현식의 검사를 통해 루프로 진입하면, 다음 표현식을 검사하기 전까지 루프 안에 있는 모든 실행문을 실행합니다.
하지만 continue 문과 break 문은 이러한 일반적인 루프의 흐름을 사용자가 직접 제어할 수 있게 해줍니다.
label 문을 사용하면 continue 문과 break 문의 동작이 프로그램의 흐름을 특정 영역으로 이동시킬 수 있습니다.
*/

/*🍐 label 문(레이블 구문)
label 문은 프로그램 내의 특정 영역을 식별할 수 있도록 해주는 식별자입니다.
원하는 식별자로 구문 앞에 레이블을 추가할 수 있습니다.

label 문을 사용하면 continue 문과 break 문의 동작이 프로그램의 흐름을 특정 영역으로 이동시킬 수 있습니다.
반복문에 레이블을 붙이고, break나 continue 구문을 사용해 반복문의 어느 위치에서 작업을 멈추고 어느 위치에서 다시 수행할지를 알려줄 수 있다.
**Note: 레이블을 붙인 반복문이나 블록가 자주 사용되는 것은 아니다. 반복문으로 점프하는 대신에 함수를 호출할 수도 있다.
strict mode 코드에서 "let"을 레이블 이름으로 사용할 수 없다. SyntaxError를 발생시킨다. (let은 허용되지 않는 식별자이다.)

label:
식별하고자 하는 특정 영역(statement)


*/
loop1: for (let i = 0; i < 3; i++) {
  loop2: for (let j = 0; j < 3; j++) {
    // if (j === 1) {
    //   continue loop1;
    // }
    console.log(`for: i= ${i} / j= ${j}`);
  }
}
/*
i=0 / j=0
i=0 / j=1
i=0 / j=2
i=1 / j=0
i=1 / j=1
i=1 / j=2
i=2 / j=0
i=2 / j=1
i=2 / j=2
*/
loop1: for (let i = 0; i < 3; i++) {
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1) {
      continue loop1; //i가 1과 같다면 loop1을 제외하고 건너뜀
    }
    console.log(`label for: i= ${i} / j= ${j}`);
  }
}
/*
i=0 / j=0
i=0 / j=1
i=0 / j=2
// i가 1과 같다면 제외하고 건너뜀
i=2 / j=0
i=2 / j=1
i=2 / j=2
*/

/*🍐 continue 문 
continue 문은 루프 내에서 사용하여 해당 루프의 나머지 부분을 건너뛰고, 바로 다음 표현식의 판단으로 넘어가게 합니다.
보통 반복문 내에서 특정 조건에 대한 처리를 제외하고자 할 때 자주 사용됩니다.

자바스크립트에서 continue 문은 다음과 같이 두 가지 형태로 사용할 수 있습니다.
1. continue;
2. continue 라벨이름(label);

다음 예제는 1부터 10까지의 정수 중에서 2의 배수를 제외하고 출력하는 예제입니다.
*/
let exceptNum = 2;
for (let i = 0; i <= 10; i++) {
  if (i % exceptNum == 0) // exceptNum의 배수(2의 배수)는 출력하지 않음.
    continue;
  console.log(i);
}
/*
1
3
5
7
9
*/
// 라벨을 이용하여 구구단의 값이 홀수인 경우에만 출력하는 예제입니다.
gugudan: for (let i = 2; i <= 9; i++) {
  dan: for (let j = 1; j <= 9; j++) {
    if ((i * j) % 2 == 0)
      continue dan;
    console.log(`${i} * ${j} = (${i * j})`);
  }
}
/*
3 * 1 = (3)
3 * 3 = (9)
3 * 5 = (15)
3 * 7 = (21)
3 * 9 = (27)
5 * 1 = (5)
5 * 3 = (15)
5 * 5 = (25)
5 * 7 = (35)
5 * 9 = (45)
7 * 1 = (7)
7 * 3 = (21)
7 * 5 = (35)
7 * 7 = (49)
7 * 9 = (63)
9 * 1 = (9)
9 * 3 = (27)
9 * 5 = (45)
9 * 7 = (63)
9 * 9 = (81)
*/

/*🍐 break 문
break 문은 루프 내에서 사용하여 해당 반복문을 완전히 종료시키고, 반복문 바로 다음에 위치한 실행문으로 프로그램의 흐름을 이동시킵니다.
즉, 루프 내에서 표현식의 판단 결과에 상관없이 반복문을 완전히 빠져나가고 싶을 때 사용합니다.

자바스크립트에서 break 문은 다음과 같이 두 가지 형태로 사용할 수 있습니다.
1. break;
2. break 라벨이름;

배열에서 특정값을 가지고 있는 인덱스를 출력하는 예제입니다.
*/
let lectures = ["html", "css", "자바스크립트", "php"];
let topic = "자바스크립트";
for (let i = 0; i < lectures.length; i++) {
  if (lectures[i] == topic) {
    console.log(`${topic}과목은 ${i + 1}번째 과목입니다.`);
    break; // 원하는 값을 찾은 후에는 더 이상 for 문을 반복하지 않고 빠져나감.
    //자바스크립트과목은 3번째 과목입니다.
  }
}

// 라벨을 이용하여 구구단을 3단까지만 출력하는 예제입니다.
{

  gugudan:
  for (let i = 2; i <= 9; i++) {
    dan:
    for (let j = 1; j <= 9; j++) {
      if (i > 3)
        break gugudan;
      console.log(`1~3단: ${i}*${j} = ${i * j}`);
    }
  }
  /*
  1~3단: 2*1 = 2
  1~3단: 2*2 = 4
  1~3단: 2*3 = 6
  1~3단: 2*4 = 8
  1~3단: 2*5 = 10
  1~3단: 2*6 = 12
  1~3단: 2*7 = 14
  1~3단: 2*8 = 16
  1~3단: 2*9 = 18
  1~3단: 3*1 = 3
  1~3단: 3*2 = 6
  1~3단: 3*3 = 9
  1~3단: 3*4 = 12
  1~3단: 3*5 = 15
  1~3단: 3*6 = 18
  1~3단: 3*7 = 21
  1~3단: 3*8 = 24
  1~3단: 3*9 = 27
  */
}