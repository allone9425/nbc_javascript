let [value1, value2] = [1, "new"];
console.log(value1); // 1
console.log(value2); // "new"

let user = {name: "nbc", age: 30};
let {name: newName, age: newAge} = user;
console.log(newName, newAge) //nbc 30
//name이라는 변수를 newName에, age라는 변수를 newAge에 할당해줘서
//출력은 newName, newAge에 해야함.

let {name, age, birthDay = "today"} = user;
console.log(birthDay) // today