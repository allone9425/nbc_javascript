// ! 두개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y){
  return x + y;
}

// ! 함수 표현식
let add2 = function(x, y){ 
  //왼쪽에 add2라는 이름을 써둬서 함수명을 안적어도됨
  return x + y
}

console.log(add(2, 3));

let Result = add(3, 4)
console.log(Result);

// ?

let Result2 = add2(10, 20)
console.log(Result2);