//함수선언문_선언만 하고 할당을 안함
function a(){

}
a();

//함수 표현식_선언한 function을 변수에 할당한 경우
var b = function(){

}
b();

//기명함수_ 잘 안씀. 변수명 : c / 함수명 : d
var c = function d(){

}
c();
d(); //에러뜸