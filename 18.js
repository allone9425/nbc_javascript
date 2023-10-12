let i = 0;
while (i < 10){
  console.log(i);
  i++;
}

//while
let a = 3;
while (a < 100){
  if(a % 5 === 0 && a >= 5){
    console.log(a);
  }
  a++;
}

//do while
let b = 0;

do {
  console.log(b);
  b++;
} while (b < 10);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
