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

    constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const addedSugar = this.sugar.addSugar(coffee);
      return this.milk.addMilk(addedSugar);
    }
  }

  interface MilkFrother {
    addMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // Milk
  class CheapMilkSteamer implements MilkFrother {
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

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): boolean {
      console.log('Steaming some fancy milk...🥛');
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

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): boolean {
      console.log('Steaming some cold milk...🥛');
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

  class NoMilk implements MilkFrother {
    addMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Sugar
  class CandySugarProvider implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sugar...🍬');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class GenuineSugarProvider implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sugar...🍬');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      }
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // Ingredients
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new CandySugarProvider();
  const sugar = new GenuineSugarProvider();
  const noSugar = new NoSugar();

  // Machines
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latterMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatterMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatterMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
}