// 01)  singleton
// Throgh constructor
function user(name, age) {
  this.name = name;
  this.age = age;
}
const object = new user("muneeb", 18);
console.log(object.name, object.age);

const tinderUser = {};
(tinderUser.id = "12Abc"),
  (tinderUser.name = "muneeb"),
  (tinderUser.Email = "hello@gmail.com");
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // only get the keys
console.log(Object.values(tinderUser)); // only get the values
console.log(Object.entries(tinderUser)); // give values and keys in double arrray
console.log(tinderUser.hasOwnProperty("name")); // check if the property is present or not
// ................................................................

// Through literals
const mysym = Symbol("Hello");
const user2 = {
  name: "muneeb",
  age: 18,
  [mysym]: "Hello2",
  location: "Multan",
  "full name": "hello ",
  Email: "muneebhasan@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
console.log("user information is:", user2);
console.log("user Email is :", user2.Email); // older version to get any one value
console.log("user Email is :", user2["Email"]); // new method to get any value
console.log("user full name is :", user2["full name"]); // thats why we use new method to get value
console.log("Symbol value is :", user2[mysym]);
user2.Email = "muneeb@gmail";
console.log(user2.Email);
// Object.freeze(user2);
user2.Email = "muneeb";
console.log(user2.Email);

user2.greetings = function () {
  console.log(`Hy my name is ${this.name}`);
};

console.log(user2.greetings());

// ..........Nested Objects........

const userInformation = {
  Name: "muneeb",
  fullName: {
    myName: "Muneeb Hasan",
    lastName: {
      mylastName: "Last name",
    },
  },
};
console.log(userInformation.fullName);

//............................
//How to combine or concate objects

let user3 = { 1: "A", 2: "B" };
let user4 = { 3: "C", 4: "D" };
let combine = Object.assign({}, user3, user4);
console.log(combine); // result will be same
let combine2 = { ...user3, ...user4 };
console.log(combine2); // result will be same but this is modern

// How the value from database comes

const users = [
  {
    id: 1,
    name: "muneeb",
    Email: "muneeb@gmail.com",
  },
  {
    id: 2,
    name: "Ahmad",
    Email: "Ahmad@gmail.com",
  },
  {
    id: 3,
    name: "hasan",
    Email: "hasan@gmail.com",
  },
];
console.log(users[1].name);

// ****** Destrcturing of Objects ******

const course = {
  cource_name: "Coding in Javascript",
  cource_instructor: "Sadam",
  cource_fee: "free",
};
const { cource_instructor: teacher } = course; // Destructuring
console.log(teacher);
console.log(teacher);
console.log(teacher);

// destructuring of Object with example
const data = {
  name: "Muneeb",
  age: 19,
  marital_status: "No",
};
const { marital_status: marriage } = data; // Destructuring
console.log(marriage);
console.log(marriage);
console.log(marriage);
console.log(marriage);

 