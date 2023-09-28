// 자바스크립트 출력하기
// Javascript는 여러가지 방법으로 출력할 수 있습니다.
/*
1. window.alert() 메소드
2. document.write() 메소드
3. console.log() 메소드
4. HTML DOM 요소를 이용한 innerHTML 프로퍼티
*/

/**
 *  + 대화상자(dialog box)
사용자에게 보여줄 수 있는 간단한 대화 상자를 만들기 위해 window 객체는 다음과 같은 메소드를 제공합니다.
1. alert()
2. confirm()
3. prompt()

window.alert() 메소드
자바스크립트에서 가장 간단하게 데이터를 출력할 수 있는 방법은 window.alert() 메소드를 이용하는 것입니다.
window.alert() 메소드는 브라우저와는 별도의 대화 상자를 띄워 사용자에게 데이터를 전달해 줍니다.

window 객체의 alert() 메소드는 사용자에게 간단한 메시지를 보여주고, 그에 대한 사용자의 확인을 기다립니다.
 */
document.querySelector('button.alert').addEventListener('click', function () {
  alert("alert");
  // button을 클릭하면 alert("Hello JavaScript"); 데이터를 확인할 수 있습니다.
})

/*
confirm() 메소드
window 객체의 confirm() 메소드는 사용자에게 간단한 메시지를 보여주고, 사용자가 확인이나 취소를 누르면 그 결과를 불리언 값으로 반환합니다.
사용자가 확인을 누르면 true를 반환하고, 취소를 누르면 false를 반환합니다.
*/
document.querySelector('button.confirm').addEventListener('click', function () {
  window.confirm("confirm");
})

/*
prompt() 메소드
window 객체의 prompt() 메소드는 사용자에게 간단한 메시지를 보여주고, 사용자가 입력한 문자열을 반환합니다.
*/
document.querySelector('button.prompt').addEventListener('click', function () {
  window.prompt("간단한 메시지" + "입력란의 기본 메시지");
})



/*
document.write() 메소드는 웹 페이지가 보여질 때 웹 페이지에 가장 먼저 데이터를 출력합니다.
따라서 document.write() 메소드는 대부분 테스트나 디버깅을 위해 사용됩니다.
하지만 웹 페이지의 모든 내용이 로딩된 후에 document.write() 메소드가 실행되면, 웹 페이지 내에 먼저 로딩된 모든 데이터를 지우고 자신의 데이터를 출력하게 됩니다.
따라서 document.write() 메소드를 테스트 이외의 용도로 사용할 때에는 충분히 주의해서 사용해야 합니다.
*/
document.write(4 * 5);


/*
console.log() 메소드는 웹 브라우저의 콘솔을 통해 데이터를 출력해 줍니다.
대부분의 주요 웹 브라우저에서는 F12를 누른 후, 메뉴에서 콘솔을 클릭하면 콘솔 화면을 사용할 수 있습니다.
이러한 콘솔 화면을 통한 데이터의 출력은 좀 더 자세한 사항까지 출력되므로, 디버깅하는데 많은 도움을 줍니다.
*/
console.log("Hello JavaScript");



// + DOM 요소의 선택
//HTML 요소를 다루기 위해서는 우선 해당 요소를 선택해야만 합니다.
// 자바스크립트에서 특정 HTML 요소를 선택하는 방법은 다음과 같습니다.
/*
1. HTML 태그 이름(tag name)을 이용한 선택
2. 아이디(id)를 이용한 선택
3. 클래스(class)를 이용한 선택
4. name 속성(attribute)을 이용한 선택
5. CSS 선택자(selector)를 이용한 선택
*/

// HTML DOM 요소를 이용한 innerHTML 프로퍼티
// Javascript에서 브라우저 화면에 출력을 위해 가장 많이 사용되는 방법은 HTML DOM 요소를 이용한 innerHTML 프로퍼티를 이용하는 방법입니다.
// HTML DOM요소를 선택하여 innerHTML 프로퍼티를 이용해 선택된 HTML 요소의 내용(content)이나 속성(attribute)값 등을 손쉽게 변경할 수 있습니다.

// HTML DOM 요소 찾기
//HTML 요소(id="title" 포함)를 "찾고" 요소 콘텐츠(innerHTML)를 "Hello JavaScript"로 변경합니다.
// id는 유일한 값이므로, 하나의 요소만 반환합니다.
// 만약 동일은 id를 갖는 경우 첫 번째 요소만 반환합니다.
document.getElementById("title").innerHTML = "Hello JavaScript";
// JavaScript에서는 큰따옴표와 작은따옴표를 모두 허용합니다.

// 동일한 class를 가진 모든 요소를 반환합니다.
// 유사배열 형태
let li = document.getElementsByClassName('li');
console.log(li.length); //3
console.log(li); //HTMLCollection(2) [li.li, li.li]
console.log(li[0]); //li class를 가진 첫 번째 요소
console.log(li[1]); //li class를 가진 두 번째 요소
console.log(li[2]); //undefined // 3번째 값은 없으므로 undefined를 리턴합니다.

// 다중 클래스
// document.getElementsByClassName
//document.querySelector및 와 매우 유사하게 작동합니다 
//document.querySelectorAll. 모든 className이 지정된 요소만 선택됩니다.


// 'li'태그를 가지는 모든 요소를 찾아줍니다.
console.log(document.getElementsByTagName('li'));
//HTMLCollection(2) [li.li, li.li]


// id(#)를 id이름 앞에 붙여서 파라미터로 넘겨주면 id가 title인 요소를 찾아 리턴합니다.
console.log(document.querySelector('#title')); 
//<h1 id="title"></h1>

// 클래스(.)를 클래스 이름 앞에 붙여 파라미터로 넘겨주면 class가 p인 첫번째 요소를 리턴합니다.
console.log(document.querySelector('.p'));
// <p class="p"></p>

// 태그 이름으로 요소를 찾을 경우 태그명을 문자열로 넘겨주면
// p태그를 가지는 요소 중 첫번째 p요소를 리턴합니다.
console.log(document.querySelector('p'));

// 사용법은 querySelector와 동일하지만 
// querySelectorAll()은 이름에서 알 수 있듯이 
// 지정된 selector와 일치하는 모든 요소를 리턴합니다.

// li클래스를 가진 모든 요소를 리턴합니다.
console.log(document.querySelectorAll('.li'))
// NodeList(2) [li.li, li.li]

// li 태그를 가진 모든 요소를 리턴합니다.
console.log(document.querySelectorAll('li'))
// NodeList(2) [li.li, li.li]


// name 속성을 이용한 선택
// getElementByName() 메소드는 HTML 요소의 name 속성을 이용하여 HTML 요소를 선택합니다.
console.log(document.getElementsByName('text'))
//NodeList [input]



// DOM 요소의 스타일 변경
// style 프로퍼티를 이용하여 HTML 요소에 CSS 스타일을 적용합니다.
document.querySelector('#title').style.color = "red";
// #title 요소의 color를 빨강으로 변경합니다.