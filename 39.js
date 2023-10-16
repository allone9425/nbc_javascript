class Person{
  constructor (name, age){
    this.name = name;
    this.age = age;
  }
  sayHello(){
    console.log(`${this.name}님 안녕하세요!`);
  }

  sayAge(){
    console.log(`${this.name}의 나이는 ${this.age}살이에요!`);
  }
}

const Person1 = new Person('홍길동', '30');
const Person2 = new Person('홍길순', '25');

Person1.sayHello();
Person2.sayHello();

Person1.sayAge();
Person2.sayAge();