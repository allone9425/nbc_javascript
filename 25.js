
function multiplyBy(num) {
  return function(x) {
    return x * num;
  }
}

function add(x, y) {
  return x + y;
}


const multiplyByTwo = multiplyBy(2); 
/*
function multiplyBy(num) {
  return function(x) {
    return x * 2; [num 대신 2가 대체된것]
  }
}
*/ 
const multiplyByThree = multiplyBy(3);

console.log(multiplyByTwo(10)); // 매개변수 x에 10이 들어가서 10 * 2가 됨

console.log(multiplyByThree(10)); // 매개변수 x에 10이 들어가서 10 * 3이 됨

const result = add(multiplyByTwo(5), multiplyByThree(10)); 
//Two가 5 * 2 해서 10이 나오고 Three가 10 * 3 해서 30 나온값을 add해서 40이 됨

console.log(`최종 수치는 ${result}임`); //결과 출력