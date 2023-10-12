console.log(1 + 1);       // 2
console.log(1 + "1");     // 11

console.log(1 - "2")
console.log(1 - 2)

console.log(2 * 3);
console.log("2" * 3);
console.log( 4 / 2);
console.log("4" / 2 );

console.log(5 / 2); // 2.5
console.log(5 % 2); // 나머지 1
 
console.log('----할당연산자----');

let x = 10;
console.log(x);

x += 5;
console.log(x);

x -= 5;
console.log(x);

let a = 10;
a *= 2;
console.log(a);

console.log('----비교연산자----');

console.log(2 === 2);   // true
console.log("2" === 2);   // false
console.log(2 === "2");   // false
console.log('--연산자 결과--');
console.log(2 < 3);

console.log('----삼항 연산자----');
let y = 10;
let result = (y > 5) ? "크다" : "작다";
console.log(result);   // "크다"

let z = 20;
let result2 = (z < 10) ? "10보다 작다" : "10보다 크다"
console.log(result2);

console.log(typeof "5");