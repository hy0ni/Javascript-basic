/*
🍐 프로토타입

🍌 상속(inheritance)
상속(inheritance)이란 새로운 클래스에서 기존 클래스의 모든 프로퍼티와 메소드를 사용할 수 있는 것을 의미합니다.
상속을 통해 새로운 프로그램의 요구에 맞게 기존 클래스를 수정하여 재사용할 수 있습니다.
또한, 클래스 간의 종속 관계를 형성함으로써 객체의 관계를 조직화할 수 있는 장점이 있습니다.
따라서 이러한 상속은 추상화, 캡슐화와 더불어 객체 지향 프로그래밍을 구성하는 중요한 특징 중 하나가 됩니다.

자바스크립트에서는 현재 존재하고 있는 객체를 프로토타입으로 사용하여, 해당 객체를 복제하여 재사용하는 것을 상속이라고 합니다.

🍌 프로토타입(prototype)
자바스크립트의 모든 객체는 프로토타입(prototype)이라는 객체를 가지고 있습니다.
모든 객체는 그들의 프로토타입으로부터 프로퍼티와 메소드를 상속받습니다.
이처럼 자바스크립트의 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며, 이때 상속되는 정보를 제공하는 객체를 프로토타입(prototype)이라고 합니다.

🍌 프로토타입 체인(prototype chain)
자바스크립트에서는 객체 이니셜라이저를 사용해 생성된 같은 타입의 객체들은 모두 같은 프로토타입을 가집니다.
또한, new 연산자를 사용해 생성한 객체는 생성자의 프로토타입을 자신의 프로토타입으로 상속받습니다.
*/
{
  let obj = new Object(); // 이 객체의 프로토타입은 Object.prototype입니다.
  let arr = new Array();  // 이 객체의 프로토타입은 Array.prototype입니다.
  let date = new Date();  // 이 객체의 프로토타입은 Date.prototype입니다.
}
/*
하지만 Object.prototype 객체는 어떠한 프로토타입도 가지지 않으며, 아무런 프로퍼티도 상속받지 않습니다.
또한, 자바스크립트에 내장된 모든 생성자나 사용자 정의 생성자는 바로 이 객체를 프로토타입으로 가집니다.
*/

let date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype도 프로토타입으로 가집니다.
/*
위와 같이 프로토타입이 상속되는 가상의 연결 고리를 프로토타입 체인(prototype chain)이라고 합니다.
Object.prototype 객체는 이러한 프로토타입 체인에서도 가장 상위에 존재하는 프로토타입입니다.
따라서 자바스크립트의 모든 객체는 Object.prototype 객체를 프로토타입으로 상속받습니다.
*/

/*
🍌 프로토타입의 생성
프로토타입을 생성하는 가장 기본적인 방법은 객체 생성자 함수(object constructor function)를 작성하는 것입니다.

생성자 함수를 작성하고 new 연산자를 사용해 객체를 생성하면, 같은 프로토타입을 가지는 객체들을 생성할 수 있습니다.

*객체 생성자 함수를 작성할 때에는 관례상 이름의 첫 문자만을 대문자로 작성합니다.
*/
function Dog(name, age) { // 강아지에 관한 생성자 함수 생성
  this.name = name; // 이름에 관한 프로퍼티
  this.age = age; // 나이에 관한 프로퍼티
}
let myDog = new Dog("나나", 17); // 이 객체는 Dog라는 프로토타입을 가집니다.
console.log(myDog); // Dog {name: '나나', age: 17}
console.log(`우리집 강아지의 이름은 ${myDog.name}이며, 나이는 ${myDog.age}살 입니다.`); // 우리집 강아지의 이름은 나나이며, 나이는 17살 입니다.

/*
🍌 객체에 프로퍼티 및 메소드 추가
*/
myDog.family = "푸들"; // 품종에 관한 프로퍼티 추가
myDog.breed = function () { // 품종을 반환해 주는 메소드를 추가
  return this.family;
}
console.log(`우리집 강아지는 ${myDog.breed()} 입니다.`); // 우리집 강아지는 푸들 입니다.
/*
예제에서 새롭게 추가된 family 프로퍼티와 breed() 메소드는 오직 myDog 인스턴스에만 추가됩니다.
이미 생성된 다른 Dog 객체나 차후에 생성되는 어떠한 다른 Dog 객체에도 추가되지 않습니다.
*/

/*
🍌 프로토타입에 프로퍼티 및 메소드 추가
프로토타입에 새로운 프로퍼티나 메소드를 추가하는 것은 객체에 추가할 때와는 다른 방법을 사용해야 합니다.
프로토타입의 경우에는 생성자 함수에 직접 추가해야만 이후에 생성되는 모든 다른 객체에도 적용할 수 있습니다.
*/
{

  function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.family = "푸들"; // 프로토타입에 프로퍼티를 추가할 때에는 기본값을 가지게 할 수 있습니다.
    this.breed = function () {
      return this.family;
    }
  }
  let myDog = new Dog('나나', 17);
  let hisDog = new Dog('마루', 2);

  console.log(`우리집 강아지는 ${myDog.name}이고, 친구네집 강아지는 ${hisDog.name} 입니다.`); //우리집 강아지는 나나이고, 친구네집 강아지는 마루 입니다.

}

/*
🍌 prototype 프로퍼티
prototype 프로퍼티를 이용하면 현재 존재하고 있는 프로토타입에 새로운 프로퍼티나 메소드를 손쉽게 추가할 수 있습니다.
*/
{

  function Dog(name, age) {
    this.name = name;
    this.age = age;
  }
  // 현재 존재하고 있는 Dog 프로토타입에 family 프로퍼티를 추가함.
  Dog.prototype.family = "푸들";
  // 현재 존재하고 있는 Dog 프로토타입에 breed 메소드를 추가함.
  Dog.prototype.breed = function () {
    return this.family;
  }

  let myDog = new Dog('나나', 17);
  let hisDog = new Dog('마루', 2);

  console.log(`우리집 강아지는 ${myDog.name}이고, 친구네집 강아지는 ${hisDog.name} 입니다.`); //우리집 강아지는 나나이고, 친구네집 강아지는 마루 입니다.

/*
직접 생성한 프로토타입은 위와 같이 새로운 프로퍼티나 메소드를 마음껏 추가하거나 삭제할 수 있습니다.
물론 자바스크립트 표준 객체의 프로토타입도 임의로 수정할 수 있으나, 심각한 오류가 발생할 가능성이 있습니다.
따라서 자바스크립트 표준 객체의 프로토타입은 수정해서는 안됩니다.
*/
}