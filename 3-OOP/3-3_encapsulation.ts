{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const coffeeMaker = CoffeeMaker.makeMachine(48);
  const coffee = coffeeMaker.makeCoffee(6);
  console.log(coffee);

  coffeeMaker.fillCoffeeBeans(10);
  const addtionalCoffee = coffeeMaker.makeCoffee(2);
  console.log(addtionalCoffee);
  // coffeeMaker.fillCoffeeBeans(-5); // Invalid

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error(`Can't set under 0`);
      }
      this.internalAge = num;
    }

    constructor(
      private firstName: string,
      private lastName: string
    ) { }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.age = 6;
  console.log(user.age);
}