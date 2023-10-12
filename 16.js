let fruits = ["사과", "바나나", "오렌지"];
let numbers = new Array(5);

console.log(fruits[0]);   // "사과"
console.log(fruits[1]);   // "바나나"
console.log(fruits[2]);   // "오렌지"



let fruits2 = ["사과", "바나나"];

fruits2.push("오렌지");

console.log(fruits2);

let fruits3 = ["사과", "바나나", "오렌지"];

fruits3.pop();

console.log(fruits3);   // ["사과", "바나나"]


let fruits4 = ["사과", "바나나", "오렌지"];
fruits4.shift();
console.log(fruits4);   // ["바나나", "오렌지"]

let fruits5 = ["사과", "바나나", "오렌지"];

fruits5.splice(1, 1, "포도");

console.log(fruits5);   // ["사과", "포도", "오렌지"]

let fruits6 = ["사과", "바나나", "오렌지"];

let slicedFruits = fruits6.slice(1, 2);

console.log(slicedFruits);   // ["바나나"]

console.log('-----');

let numbers2 = [1, 2, 3, 4, 5];

let filteredNumbers = numbers2.filter(function(item) {
  return item === 5;
});

console.log(filteredNumbers);  


let numbers5 = [1, 2, 3, 4, 5];

let result = numbers5.find(function(item) {
  return item > 3;
});

console.log(result);  
