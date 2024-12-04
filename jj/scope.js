
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
//   }
  
//   console.log(a);
//   console.log(b);
//   console.log(c);
  

  function one() {
    const name = "sadam";
    function two() {
      const username = "Ahmad";
      console.log(name);
      console.log(username);
    }
  
    two();
  }
   one();
  
  function addone(num) {
    return num + 1;
  }
  console.log(addone(3));
  
  const addtwo = function (num) {
    return num + 2;
  };
  console.log(addtwo(5));
  
  const add =function (value1,value2){
    return value1 + value2;
  };
  console.log(add(2,4));

  const sub =function (value1,value2){
    return value1 - value2;
  };
  console.log(sub(4,2));

  const multi =function (value1,value2){
    return value1 * value2;
  };
  console.log(multi(7,2));

  const divid =function (value1,value2){
    return value1/value2;
  };
  console.log(divid(3,90));