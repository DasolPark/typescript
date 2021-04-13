{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time!');
    }
    workFullTime() {

    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time!!');
    }
    workPartTime() {

    }
  }

  // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const david = new FullTimeEmployee();
  const peter = new PartTimeEmployee();
  david.workFullTime();
  peter.workPartTime();

  const davidAfterPay = pay(david);
  const peterAfterPay = pay(peter);

  const obj = {
    name: 'david',
    age: 20,
  };

  const obj2 = {
    animal: '🦒',
  }

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, 'name'));
  console.log(getValue(obj, 'age'));
  console.log(getValue(obj2, 'animal'));
}