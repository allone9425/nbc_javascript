const myArray = [
  function(a, b) {
    return a + b;
  }, // 0번째 요소
  function(a, b) {
    return a - b;
  } // 1번째 요소
];

//console.log()안에 변수명과 인덱스번호, 
//그리고 대입할 매개변수를 넣어야함

//더하기
console.log(myArray[0](5, 10)); // 15 출력

//빼기
console.log(myArray[1](10, 5)); // 5 출력