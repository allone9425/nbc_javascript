let result1 = 1 + "2"
console.log(result1)
console.log(typeof result1)


let result2 ="1" + true; 
console.log(result2)
console.log(typeof result2)

let result3 = 1 - "2"; 
console.log(result3)
console.log(typeof result3)

let result4 = "2" * "3"; 
console.log(result4)
console.log(typeof result4)

console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log("----------------------")
console.log(Boolean("false"));   // true
console.log(Boolean({}));   // true
 
let result5 = String(123);       // "123"
console.log(typeof result5);
console.log(result5);
let result6 = String(true);      // "true"
console.log(typeof result6);
console.log(result6);
let result7 = String(false);     // "false"
console.log(typeof result7);
console.log(result7);
let result8 = String(null);      // "null"
console.log(typeof result8);
console.log(result8);
let result9 = String(undefined); // "undefined"
console.log(typeof result9);
console.log(result9);

let result10 = Number("123")
console.log(result10)
console.log(typeof result10)
