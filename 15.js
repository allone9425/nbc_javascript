let person = {
  name : '홍길동',
  age : 30,
  gender : '남자',
  
}

console.log(person.name);

let keys = Object.keys(person);
console.log(keys);   // ["name", "age", "gender"]

let values = Object.values(person);

console.log(values);   // ["홍길동", 30, "남자"]

let entries = Object.entries(person);

console.log("entries =>", entries);

console.log("------");
let newPerson = {};
Object.assign(newPerson ,person);
console.log("newPerson =>", newPerson);   
// { name: "홍길동", age: 35, gender: "남자" }

let newPerson2 = {};
Object.assign(newPerson2 ,person, {age : 31});
console.log("newPerson =>", newPerson2);   
// { name: "홍길동", age: 35, gender: "남자" }

let person1 = {
  name: "홍길동",
  age: 30,
  gender: "남자"
};

let person2 = {
  name: "홍길동",
  age: 30,
  gender: "남자"
};

console.log(person1 === person2);   // false

console.log('******');

let person3 = {
  name: "홍길동",
  age: 30
};

let person4 = {
  gender: "남자"
};

let mergedPerson = {...person3, ...person4};

console.log(mergedPerson);   // { name: "홍길동", age: 30, gender: "남자" }