let x = 10;
if(x > 0){
console.log('x는 양수입니다');
}

let y = "hello world"
if(y.length >= 5){
  console.log(y.length);
}

let z = -3;
if(z > 0){
  console.log('x는 양수입니다.');
} else{
console.log('x는 음수입니다.');
}

// let ex = 10; 
// if(ex < 0){

// }
// else if(조건2){

// }
// else{

// }

let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "바나나":
    console.log("바나나입니다.");
    break;
  case "키위":
    console.log("키위입니다.");
    break;
  default:
    console.log("아무것도 아닙니다.");
    break;
}