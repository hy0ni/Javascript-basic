/*
🍐 this 키워드
자바스크립트에서 this 키워드는 해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체를 가리킵니다.

예를 들어, 메소드 내부에서 사용된 this 키워드는 해당 메소드를 포함하고 있는 객체를 가리킵니다.
또한, 객체 내부에서 사용된 this 키워드는 객체 그 자신을 가리킵니다.
이러한 this는 변수가 아닌 키워드이므로, 사용자가 임의로 가리키는 값을 바꿀 수 없습니다.

🍬 객체 생성자 함수 내부에서 사용된 this 키워드는 어떠한 값도 가지지 않으며, 단순히 새로운 객체로 대체됩니다.
*/

/*
🍌 객체 프로퍼티의 삭제
자바스크립트에서 객체의 프로퍼티를 참조하는 방법
문법:
객체이름.프로퍼티이름
또는
객체이름["프로퍼티이름"]

자바스크립트에서는 delete 키워드를 사용하여 객체의 프로퍼티를 삭제할 수 있습니다.
문법: delete 객체이름.프로퍼티이름;

delete 키워드를 사용하여 프로퍼티를 삭제하면, 프로퍼티의 값뿐만 아니라 프로퍼티 그 자체도 삭제됩니다.
이 키워드는 본래 객체의 프로퍼티만을 삭제하기 위해 만들어졌기 때문에 함수나 변수에 사용하면 아무런 동작도 하지 않습니다.
*/

{
  function Dog(name, age) {
    this.name = name;
    this.age = age;
  }
  let myDog = new Dog("나나", 17);
  delete myDog.age; // age 프로퍼티 삭제

  console.log(myDog.age); // age 프로퍼티가 삭제되었기 때문에 undefined를 출력
}
/*
🍬 직접 생성한 프로토타입은 위와 같이 새로운 프로퍼티나 메소드를 마음껏 추가하거나 삭제할 수 있습니다.
물론 자바스크립트 표준 객체의 프로토타입도 임의로 수정할 수 있으나, 심각한 오류가 발생할 가능성이 있습니다.
따라서 자바스크립트 표준 객체의 프로토타입은 수정해서는 안됩니다.
*/

/*
🍌 객체 프로퍼티의 순회
자바스크립트에서는 for / in 문을 사용하여 객체의 모든 프로퍼티를 순회할 수 있습니다.

for / in 문은 객체의 모든 열거할 수 있는 프로퍼티(enumerable properties)를 손쉽게 순회할 수 있도록 해줍니다.
-------------------------------------------------------------
객체의 프로퍼티를 순회하는 방법으로는 for / in 문 이외에도 다음과 같은 메소드를 사용할 수 있습니다.

1. Object.keys()
2. Object.getOwnPropertyNames()

🍍 Object.keys() 메소드는 해당 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티의 이름을 배열에 담아 반환합니다.

🍍 Object.getOwnPropertyNames() 메소드는 해당 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환합니다.
*/

{
  function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }
  let myDog = new Dog("나나", "갈색", 17);

  // color 프로퍼티의 enumerable 속성을 false로 설정함.
  Object.defineProperty(myDog, 'color', { enumerable: false });
  /*
  Object.defineProperty() 메소드는 ECMAScript 5부터 추가된 객체에 프로퍼티를 추가해주는 메소드입니다.
  객체에 새로운 속성을 직접 정의하거나 이미 존재하는 속성을 수정한 후, 해당 객체를 반환합니다.
    */

  // 객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환함.
  console.log(Object.keys(myDog)); // ['name', 'age']

  // 객체가 가진 모든 고유 프로퍼티의 이름을 배열에 담아 반환함.
  console.log(Object.getOwnPropertyNames(myDog)); // ['name', 'color', 'age']

}

/*
🍌 객체간의 비교
자바스크립트에서 별개의 두 객체는 프로퍼티의 값이 모두 같아도, 절대로 같다고 말할 수 없습니다.
*/

{
  function Dog(name, age) {
    this.name = name;
    this.age = age;
  }

  // 모든 프로퍼티의 값이 모두 같은 객체를 생성함.
  let myDog = new Dog('나나', 17);
  let hisDog = new Dog('마루', 2);

  console.log(myDog == hisDog); //false
  console.log(myDog === hisDog); //false
  /*
  myDog과 hisDog 객체는 가지고 있는 프로퍼티의 값이 모두 같습니다.
    하지만 이 두 객체는 별개의 객체이므로, 동등(==) 연산자와 일치(===) 연산자로 비교해도 모두 false를 반환합니다.
  */

  let herDog = hisDog; // hisDog 객체를 변수 herDog에 대입함.
  console.log(hisDog == herDog); //true
  console.log(hisDog === herDog); //true

  /*
  변수 herDog에 hisDog 객체를 대입합니다.

  이렇게 객체를 대입한 변수를 객체 레퍼런스(object reference)라고 하며, 이제부터 변수 herDog은 hisDog 객체를 가리키게 됩니다.

  즉, 객체 레퍼런스는 객체 자체를 저장하는 것이 아니라, 객체가 위치한 주소를 저장하는 것입니다.
  
  따라서 변수 herDog과 hisDog을 동등 연산자와 일치 연산자로 비교하면, 모두 true를 반환하게 됩니다.
  */
}