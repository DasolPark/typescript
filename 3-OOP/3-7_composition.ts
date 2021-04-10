{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      if (this.coffeeBeans < CoffeeMachine.BEANS_GRAM_PER_SHOT * shots) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= CoffeeMachine.BEANS_GRAM_PER_SHOT * shots;
    }

    private preheat() {
      console.log('heating up...🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕️`);
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CheapMilkSteamer {
    private steamMilk(): boolean {
      console.log('Steaming some milk...🥛');
      return true;
    }

    addMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      }
    }
  }

  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log('Getting some sugar...🍬');
      return true;
    }
    mixSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string, private milkFrother: CheapMilkSteamer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return this.milkFrother.addMilk(coffee);
    }
  }

  class SweetCoffeMachine extends CoffeeMachine {
    constructor(beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.mixSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      beans: number,
      private milk: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const addedMilk = this.milk.addMilk(coffee);

      return this.sugar.mixSugar(addedMilk);
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1', new CheapMilkSteamer),
    new SweetCoffeMachine(16, new AutomaticSugarMixer),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1', new CheapMilkSteamer),
    new SweetCoffeMachine(16, new AutomaticSugarMixer),
  ]

  machines.forEach((machine, index) => {
    console.log('----------------------');
    machine.makeCoffee(1);

    if (index === machines.length - 1) {
      console.log('----------------------');
    }
  })

  const sweetCaffeLatteCoffee = new SweetCaffeLatteMachine(30, new CheapMilkSteamer, new AutomaticSugarMixer);
  console.log(sweetCaffeLatteCoffee.makeCoffee(1));
}