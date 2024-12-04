// define functions // differnece b/w parameters and argument
function myName() {
  console.log("School");
  console.log("Hostel");
  console.log("Home");
}
myName();

// check if the argument is number and their data type is equal
function addTwoNumbers(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    console.error("Error: Both arguments must be numbers");
  }
}

let result = addTwoNumbers(10, 20);
console.log("Result is:", result);

// check if the user login or not

function userLoggedIN(username) {
  if (typeof username === "string" && username.length > 0) {
    return `welcome ${username}`;
  } else if (!username) {
    return `Undefined : Please Enter username`;
  }
}
const storedvalue = userLoggedIN("muneeb");
const storedvalue2 = userLoggedIN();
console.log(storedvalue);
console.log(storedvalue2);

function calculateCartsPrice(...quantity1) {
  const sum = quantity1.reduce((acc, current) => acc + current, 0);
  return sum;
}
console.log(calculateCartsPrice(10, 20, 30, 40, 50, 60)); // Output: 210

// function with object

function add(anyuser) {
  return `The customer named by "${anyuser.name}" bought the ${anyuser.product} at ${anyuser.price} Price`;
}
let store = add({
  name: "MUNEEB",
  product: "Phone",
  price: 50000,
});
console.log(store);

// get value from array using function

const myArray = [100, 200, 300, 400, 500];
function findvalue(getArray) {
  return getArray[1];
}
console.log(findvalue(myArray));
