/*
🍐 배열(array)이란?
자바스크립트에서 배열(array)은 이름과 인덱스로 참조되는 정렬된 값의 집합으로 정의됩니다.
배열을 구성하는 각각의 값을 배열 요소(element)라고 하며, 
배열에서의 위치를 가리키는 숫자를 인덱스(index)라고 합니다.

자바스크립트에서 배열의 특징은 다음과 같습니다.

1. 배열 요소의 타입이 고정되어 있지 않으므로, 같은 배열에 있는 배열 요소끼리의 타입이 서로 다를 수도 있습니다.
2. 배열 요소의 인덱스가 연속적이지 않아도 되며, 따라서 특정 배열 요소가 비어 있을 수도 있습니다.
3. 자바스크립트에서 배열은 Array 객체로 다뤄집니다.

🌶️ 배열의 생성(3가지 방법)
1. 배열 리터럴을 이용하는 방법
let arr = [배열요소1, 배열요소2,...]; 
배열 리터럴은 대괄호([]) 안에 배열 요소를 쉼표로 구분하여 나열하는 방법으로 생성합니다.

2. Array 객체의 생성자를 이용하는 방법
let arr = Array(배열요소1, 배열요소2,...);

3. new 연산자를 이용한 Array 객체 생성 방법
let arr = new Array(배열요소1, 배열요소2,...); new 연산자를 이용한 Array 객체 생성 방법
*/
let arrLit = [1, true, "JavaScript"];// 배열 리터럴을 이용하는 방법
let arrObj = Array(1, true, "JavaScript");// Array 객체의 생성자를 이용하는 방법
let arrNewObj = new Array(1, true, "JavaScript"); // new 연산자를 이용한 Array 객체 생성 방법
console.log(arrLit);  // [1, true, 'JavaScript']
console.log(arrObj);  // [1, true, 'JavaScript']
console.log(arrNewObj); // [1, true, 'JavaScript']

/*
🌶️ 배열의 참조
자바스크립트에서 배열의 각 요소를 참조하고 싶을 때는 [] 연산자를 사용합니다.

배열이름[인덱스]

자바스크립트에서는 배열 요소의 개수를 배열의 길이(arr.length)라고 합니다.
이러한 배열의 길이는 length 프로퍼티에 자동으로 갱신됩니다.
자바스크립트에서 인덱스는 언제나 0부터 시작합니다.
또한, 인덱스에는 음이 아닌 정수를 반환하는 임의의 표현식도 사용할 수 있습니다.
이러한 인덱스에는 2의32승보다 작은 양수만을 사용할 수 있습니다.

다음 예제는 배열을 생성하고, 생성된 배열에 요소를 추가하고 삭제하는 예제입니다.
*/
let arr = ["JavaScript"]; // 요소가 하나뿐인 배열을 생성함.
let element = arr[0];     // 배열의 첫 번째 요소를 읽어서 대입함.
arr[1] = 10;      // 배열의 두 번째 요소에 숫자 10을 대입함. 배열의 길이는 1에서 2로 늘어남.
arr[2] = element; // 배열의 세 번째 요소에 변수 element의 값을 대입함. 배열의 길이는 2에서 3으로 늘어남.

console.log(arr); // 배열의 요소를 모두 출력 ['JavaScript', 10, 'JavaScript']
//배열의 arr요소에는 JavaScript,10,JavaScript가 있습니다.
console.log(arr.length); // 배열의 길이를 출력
//배열 arr의 길이는 3입니다.

delete arr[2];    // 배열의 세 번째 요소를 삭제. 하지만 배열의 길이는 변하지 않음.
console.log(arr); // ['JavaScript', 10, empty]
//배열의 arr요소에는 JavaScript,10,''(비어있는 값)이 있습니다.
console.log(arr.length);
//배열 arr의 길이는 3입니다.
/* 
위의 예제에서 세 번째 실행문은 배열의 현재 길이보다 더 큰 인덱스에 요소를 저장하려고 합니다.
자바스크립트에서는 이렇게 배열의 길이를 넘는 인덱스에 요소를 저장하는 것을 허용합니다.
이때 배열의 길이는 자동으로 해당 인덱스까지 늘어나게 됩니다.
*/

/*
🌶️ 배열 요소의 추가
1. arr.push(추가할 요소); // push() 메소드를 이용하는 방법
2. arr[arr.length] = 추가할 요소; // length 프로퍼티를 이용하는 방법
3. arr[특정인덱스] = 추가할 요소; // 특정 인덱스를 지정하여 추가하는 방법

push() 메소드와 length 프로퍼티를 이용한 방법은 모두 배열의 제일 끝에 새로운 요소를 추가합니다.
*/
console.clear();
{
  let arr = [1, true, "Java"];
  arr.push("Script"); // push() 메소드를 이용하는 방법
  console.log(arr); // [1, true, 'Java', 'Script']
  // }
  // {
  arr[arr.length] = 100;
  console.log(arr); // [1, true, 'Java', 'Script', 100]
  arr[10] = "자바스크립트";
  console.log(arr); // [1, true, 'Java', 'Script', 100, empty × 5, '자바스크립트']
  console.log(arr[7]); // undefined
}
/*
위의 예제에서 배열 arr의 길이는 최종적으로 11이 됩니다.
이때 배열 요소가 존재하는 인덱스는 0, 1, 2, 3, 4, 10뿐이며, 나머지 인덱스에는 배열 요소가 존재하지 않습니다.
이렇게 인덱스에 대응하는 배열 요소가 없는 부분을 배열의 홀(hole)이라고 합니다.
자바스크립트에서는 이러한 배열의 홀(hole)을 undefined 값을 가지는 요소처럼 취급합니다.
따라서 위의 예제에서처럼 배열의 홀을 참조하게 되면 undefined 값을 반환하게 됩니다.
*/

/*
🌶️ 배열의 순회(iteration)
배열의 모든 요소에 차례대로 접근하고 싶을 때는 for문과 같은 반복문을 사용하여 접근할 수 있습니다.
*/
{
  const numbers = [1, 2, 3, 4, 5];
  for (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // 1 2 3 4 5
  }
}

/*
🌶️ Array 객체
자바스크립트에서 배열(array)은 정렬된 값들의 집합으로 정의되며, Array 객체로 다뤄집니다.
또한, 자바스크립트는 사용자가 배열과 관련된 작업을 손쉽게 할 수 있도록 다양한 메소드도 제공하고 있습니다.

다음 예제는 배열과 각 배열 요소의 typeof 연산 결과를 보여주는 예제입니다.
*/
{
  let arr = new Array(10, "문자열", false);
  console.log((typeof arr));    // object
  console.log((typeof arr[0])); // number
  console.log((typeof arr[1])); // string
  console.log(typeof arr[2]);   // boolea
}

/* 🌶️ Array 메소드
Array 메소드는 Array 객체에 정의된 배열과 관련된 작업을 할 때 사용하는 메소드입니다.
1. Array.isArray()
2. Array.from()
3. Array.of()
*/
/*
- Array.isArray() 메소드
Array.isArray() 메소드는 전달받은 값이 Array 객체인지 아닌지를 검사합니다.
*/
console.log(Array.isArray([])); //true
console.log(Array.isArray(new Array)); // true
console.log(Array.isArray(123)); // false
console.log(Array.isArray("Array")); // false
console.log(Array.isArray(true)); // false

/*
- Array.from() 메소드
ECMAScript 6부터 추가된 Array.from() 메소드는 다음 객체들을 배열처럼 변환시켜 줍니다.

1. 배열과 비슷한 객체(array-like objects): length 프로퍼티와 인덱스 된 요소를 가지고 있는 객체
2. 반복할 수 있는 객체(iterable objects): Map과 Set 객체 및 문자열과 같이 해당 요소를 개별적으로 선택할 수 있는 객체
하지만 이렇게 생성된 객체는 정확히 말하면 Array 객체는 아니며, Array 객체의 자식 클래스(child class)입니다.
*/
function arrayFrom() {
    return Array.from(arguments);
}
console.log(Array.from(arrayFrom(1, 2, 3))); // [1, 2, 3]

let myMap = new Map([[1, 2], [3, 4]]);
console.log(Array.from(myMap)); // [1, 2, 3, 4]
console.log(Array.from("JavaScript")); // [J,a,v,a,S,c,r,i,p,t]
//Array.from() 메소드는 파이어폭스 32.0 이상의 버전에서만 지원합니다.

/*
- Array.of() 메소드
ECMAScript 6부터 추가된 Array.of() 메소드는 인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성합니다.
이때 Array.of() 메소드와 Array 객체 생성자와의 차이로는 정수로 전달된 인수의 처리 방식에 있습니다.
*/
console.log(new Array(10)); // [,,,,,,,,,] -> 10개의 배열 요소를 가지는 빈 배열을 생성함.
console.log(Array.of(10));  // [10] -> 한 개(숫자 10)의 배열 요소를 가지는 배열을 생성함.
/*
위의 예제에서 Array 객체 생성자에 인수로 정수 10을 전달하면, 생성자는 길이가 10인 빈 배열을 생성합니다.
하지만 Array.of() 메소드에 인수로 정수 10을 전달하면, 정수 10을 배열 요소로 가지는 길이가 1인 배열을 생성합니다.

//Array.of() 메소드는 익스플로러, 오페라, 사파리에서 지원하지 않습니다.

자바스크립트 Array 메소드
Array.isArray()	전달된 값이 Array 객체인지 아닌지를 검사함.
Array.from()	배열과 비슷한 객체와 반복할 수 있는 객체를 배열처럼 변환함.
Array.of()	인수의 수나 타입에 상관없이 인수로 전달받은 값을 가지고 새로운 Array 인스턴스를 생성함.
*/