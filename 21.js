let arr = [1, 2, 3];

let newArr = [...arr, 4]
console.log(arr); // [1, 2, 3]
console.log(newArr); // [1, 2, 3, 4]

console.log('------');
function exampleFunc (a, b, c, ...args) {
	console.log(...args)
  
}

exampleFunc(1, 2, 3)
exampleFunc(1, 2, 3, 4, 5, 6, 7)
console.log('**********');

const 입력 = '안녕하세요!';
console.log(`hello world ${입력}`);

console.log(`
이렇게
      멀티라인을
              지원합니다
                    굉장히 유용함

`);