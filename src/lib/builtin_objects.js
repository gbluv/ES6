export default function BuiltInObjects(){

  let student = {
  };

  let boss = {
    name: "Max"
  };

  Object.setPrototypeOf(student,boss);
  console.log(student.__proto__ === boss);
  console.log(student.name); // will print max


  /* Arrays */

  let myArray = [10,20,30];

  let newArray = Array.from(myArray,val => val * 2);
  console.log(newArray);

  newArray.fill(100,0,1);
  console.log(newArray);

  console.log(`new array ${newArray.find(val => val <  300)}`);  // stops on the first match


  let inventory = [
    {name: "apple",quantity: 10},

    {name: "cherries",quantity: 20},

    {name: "nuts",quantity: 5}
  ];

  console.log(inventory.find(fruit =>{
    return fruit.quantity < 30;
  }));


  let arr2 = [4,5,6];
  console.log(arr2.copyWithin(1,0,2));

  /* get description of the elements in the array */
  let it3 = arr2.entries();
  for(let entry of it3){
    console.log(entry);
  }


  /* maps */
  let cardAce = {
    name: "Ace of Spades"
  };

  let cardKing = {
    name: "king of spades"
  };

  let deckOfCards = new Map();
  deckOfCards.set('ca',cardAce);
  deckOfCards.set('ck',cardKing);

  console.log(deckOfCards.get("ca"));

  deckOfCards.delete("ca");
  console.log(deckOfCards);

  deckOfCards.clear();
  console.log(deckOfCards.size);


  deckOfCards.set('ca',cardAce);
  deckOfCards.set('ck',cardKing);

  /* looping through maps */

  for(let key of deckOfCards.keys()){
    console.log(key);
  }


  for(let value of deckOfCards.values()){
    console.log(value);
  }

  for(let pair of deckOfCards){
    console.log(pair);
  }







}