const name = "Muneeb";
const age = 18;
console.log(`Hello My Name is ${name} and my age is ${age}`); // tis method is called string interpolation
console.log(name[4]);
console.log(name.__proto__);

// All string methods // prototypes
console.log(name.length);
console.log(name.charAt(2));
console.log(name.indexOf("b"));
console.log(name.substring(0, 3)); // used to divide the string
console.log(name.slice(-4, 4)); // used to reverse the string

const trimmer = "      muneebhasan   ";
console.log(trimmer);
console.log(trimmer.trim()); // used for remove the white spaces

const url = "https://muneebkhan.com/student%40ofbscs";
console.log(url.replace("40", "-")); // replace any word from the string
console.log(url.includes("hasan")); // it return false bcz word "Ali" is not present in string

const splitMethod = "Sadam Munner StudentOf BSCS";
console.log(splitMethod.split(" ")); // it will convert string into array based object, and we can split from any word

// print Capital Alphabets
const Heading = "Welcome to the Capital Alphabets";
console.log(Heading);
for (let a = 65; a <= 90; a++) {
  console.log(String.fromCharCode(a));
}

// print Small Alphabets
const Headingtwo = "Welcome to the Small Alphabets";
console.log(Headingtwo);
for (a = 97; a <= 122; a++) {
  console.log(String.fromCharCode(a));
}

const lengthstring = "Hello world";
console.log(lengthstring.length);

const fruits = ["A", "B", "C", "D", "E"];
const myBest = fruits.slice(-4, -1);
console.log(myBest);

const str = "Turbo";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

const str3 = "Bmw, volvo";
console.log(str3.indexOf("H")); 
console.log(str3.endsWith("!")); 

const num = 42;
const num2 = String(num);
console.log(typeof num2);

const mynameis = "Muneeb";
const myname2 = Number(mynameis);
console.log(typeof myname2); 