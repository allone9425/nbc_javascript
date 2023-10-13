function callFunction(func) {
  func();
}

const sayHello = function() {
  console.log('Hello!');
};

callFunction(sayHello);