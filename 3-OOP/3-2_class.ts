{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeansGram: number = 0; // instance (object) level

    constructor(coffeeBeansGram: number) {
      this.coffeeBeansGram = coffeeBeansGram;
    }

    // static makeMachine(coffeeBeansGram: number): CoffeeMaker {
    makeMachine(coffeeBeansGram: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeansGram);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(48);
  maker2.makeMachine(3);
  console.log(maker2);
  // const maker3 = CoffeeMaker.makeMachine(3);
}