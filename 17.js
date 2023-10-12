// 0부터 10까지 수 중에서 2의 배수만 출력하기

for (let i = 0; i < 11; i++) {
  if (i >= 2) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

let person = { name: "John", age: 30, gender: "male" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}