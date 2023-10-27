var s = function (x, y, z) {
  return x + y + z;
};

console.log(s(3, 4, 5));

var star = function (a, b) {
  return a * b;
};

console.log(star(4, 3));

var plus = function (q, w, e, t) {
  console.log(q + w + e + t);
  // let result = q + w + e + t;
};
var result = plus(1, 1, 1, 1);
console.log(result);

setTimer(function () {}, 3000);

var func01 = function (a, b) {};
