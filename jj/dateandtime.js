let myDate = new Date();
console.log(myDate);
console.log(typeof myDate);

let myDate2 = new Date();
console.log(myDate2.toString());
let myDate3 = new Date();
console.log(myDate3.toISOString());

let myDate4 = new Date();
console.log(myDate4.toDateString());

let myDate5 = new Date();
console.log(myDate5.toJSON());

let myDate6 = new Date();
console.log(myDate6.toLocaleString());

let myDate7 = new Date();
console.log(myDate7.toLocaleDateString());
let myCreatedDate = new Date(2024, 8, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2024-2-8");
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate5 = new Date("02-08-2024");
console.log(myCreatedDate5.toLocaleString());

let myCreatedDate3 = new Date(2024, 8, 23, 5, 23, 34);
console.log(myCreatedDate3.toLocaleString());

// timestamp

const currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth()); // 0-indexed (0 = January, 1 = February, ...)
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.setFullYear(2023));
console.log(currentDate.setMonth(5));

const myTimeStamp = Date.now();
console.log(Math.floor(Date.now() / 1000)); // convert milli second into second

const newDate = new Date();
console.log(newDate.getDay("sunday"));
console.log(newDate.getMonth() + 1);

// customize your date in your own way

newDate.toLocaleString("default", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  //   dateStyle:"full"
});
console.log(newDate);
