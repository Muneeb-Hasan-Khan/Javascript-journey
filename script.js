var Age = 20;
var Year = 2025;

console.log(Year - Age, Age);

if (true) {
  var x = 10;
  let y = 22;
  const z = 39;
}
console.log(x);
// console.log(y);
// console.log(z);

let a = 10;
let b = 29;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

const number = "123";
const othernumber = Number(number);
console.log(typeof number);
console.log(typeof othernumber);

if (number % 2 == 0) {
  console.log(number, "is even");
} else {
  console.log(number, "is odd");
}

function citizen(age) {
  if (age < 13) {
    console.log("Child");
  } else if (age < 18) {
    console.log("Teenager");
  } else if (age > 18) {
    console.log("Adult");
  } else if (age > 50) {
    console.log("Senior");
  }
}
citizen(9);
citizen(13);
citizen(19);
citizen(59);

const num = -9;
console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");

function Trafficsignal(trafficlight) {
  switch (trafficlight) {
    case "RED":
      console.log("STOP");
      break;
    case "YELLOW":
      console.log("READY");

      break;
    case "GREEN":
      console.log("GO");
      break;
  }
}
Trafficsignal("RED");

for (let x = 1; x <= 10; x++) {
  console.log(x);
}

let m = 1;
do {
  console.log(`5 x ${m} = ${m * 5}`);
  m++;
} while (m <= 10);

function greet(name) {
  console.log(`Assalamualaikum ${name}`);
}
greet("Ali");

function sum(num1, num2) {
  return num1 + num2;
}

const numbers = [2, 32, 42, 54, 67, 12, 23, 15];
const maxnumber = Math.max(...numbers);
console.log(maxnumber);

const agreet = (name) => console.log(`AOA ${name}`);
agreet("Ali");

const square = () => {
  console.log(Math.sqrt(49));
};
square();

const arraystring = ["orange", "pen", "wall", "hair", "hand"];
const longword = (arraystring) => arraystring.find((str) => str.length > 5);
const result = longword(arraystring);
console.log(result);

let array = [2, 3, 19, 29, 38, 40, 50];
let add = 0;
for (let i = 0; i < array.length; i++) {
  add += array[i];
}
console.log(add);

const arr = ["Ali", "Hassan", "Umar", "Abid"];
let long = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > long.length) {
    long = arr[i];
  }
}
console.log(long);

let myarr = [31, 23, 19, 69, 31, 29, 69, 38];
let otherset = new Set(myarr);
let reslt =Array.from(otherset)
console.log(reslt);
