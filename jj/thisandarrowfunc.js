// This keyword is used to refer the current context

const user = {
  username: "sadam",
  age: "20",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website`);
    console.log(`The user ${this.username} have age ${this.age}, `);
    // console.log(this); will show all the content
  },
};
user.welcomeMessage();
user.username = "Ali";
user.welcomeMessage();
{
  console.log(this);
}

const welcome = function welcome() {
  let username3 = "MUNEEB";
  return this; // undefiend bcz this statement only works in objects , not functions
};
console.log(welcome());

const welcome2 = () => {
  const username4 = "HASAN";
  return this;
};
console.log(welcome2());

// Pure errow functions

const addtwo = (num3, num4) => {
  return num3 + num4;
};

console.log(addtwo(4, 5));

//  impleset return
const addthree = (num3, num4) => num3 + num4;
console.log(addthree(4, 5));

// //  impleset return
// const addfour = (num3, num4) => (num3 + num4);
// console.log(addfour(4, 5));

// how to return object
const returnobject = () => ({
  username5: "MUNEEB",
});
console.log(returnobject.call());

// immediately invoked function expression (IIFE)

// Named IIFI
(function CONNECTED() {
  console.log(`DB Connected`);
})();

// in arrow function
(() => {
  console.log(`DB connected two`);
})();

((name) => {
  console.log(`${name} your DB is connected`);
})("Muneeb");
