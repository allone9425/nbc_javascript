const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value3');
mySet.add('value4');
mySet.add('value5');


//value1이 있는지 있다면 true 없다면 false
console.log(mySet.has('value1')); 

console.log(mySet.size); // set의 크기

for (const value of mySet.values()) {
  console.log(value);
}
