const days = 3;

switch (days) {
  case 1:
    console.log(`Today is Monday`);
    break;
  case 2:
    console.log(`Today is Tuesday`);
    break;
  case 3:
    console.log(`Today is wednesday`);
    break;
  case 4:
    console.log(`Today is Thursday`);
    break;
  case 5:
    console.log(`Today is Friday`);
    break;
  case 6:
    console.log(`Today is Saturday`);
    break;
  case 7:
    console.log(`Today is Sunday`);
    break;
  default:
    console.log(`invalid day number`);
    break;
}
const day = "Fri";

switch (day) {
  case "Mon":
    console.log(`Today is Monday`);
    break;
  case "Tues":
    console.log(`Today is Tuesday`);
    break;
  case "wed":
    console.log(`Today is wednesday`);
    break;
  case "Thurs":
    console.log(`Today is Thursday`);
    break;
  case "Fri":
    console.log(`Today is Friday`);
    break;
  case "Sat":
    console.log(`Today is Saturday`);
    break;
  case "Sun":
    console.log(`Today is Sunday`);
    break;
  default:
    console.log(`invalid day`);
    break;
}

const userEmail = "muneebhk@gmail.com";
if (userEmail) {
  console.log(`Got The Email`);
} else {
  console.log(`No Email Found`);
}
// Now if empty string
// falsy
const userEmail2 = "";
if (userEmail2 && userEmail2.length > 0) {
  console.log(`Got The Email`);
} else {
  console.log(`No Email Found`);
}

if (userEmail2.length === 0) {
  console.log(`List is Empty`);
} else {
  console.log(`List is not Empty`);
}

// truthy
// check the Array
const userEmail3 = [];
if (userEmail3) {
  console.log(`Got The Email`);
} else {
  console.log(`No Email Found`);
}
// check the object
const myObject = {};
if (Object.keys(myObject).length === 0) {
  console.log(`List is Empty`);
} else {
  console.log(`List is Not Empty`);
}
const value1 = 5 ?? "MUNEEB";
console.log(value1);

const value2 = null || "MUNEEB";
console.log(value2);

//Now
const value3 = undefined || "MUNEEB";
console.log(value3);

//Now
const value4 = undefined || null;
console.log(value4);

//Now
const value5 = null ?? 10 ?? 20 ?? 30;
console.log(value5);

// condition ? true : false
const BookPrice = 100;
BookPrice >= 90 ? console.log(`You Can Buy`) : console.log(`You Can't But`);