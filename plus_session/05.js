const arr01 = ["홍길동", "홍길순", "옹길순"];

const result = arr01.filter(function (name) {
  if (name.includes("홍길")) {
    return true;
  } else {
    return false;
  }
});
console.log(result);

const result2 = arr01.filter((val) => val.includes("홍길"));
console.log(result2[0]);

const result3 = arr01.find((val) => val.includes("홍길"));
console.log(result3);
