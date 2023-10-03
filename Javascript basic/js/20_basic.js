/*
🍐 객체의 생성

1. 리터럴 표기(literal notation)를 이용한 방법
2. 생성자 함수(constructor function)를 이용한 방법
3. Object.create() 메소드를 이용한 방법

위와 같은 방법으로 생성되어 메모리에 대입된 객체를 인스턴스(instance)라고 합니다.
*/

/*
🍌 리터럴 표기를 이용한 객체의 생성
자바스크립트에서 객체를 생성하는 가장 쉬운 방법은 리터럴 표기(literal notation)를 이용하는 방법입니다.
문법: 
let 객체이름 = {
    프로퍼티1이름 : 프로퍼티1의값,
    프로퍼티2이름 : 프로퍼티2의값,
    ...
};
각각의 프로퍼티는 이름과 값을 콜론(:)으로 연결하고, 쉼표(,)를 사용해 다른 프로퍼티와 구분합니다.
프로퍼티의 이름으로는 자바스크립트의 식별자(identifier)나 문자열을 사용할 수 있습니다.
*/
let dog = {
  name: "나나",
  family: "푸들",
  age: 17,
};
console.log(`강아지의 이름은 ${dog.name}이고 ${dog.family}, ${dog.age}살 입니다.`);
// 강아지의 이름은 나나이고 푸들, 17살 입니다.

/*
🍌 생성자를 이용한 객체의 생성
new 연산자를 사용하여 객체를 생성하고 초기화할 수 있습니다.
이때 사용되는 메소드를 생성자(constructor)라고 하며, 이 메소드는 새롭게 생성되는 객체를 초기화하는 역할을 합니다.
자바스크립트는 원시 타입을 위한 생성자를 미리 정의하여 제공합니다.
*/
let day = new Date(); // new 연산자를 사용하여 Date 타입의 객체를 생성합니다.
console.log(`올해는 ${day.getFullYear()}년입니다.`); //올해는 2023년입니다.
//위의 예제처럼 자바스크립트에서 제공하는 생성자를 사용할 수도 있으며, 사용자가 직접 객체 생성자 함수(object constructor function)를 작성하여 사용할 수도 있습니다.


/*
🍌 Object.create() 메소드를 이용한 객체의 생성
Object.create() 메소드를 이용하여 객체를 생성할 수도 있습니다.
Object.create() 메소드는 지정된 프로토타입(prototype) 객체와 프로퍼티를 가지고 새로운 객체를 만들어 줍니다.
따라서 이 메소드를 이용하면 사용자가 프로토타입 객체를 직접 명시할 수 있으므로, 상당히 유용하게 사용됩니다.
문법:
Object.create(프로토타입객체[, 새로운객체의프로퍼티1, 새로운객체의프로퍼티2, ...]);

Object.create() 메소드의 첫 번째 인수로는 프로토타입으로 사용할 객체를 전달합니다.
두 번째 인수로는 새로운 객체의 추가할 프로퍼티 정보를 전달합니다.
*/
let obj = Object.create(null, { // null 프로토타입을 사용하여 새로운 객체 생성
  x: { value: 100, enumerable: true }, // x좌표를 나타내는 열거할 수 있는 프로퍼티와
  y: { value: 200, enumerable: true }  // y좌표를 나타내는 열거할 수 있는 프로퍼티를 추가함.
})
console.log(obj.x); // 100
console.log(obj.y); // 200
console.log(Object.getPrototypeOf(obj)); // null