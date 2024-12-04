let age = 15;
if (age >= 18) {
  console.log("You can marry with Ayesha");
} else {
  console.log("Go to Sara");
}

let Salary = "1cr";
if (Salary < "0cr") {
  console.log("You can marry with Sara");
} else {
  console.log("Go to Ayesha");
}

// //  Practice
let Age = 18;
if (age <= 18) {
  console.log("You are Eligible for ID");
} else {
  console.log("You are under age");
}

let fare = 200;
if (fare <= 100) {
  console.log("Hop on the bus");
} else {
  console.log("You are'n allowed to enter in bus");
}

let fee = 16000;
if (fee < 16000) {
  console.log("you can enter the room");
} else {
  console.log("you cannot enter the room");
}

const username = true;
const password = true;
if (username & (password == true)) {
  console.log("You are loged in");
} else {
  console.log("You can't loged in");
}

const loginwithfacebook = false;
const loginwithgoogle = true;
if (loginwithfacebook || loginwithgoogle == true) {
  console.log("You can login");
} else {
  console.log("You can't loged in");
}
