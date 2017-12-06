const person = {
  firstName: "Greg",
  sayHi(){
    console.log(`Hi ${this.firstName}`);
  }
};

person.sayHi();

/* in settimout context is different so the this of the sayHi function is also different */
setTimeout(person.sayHi,0);

setTimeout(person.sayHi.bind(person),1);

/* Once function was bound call,apply or bound wont' work */
const otherPerson = {
  firstName: "Joe"
};

person.sayHi.call(otherPerson); // will still return Greg

/* Bind polyfill */

Function.prototype.bind = function (thisArg,...functionArgs){
  const func = this;
  return (...args) => {
    func.apply(thisArg,[...args,...functionArgs]);
  }
};

function sayYo(){
  console.log(`Yo ${this.firstName}`);
}

setTimeout(sayYo.bind(otherPerson),100);
