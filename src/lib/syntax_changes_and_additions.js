export function letExamples(){

  /* let makes a variable to be block scoped */

  if(true){
    let age = 22;
    console.log("age: ",age); //will print 22
  }

  /* will raise reference error: ReferenceError: age is not defined */
  //console.log(age);
}

export function constExample(){
  const age = 27;
  /* this will raise an error and will not even compile */
  //age = 28;

  const ages = [10,20,15,30];
  /* this will be allowed */
  /* because ages here is a pointer reference to the value in the background */
  ages.push(5);

  /* this will also work for the same resason */

  let obj = {
    age: 10
  };
  obj.age = 20;

  console.log(obj);
}

/* hoisting */
export function hoisting(){

  /* this will raise a reference error
  age = 27;
  let age;
  the definition statment will not be placed no top anymore.
  */

  /* thi will work */

  function doSomething(){
    age = 22;
  }

  let age;
  doSomething();
  console.log(" new age" + age);

}

export function fat_arrow_function(){

  function fn(){
    console.log("Hello")
  }
  /* changed to */

  var fn = () => console.log("Hello");
  fn();
  /* in case if it returns single value */
  var fn = () => "Hello";

  var fn1 = (a,b) => a + b;

  console.log(fn1(2,3));

  /* with only one argument you can leave out  parentheses */
  var fn2 = a => a + 3;

  console.log("fn2 " + fn2(1));

  /* to be used a callback */

  setTimeout(() => console.log("heelo"),1000);

}

export function function_and_this_keyword(){

  /* refers to the global context */

  var fn2 = () => console.log(this);

  fn2();

  function onClick(){
    console.log(this);
  }

  var button = document.querySelector("button");
  button.addEventListener("click",onClick);

}

export function function_default_params(){

  var isEqueal = (n1, n2 = 10 / 2) => n1 === n2;
  console.log(isEqueal(5))
  console.log(isEqueal(2,2));


}

export function object_literals(){



  /* template literrals */

  let name = "Anna";
  let age = 25;
  let greet = () => "hi";


  console.log(`
    My Name is ${name + '!!!'} and my age is ${age}
    and this is how keep disable tempalte \${name}
   `)

  /* dynamic field */

  let ageField = "age";

  let obj = {
    name: 'Max',
    age,
    [ageField]: 28, /*You've created an alyas ot the age property */
    greet,
    sayHi(){
      console.log(this.name + " age?:" + this.age);
    },
    "hi"(){
      console.log(" said hi");
    }
  };

  console.log(obj);
  obj.sayHi();
  obj["hi"]();
  console.log(obj[ageField]);



}

export function rast_and_spread(){

  /* rest operator */

  function sum(...args){
    let sum = 0;
    for(var i=0;i < args.length;i++){
      sum += args[i];
    }
    return sum;
  }

  console.log(" sum function " + sum(10,20,30));


  var argsArray = [1,2,3,4];
  console.log(sum(...argsArray));

  /* the for-of loop */

  for(let r of argsArray){
    console.log(r);
  }




}

export function destructuring(){
  let [a,b] = [1,2];
  console.log(`a: ${a} and b: ${b}`);

  let {c,d} = {c: 3,d: 4};

  console.log(`c: ${c} and d: ${d}`);

  let numbers = [1,2,3];

  let [x,,z] = numbers;
  console.log(`---- this is a: ${x} and this is c: ${z}`);

  /* for desstructig maps skiping param will not work
  * because reference goes by name and names must match
  * */

  //{name,,val} = {name: "greg",val: "test}

  /* aliases */

  let obj = {
    name: "Greg",
    greet: function (){
      console.log("hello");
    }
  };

  let {name,greet: hello} = obj;
  /* Hello is an alyasis to greet function */
  hello();

}
