// For Loops
/*let numbers = [1, 3, 5, 22, 26, 4, 7, 8, 55, 62, 35, 94, 10, 12, 30, 56];
for (i = 0; i < numbers.length; i++) console.log(numbers[i]);*/

// For loop printing out iteration from 0
for (let i = 0; i < 5; i++) {
  console.log("I am iteration", i);
}

// For loop printing out iteration from 1
for (let i = 1; i <= 5; i++) {
  console.log("I am iteration", i);
}

// 7's Multiplication Table Task
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= 10; i++) {
  let multi = 7;
  let answ = i * 7;
  console.log(`${i} * ${multi} = ${answ}`);
}

/*
  // Alternative
  for (let i = 1; i <= 10; i++)
    console.log(`%{i} * 7 = ${i * 7}`)
  */

// Break Loops
{
  let sum = i * 7;
  document.write(i + " x " + " 7 " + " = " + sum + "<br/>");
  if (sum == 49) break;
}

// For loop printing out odd numbers
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
// For loop printing out odd numbers in reverse order
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
