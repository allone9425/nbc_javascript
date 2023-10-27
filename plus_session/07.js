const arr = [1, 2, 5, 10, 4];

let result = arr
  .map(function (값) {
    return 값 * 2;
  })
  .filter(function (값) {
    return 값 >= 5;
  })
  .forEach(function (값) {
    console.log(값);
  });
