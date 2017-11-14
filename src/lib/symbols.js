export function symbols(){

  /* to reuse symbols use Symbol.for */
  /* This would be good for ids and such */
  let symbol = Symbol.for('age');
  let person = {
    name: "max"
  };
  function makeAge(person){
    let ageSymbol = Symbol.for('age');
    person[ageSymbol]  = 27;

  }
  makeAge(person);
  console.log(person[symbol]);


  let things = {
    "name":"Something",
    "properties":["warm","blue","long"],
    [Symbol.iterator]: function(){
      let i = 0;
      return {
        next: () => {
          return {
            "done":this.properties.length < i,
            "value":this.properties[i]
          }
          i++;
        }
      }

    }
  }

  let it = things[Symbol.iterator]();

  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());

  function *dosomethin(){
    yield "one";
    yield "two";
  }

  it = dosomethin();
  console.log(it.next());



}