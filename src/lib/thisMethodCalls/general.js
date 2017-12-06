/***
 *
 * this code is based on this series
 * 
 * https://egghead.io/lessons/javascript-this-in-class-bodies
 *
 */
//Top level this always refurs to the global scope
//in case of browser its window in node its something called
//global


// in non-strict mode will return true
//console.log("this without strict",this === window);

function tryGlobalObject(){
  "use strict";
  try{
    if(window){
      console.log(`this with strict ${this === window.this}`);

    }
  }catch (e){
    console.log(`global object ${this === module.export}`)
  }


}
tryGlobalObject();

function PersonWithoutScope(fName,lName){
  this.firstName = fName;
  this.lastName = lName;
}

const pwithoutScope = PersonWithoutScope("G","B");

//THis will return G becasue when we did value assignment
// on the preious line we actually assigned it to the
//global scope
console.log(`Global First Name ${this.firstName}`);



function Person(){
  this.firstName = "Greg";
  this.lastName = "Bluv";

  this.sayHi = function(){
    console.log(`Hi ${this.firstName}`);
  };
};


console.log(Person())

const person = new Person();
person.sayHi()

// In this case receiver - person will be undfined because it fals under
// different scope



// In strict mode you can't assign variable to undefined
function settingInStrictMode(){
  // "use strict";
  console.log("settingInStrictMode to raise")
  //Cannot set property 'firstName' of undefined
  function person(fn,ln){
    this.firstName = fn;
    this.lastName = fn;
  }

  person("Greg","Bluv");
};
settingInStrictMode();


function boundPerson() {
  console.log("in the setTimeout 2",person.sayHi());
};

setTimeout(boundPerson.bind(person),100);

function SomethingWithName(fn,ln){
  this.firstName = fn;
  this.lastName = ln;
}

const somethingWithName = new SomethingWithName("Greg","Bluvshteyn");
console.log(somethingWithName);

const animal = {
  name: "Giraff",
  nameIt(){
    return this.name;
  }
};

console.log("Animal Name",animal.nameIt());

animalName = animal.nameIt;

//in this case it should be undefined
console.log("animal name ",animalName());


/* here the reciever (animal) belonged to global scope
so once we moved to setTimeout the global scope was lost
so we have to bind it to animal in order to preserve the original scope
 */
setTimeout(function(){
  animalName();
}.bind(animal),100);

/*******
 * BIND Method
 ********/



