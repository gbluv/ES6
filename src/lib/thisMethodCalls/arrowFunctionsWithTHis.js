/*
  arrow function doesn't have this instead it uses this of its execution context
*/
/*
  arrow functions can not be bound, it will always use the this arg that it CAPTURED WHEN IT WAS CREATED
*/

const otherThisArg = this;

const func = () =>{
  console.log(this === otherThisArg);
};

func();

func.call({});

/* Arrow funcitons can not be used as a constructor */
/* TypeError: func is not a constructor */
// new func();

let counter = {
  count: 0,
  incremenet(){
    const intervalId = setInterval(function (){
      /* in this case it will output NaN because this is will be a global object when this function will be called*/
      console.log(++this.count);
    }, 1000)

  }
};

//counter.incremenet();

/* the same with arrow function which will capture this at during lexical compilation */

counter = {
  count: 0,
  incremenet(){
    /* in this case set interval will use THIS of the bound method */
    const intervalId = setInterval(() =>{
      /* in this case it will output NaN because this is will be a global object when this function will be called*/
      if ( this.count === 3 ) {
        clearInterval(intervalId);
      } else {
        console.log(++this.count);
      }
    }, 1000);
  }
};

counter.incremenet();

class Person {
  constructor(){
    /* constructor Binds THIS to the receiver object and not global scope */
    /* Class body is explicitly in the strict mode */
    this.firstName = "Greg"
  }

  sayHi(){
    console.log(`Hi ${this.firstName}`);
  }

}

const person = new Person();

person.sayHi();

/* This way you will get this error */
/* TypeError: Cannot read property 'firstName' of undefined */
/* because the reciever of this function is a global object */
const sayHi = person.sayHi;
try {
  sayHi();

} catch ( e ) {
  console.log(e);
}

/* but if we bind sayHi to person it will work */

sayHi.bind(person)();

/* To fix the problem of the lost context you can bind function in the constructor */

class OtherPerson {


  constructor(fn, ln){
    this.firstName = fn;
    this.lastName = ln;
    this.sayHi = this.sayHi.bind(this);

    this.sayYo = () => {
      console.log(`Yo ${this.firstName}`);
    };
  }


  sayHi(){
    console.log(`Hi from other person:  ${this.firstName}`);
  } 



}

const otherPerson = new OtherPerson("Greg","Bluvshteyn");

otherPerson.sayHi();

const otherSayHi = otherPerson.sayHi;

otherSayHi();

const otherSayYo = otherPerson.sayYo;

otherSayYo();