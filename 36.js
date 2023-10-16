var numbers = [10, 20, 3, 4, 15, 40];

var max = (min = numbers[0]); // 10

numbers.forEach(function (숫자){ //숫자는 매개변수 
  if (숫자 > max) {
    max = 숫자;
  }

  if (숫자 < min){
    min = 숫자;
  }
})
console.log(max, min);

