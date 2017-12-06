
/*************
 *
 * Call method
 */

function sayHi(){
  console.log(`Saying Hi ${this.firstName}`);
}


const gregPerson = {
  firstName: "Joe"
};
/* first argument is called - this arg */
sayHi.call(gregPerson);
sayHi.apply(gregPerson);
sayHi();

const numbers = [10,20,30,40];
const slice1 = numbers.slice(1,4);
const slice2 = numbers.slice.call(numbers,1,4);
const slice3 = numbers.slice.apply(numbers,[1,4]);

/*
  (c)all => comma
  (a)pply => array
 */


console.log(slice1,slice2,slice3);

/* NOTE, in none strict mode if you call with undefined value, javascript will ignore it and use a global object */

function func(){
  console.log("func is global? ",this === global);
}

//func.call(null);

/* in strict mode it will call/apply with the scope you are passing to it */
/* in this example global will be null */
(() =>{
  "use strict";
  function isGlobal(){
    console.log("isGlobal ", this === global);
  }

  isGlobal.call(null);
})();
