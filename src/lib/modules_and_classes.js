let keyValue = 1000;
function test(){
  console.log("something");
}

export {keyValue,test};

let someText = "Some text";

/* can only have one default export */
export default someText;

export function classes_and_prototypes(){

  class Helper {
    static logSomething(msg){
      console.log("logging " + msg);
    }
  }

  Helper.logSomething("Greg");

  class Person {

    constructor(name){
      this.name = name;
    }

    greet(){
      console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
    }
  }


  class Max extends Person {
    constructor(age){
      super("Max");
      this.age = age;
    }

    greetTwice(){
      this.greet();
      super.greet();
    }

  }

  let max = new Max(32);
  max.greetTwice();


  console.log(max.__proto__ == Person.prototype)


  /* getters and setters */


  class Car {


    constructor(make){
      this._make = make;
    }

    get make(){
      return this._make;
    }

    set make(value){
      if ( value.length > 4 ) {

        this._make = value;
      } else {
        throw "rejected";
      }
    }

  }

  let toyota = new Car("tyota");

  toyota.make = "tyota";
  console.log(toyota);

}


export function subclassing(){

  class ConvertableArray extends  Array{

      convert(){
        let returnArray = [];
        this.forEach(value => returnArray.push(value));
        return returnArray;
      }

  }

  let numberArray = new ConvertableArray();

  numberArray.push(1);
  numberArray.push(2);
  numberArray.push(3);
  console.log(numberArray);
}