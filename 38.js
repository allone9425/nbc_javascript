//call, apply는 바로 호출
//bind는 this를 바인딩하는 메소드
//[목적 = 기능]
//1. 함수에 this를 미리적용
//2. 부분 적용 함수

var 함수 = function (a, b, c, d) {
	console.log(this, a, b, c, d);
};
함수(1, 2, 3, 4); // node에서는 global 

// 함수에 this 미리 적용
var 바인딩1 = 함수.bind({ x: 1 }); // 바로 호출되지는 않아요! 그 외에는 같아요.
바인딩1(5, 6, 7, 8); // { x: 1 } 5 6 7 8

// 부분 적용 함수 구현
var 바인딩2 = 함수.bind({ x: 1 }, 4, 5); // 4와 5를 미리 적용
바인딩2(6, 7); // { x: 1 } 4 5 6 7
바인딩2(8, 9); // { x: 1 } 4 5 8 9

console.log(함수.name);
console.log(바인딩1.name);
console.log(바인딩2.name);