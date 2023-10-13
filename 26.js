const myMap1 = new Map;
myMap1.set('key', 'value');
console.log(myMap1.get('key')); // set과 get은 세트라고 보면됨

console.log('***********');
const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

for (const key of myMap.keys()) {
  console.log(key);
}

for (const value of myMap.values()) {
  console.log(value);
}

for (const entry of myMap.entries()) {
  console.log(`${entry[0]}: ${entry[1]}`);
}