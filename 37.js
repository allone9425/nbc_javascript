var numbers = [10, 20, 3, 4, 15, 40];
/*
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max ,min);
*/

//spread operator
//console.log(numbers);
//console.log(...numbers); // 배열풀기 

var max = Math.max(...numbers)
var min = Math.min(...numbers)
console.log(max ,min);


console.log('*********************');

numbers.forEach(function(number, 인덱스){
  console.log(인덱스 + '번째 값' + number);
})