/*
🍐 객체(object)
객체(object)란 실생활에서 우리가 인식할 수 있는 사물로 이해할 수 있습니다.

객체의 예)

객체(object)
- 강아지

프로퍼티(property)
- dog.name = "나나"
- dog.family = "푸들"
- dog.age = 17
- dog.weight = 300

메소드(method)
- dog.eat()
- dog.sleep()
- dog.play()

강아지 객체는 모두 위와 같은 프로퍼티를 가지지만, 
각 프로퍼티의 값은 인스턴스마다 전부 다를 것입니다.
*/

/*
🍌 자바스크립트 객체
자바스크립트의 기본 타입(data type)은 객체(object)입니다.
객체란 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합입니다.
프로퍼티의 값으로 함수가 올 수도 있는데, 이러한 프로퍼티를 메소드(method)라고 합니다.
*/
let dog = "나나"; // 일반적인 변수의 선언 // 객체도 많은 값을 가지는 변수의 하나입니다.
let nana = { name: "나나", family: "푸들", age: 17, weight: 300 };
console.log(dog); // 나나
console.log(nana.name); // 나나

/*
자바스크립트에서는 숫자, 문자열, 불리언, undefined 타입을 제외한 모든 것이 객체입니다.
하지만 숫자, 문자열, 불리언과 같은 원시 타입은 값이 정해진 객체로 취급되어, 객체로서의 특징도 함께 가지게 됩니다.
*/

/*
🍌 객체의 프로퍼티 참조
자바스크립트에서 객체의 프로퍼티를 참조하는 방법
문법:
객체이름.프로퍼티이름
또는
객체이름["프로퍼티이름"]
*/
let person = {
  name: "효니", // 이름 프로퍼티를 정의함
  age: "20", // 나이 프로퍼티를 정의함
  greeting: "안녕하세요.", // 인사말 프로퍼티를 정의함
  hello: function () { // 인사말을 반환
    return this.greeting;
  }
};
console.log(person.name); //효니
console.log(person["name"]); // 효니

/*
객체의 메소드 참조
문법: 객체이름.메소드이름()
*/
console.log(person.hello()); //안녕하세요.
console.log(person.hello);
/*
ƒ (){ // 인사말을 반환
    return this.greeting;
  } 

메소드를 참조할 때 메소드 이름 뒤에 괄호(())를 붙이지 않으면, 메소드가 아닌 프로퍼티 그 자체를 참조하게 됩니다.
따라서 괄호를 사용하지 않고 프로퍼티 그 자체를 참조하게 되면 해당 메소드의 정의 그 자체가 반환됩니다.
*/