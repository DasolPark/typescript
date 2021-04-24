'use strict';

const x = {};
const y = {};
console.log(x); // x -> Object
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = []; // can use .every, .map, .pop, .push ...
console.log(array); // array -> Array -> Object

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level ✨
  // this.makeCoffee = shots => {
  //   console.log('making...');
  // }
}

// Prototype member level ✨
CoffeeMachine.prototype.makeCoffee = shots => {
  console.log('making...');
}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1); // machine1 -> CoffeeMachine -> Object
console.log(machine2);
machine1.makeCoffee(33);

function LatteMachine(milk) {
  this.milk = milk;
}

const latteMachine1 = new LatteMachine(123);
console.log(latteMachine1); // latteMachine1 -> LatteMachine -> Object

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine2 = new LatteMachine(456);
console.log(latteMachine2); // latteMachine2 -> LatteMachine -> CoffeeMachine -> Object
latteMachine2.makeCoffee(10); // now we can use .makeCoffee(number)

// you can check in https://www.typescriptlang.org/play