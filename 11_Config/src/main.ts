'use strict';
class Car {
  engine = 0;

  move() {
    const engine = this.engine + 1;
    console.log('how many engines do you have?', engine);
  }
}

const car = new Car();
car.move();