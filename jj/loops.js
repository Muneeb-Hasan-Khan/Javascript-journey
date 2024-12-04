// forOF
// while&do while
// filter
// for each
// forin

let value = 0;
while (value <= 10) {
  console.log(value);
  value = value + 2;
}

let array = ["Muneeb", "Hasan"];
let arr = 0;
while (arr < array.length) {
  console.log(array[arr]);
  arr = arr + 1;
}

let score = 220;
do {
  console.log(score);
  score++;
  if (score) {
    console.log(100);
  }
} while (score <= 220);

for (let value = 0; value <= 10; value++) {
  if (value == 5) {
    console.log("value is five you win");
  }
  console.log(value);
}
// forOF

const arrr = [1, 2, 3, 4];
for (const element of arrr) {
  console.log(element);
}

const string = "khan";
for (const element of string) {
  console.log(string);
}

const map = new Map();
map.set("Muneeb", "Hasan");
map.set("Muneeb", "Hasan");

for (const element of map) {
  console.log(Object.values(element).length);
}

const myarr = [1, 2, 3, 4, 5];
myarr.forEach((hasan) => {
  console.log(hasan);
});

/////////////////////

const languages = {
  js: "javascript",
  cpp: "cplusplus",
};

for (const key in languages) {
  console.log(`${key} ${languages[key]}`);
}

const myArrray = ["muneeb", 4, 5];
for (const key in myArrray) {
  console.log(myArrray[key]);
}

const boys = ["Muneeb", "Hasan", "Imarn"];
for (const boy of boys) {
  console.log(boys);
}

const objects = ["Monday", "Tuesday", "Wednesday"];
objects.forEach((value) => {
  console.log(objects);
});

const Month = ["Jan", "Feb", "Mar"];
Month.forEach((value, index) => {
  console.log(value, index);
});

const lang = {
  py: "Python",
  C: "C",
};
for (const key in lang) {
  console.log(key);
}
const veg = ["potato", "chilli", "tomato"];
for (const value of veg) {
  console.log(veg);
}

const employes = [
  { name: "Aman", age: 18, id: 232363 },
  { name: "Hasnain", age: 20, id: 212523 },
  { name: "Umar", age: 25, id: 298277 },
];
const Datas = employes.filter((value) => {
  return value.age >= 20 ? value : "";
});
console.log(Datas);

// for each
const nbr = [1, 2, 3, 4, 5, 6];
nbr.forEach((value) => {
  console.log(value);
});

// filter
const name = ["Muneeb", "Hasan"];
const store = name.filter((val) => {
  return val;
});
console.log(store);

const studentdata = [
  { name: "muneeb", age: 10, id: 2323 },
  { name: "Hasan", age: 20, id: 2125 },
  { name: "Khan", age: 30, id: 2982 },
];
const data = studentdata.filter((value) => {
  if (value.age >= 15) {
    return value;
  }
});
console.log(data);

const employees = [
  { name: "Aman", age: 18, id: 232363 },
  { name: "Hasnain", age: 20, id: 212523 },
  { name: "Umar", age: 25, id: 298277 },
];
const Data = employees.filter((value) => {
  return value.age >= 20 ? value : "";
});
console.log(Data);

const numbers = [1, 2, 3, 4, 5];
const data2 = numbers
  .map((num) => {
    return num;
  })
  .map((num) => {
    return num + 1;
  })
  .map((num) => {
    return num + 1;
  });
console.log(data2);

// exception handling
// error handling

const userAuthentication = (inputPassword) => {
  try {
    const username = "sadam";
    const password = "sadam@123";
    if (!password) {
      throw new Error("Please enter password");
    }
    if (password == inputPassword) {
      console.log(`welcome ${username}`);
    } else {
      throw new Error("incorrect passord");
    }
  } catch (error) {
    console.log("Error", error.message);
  }
};
userAuthentication();
