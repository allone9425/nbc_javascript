const person = {
  name: 'john',
  age: 31,
  isMarried: true,
  //화살표 함수는 바인딩을 하지 않아서 underfined가 출력됨
  sayHello: () => {
    console.log(`Hello, My name is ${this.name}`);
  },

  //  sayHello: function () {
  //console.log(`Hello, My name is ${this.name}`);
  //console.log('Hello, My name is ' + this.name); 
  //여기서 this는 {스코프} 기준으로 person을 뜻함.
  //  }
};

person.sayHello();

