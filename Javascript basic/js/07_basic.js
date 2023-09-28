// 🍐 논리 연산자(logical operator)
/*
논리 연산자는 주어진 논리식을 판단하여, 참(true)과 거짓(false)을 반환합니다.

&& 연산자와 || 연산자는 두 개의 피연산자를 가지는 이항 연산자이며, 피연산자들의 결합 방향은 왼쪽에서 오른쪽입니다.

! 연산자는 피연산자가 단 하나뿐인 단항 연산자이며, 피연산자의 결합 방향은 오른쪽에서 왼쪽입니다.

&&	논리식이 모두 참이면 참을 반환함. (논리 AND 연산)
||	논리식 중에서 하나라도 참이면 참을 반환함. (논리 OR 연산)
!	  논리식의 결과가 참이면 거짓을, 거짓이면 참을 반환함. (논리 NOT 연산)

  A	       B	      A && B	    A || B	     !A
true	    true	    true	       true	      false
true	    false	    false	       true	      false
false	    true	    false	       true	      true
false	    false	    false	       false      true

||(or) 연산자는 비교값 중 하나라도 true면 true로 계산이 되는 연산자입니다.

첫 번째 값이 true면 true를 반환하고 계산을 종료합니다.

&&(and) 연산자는 비교값이 모두 true여야 true를 반환하고 하나라도 false이면 false를 반환합니다.

!(not) 연산자는 값을 반대로 바꿔주는 역할을 합니다.
*/