let str = "hello world";
// console.log(str)
// console.log(typeof str)
console.log(str.length);

let str1 = 'hello,';
let str2 = 'world';
let result = str1.concat(str2)
console.log(result)

let str3 = "Hello, world!";
console.log(str3.substr(7, 5)); // "world" 시작위치부터 몇개까지 표시할건지 
console.log(str3.slice(7, 12)); // "world" 시작위치부터 끝위치까지


let str4 = "Hello, world!";
console.log(str4.search('world!'))

let str5 = "Hello, world!";
let result01 = str5.replace("world",
"javascript")
console.log(result01)

let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02); // ["apple", " banana", " kiwi"]